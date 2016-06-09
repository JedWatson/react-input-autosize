import React from 'react';
import test from 'tape';
import expect from 'expect';
import { mount as enzymeMount } from 'enzyme';
import { replace, compose, flip } from 'ramda';

import AutosizeInput from '../AutosizeInput';


/* Getting Started
------------------------------------
To run the test suite, there is currently one issue https://github.com/airbnb/enzyme/issues/302,
which in order to temporarily fix you will need to replace the following line in ./node_modules/enzyme/build/react-compat.js
original -> TestUtils = require('react/addons').addons.TestUtils;
new -> TestUtils = require('react-addons-test-utils');
*/

/* General Questions
------------------------------------
1.  Should placeholderIsMinWidth have a propTye of bool instead of string,
2.  How to structure the tests "describe"?
3.  How to move away (if possible) from a dependency on Enzyme's "Full Rendering" and use "Shallow Rendering" instead?
4.  How to move away (if possible) from having to run the tests with a browser (currently Chrome)?
5.  Currently, the assertions for the width are against the input itself and not the container. Is that correct?
5.  Can the core logic that computates the next width be abstracted into a function
		that can be easily tested. Eg.
		...
		const currentWidth = getCurrentWidth();
		const nextWidth = getNextWidth('example');
		expect(currentWidth).toBeLessThan(nextWidth);
*/

/* Test Glossary
-------------------------------------
1.  should render <AutosizeInput />
2.  should render the value passed to <AutosizeInput />'
3.  should render a default value passed to <AutosizeInput />
4.  should render a className passed to <AutosizeInput />
7.  renders props that are specific to the input
5.  placeholder value should have lower precedence over value
6.  placeholder should only set the minimum width if there is value for placeholder // currently failing
7.  placeholder can set the min-width when specified
8.  <AutosizeInput /> with a longer value than another <AutosizeInput /> will be wider
9.  a value should have a higher precedence over a defaultValue or placeholder
10. input value changes when passed a new value
11. input width increases when <AutosizeInput /> is updated with a longer value
12. input width decreases when <AutosizeInput /> is updated with a shorter value
13. onChange is called and invokes the passed callback
*/


const div = document.createElement('div');
div.setAttribute('id', 'root');
document.querySelector('body').appendChild(div);
const mountNode = document.getElementById('root');

const stubFunction = () => {};
const mount = flip(enzymeMount)({ attachTo: mountNode });
const parsePx = compose(parseFloat, replace('px', ''));

class Container extends React.Component {
	constructor (props) {
		super();
		this.state = {
			value: props.testValue || 'test',
		};
	}
	render () {
		return (
			<AutosizeInput
				value={this.state.value}
				onChange={({ value }) => this.setState({ value })}
			/>
		);
	}
}


// renders correctly
test('should render <AutosizeInput />', (t) => {
	const wrapper = mount(<AutosizeInput />);
	expect(wrapper.type()).toExist();
	t.pass('component rendered');
	t.end();
});

// renders a value
test('should render the value passed to <AutosizeInput />', (t) => {
	const expected = 'example';
	const wrapper = mount(
		<AutosizeInput
			value={expected}
			onChange={stubFunction}
		/>
	);
	const inputValue = wrapper.find('input').prop('value');
	const valueDisplayed = wrapper.childAt(1).text();

	expect(valueDisplayed).toBe(expected);
	t.pass('value is correct');

	expect(valueDisplayed).toEqual(inputValue);
	t.pass('value displayed equals the input value');

	t.end();
});

// renders a default value
test('should render a default value passed to <AutosizeInput />', (t) => {
	const expected = 'default';
	const wrapper = mount(
		<AutosizeInput
			defaultValue={expected}
			onChange={stubFunction}
		/>
	);
	const value = wrapper.childAt(1).text();

	expect(value).toBe(expected);
	t.pass('renderes the default value');
	t.end();
});

// renders a className
test('should render a className passed to <AutosizeInput />', (t) => {
	const expected = 'autosize-input';
	const wrapper = mount(
		<AutosizeInput
			className={expected}
			onChange={stubFunction}
		/>
	);

	expect(wrapper.prop('className')).toBe(expected);
	t.pass('renderes the correct className');
	t.end();
});

// renders input specific props
test('renders props that are specific to the input', (t) => {
	const expectedClassName = 'input-class';
	const inputStyle = {
		background: 'blue',
		padding: 20,
		// fails when trying to use width
		// perhaps warns when blacklisted style
		// properties are trying to be used?
		// width: 20,
	};
	const wrapper = mount(
		<AutosizeInput
			value="value"
			inputClassName={expectedClassName}
			inputStyle={inputStyle}
			onChange={stubFunction}
		/>
	);
	const input = wrapper.childAt(0);

	expect(input.prop('className')).toBe(expectedClassName);
	t.pass('value for inputClassName is on the input');

	const actualInputStyle = input.prop('style');
	const hasStyles = Object.keys(inputStyle).every((key) => {
		return inputStyle[key] === actualInputStyle[key];
	});
	expect(hasStyles).toBe(true);
	t.pass('style object includes all the inputStyles');
	t.end();
});

// placeholder and value used at the same time
// placeholder value should have lower precedence over value
test('placeholder value should have lower precedence over value', (t) => {
	const expected = 'value';
	const wrapper = mount(
		<AutosizeInput
			value={expected}
			placeholder="placeholder"
			onChange={stubFunction}
		/>
	);
	const value = wrapper.childAt(1).text();

	expect(value).toBe(expected);
	t.pass('renderes value over placeholder when a value is passed as well');
	t.end();
});

test('placeholder should only set the minimum width if there is value for placeholder', (t) => {
	const expected = 'long initial value';
	const wrapper = mount(
		<AutosizeInput
			value={expected}
			placeholderIsMinWidth
			onChange={stubFunction}
		/>
	);
	const { width } = wrapper.find('input').prop('style');

	expect(parsePx(width)).toBeGreaterThan(10);
	t.pass('the value is correctly being used to compute the width');
	t.end();
});

// placeholder sets the min width when the value or defaultValue is smaller
test('placeholder can set the min-width when specified', (t) => {
	const wrapper = mount(
		<AutosizeInput
			value="a"
			placeholder="Placeholder"
			placeholderIsMinWidth
			onChange={stubFunction}
		/>
	);
	const { width } = wrapper.find('input').prop('style');
	// assuming that <AutosizeInput /> rendered with the value "a"
	// it would have a width less than 20px
	expect(parsePx(width)).toBeGreaterThan(20);
	t.pass('placeholder has set the minimum width');
	t.end();
});

// input is wider if the value length increases
test('<AutosizeInput /> with a longer value than another <AutosizeInput /> will be wider', (t) => {
	const a = mount(<AutosizeInput value="" onChange={stubFunction} />).find('input').prop('style');
	const b = mount(<AutosizeInput value="example value" onChange={stubFunction} />).find('input').prop('style');

	expect(parsePx(a.width)).toBeLessThan(parsePx(b.width));
	t.pass('component with a longer value has a greater width');
	t.end();
});

// if a min-width is passed it is respected
test('min-width should have the highest precedence', (t) => {
	const wrapper = mount(
		<AutosizeInput
			value=""
			minWidth={100}
			placeholder="test"
			placeholderIsMinWidth
			onChange={stubFunction}
		/>
	);
	const { width } = wrapper.find('input').prop('style');

	expect(width).toEqual('100px');
	t.pass('min-width has the highest precedence');
	t.end();
});

// should it throw an error when using a value and default?
test('a value should have a higher precedence over a defaultValue or placeholder', (t) => {
	const expected = 'value';
	const wrapper = mount(
		<AutosizeInput
			value={expected}
			defaultValue="defaultValue"
			placeholder="placeholder"
			onChange={stubFunction}
		/>
	);

	expect(wrapper.childAt(1).text()).toEqual(expected);
	t.pass('<AutosizeInput /> width increases as the value length increases');
	t.end();
});

// input value changes when passed a new value
test('input value changes when passed a new value', (t) => {
	const expected = 'generic';
	const wrapper = mount(<Container />);
	wrapper.find('input').simulate('change', { value: expected });
	const value = wrapper.childAt(1).text();
	expect(value).toEqual(expected);

	t.pass('the value updates when given a new value');
	t.end();
});

// input width increases length on change
test('input width increases when <AutosizeInput /> is updated with a longer value', (t) => {
	const getWidth = (wrapper) => wrapper.find('input').prop('style').width;
	const wrapper = mount(<Container />);
	const initialWidth = getWidth(wrapper);
	wrapper.find('input').simulate('change', { value: 'new value' });
	const newWidth = getWidth(wrapper);

	expect(parsePx(initialWidth)).toBeLessThan(parsePx(newWidth));
	t.pass('<AutosizeInput /> width increases as the value length increases');
	t.end();
});

// input width decreases length on change
test('input width decreases when <AutosizeInput /> is updated with a shorter value', (t) => {
	const getWidth = (wrapper) => wrapper.find('input').prop('style').width;
	const wrapper = mount(<Container testValue="long value in the text input" />);
	const initialWidth = getWidth(wrapper);
	wrapper.find('input').simulate('change', { value: 'short' });
	const newWidth = getWidth(wrapper);

	expect(parsePx(initialWidth)).toBeGreaterThan(parsePx(newWidth));
	t.pass('<AutosizeInput /> width increases as the value length increases');
	t.end();
});

// onChange is called and invokes callback
test('onChange is called and invokes the passed callback', (t) => {
	const spy = expect.createSpy();
	const wrapper = mount(
		<AutosizeInput
			value="test"
			onChange={spy}
		/>
	);
	wrapper.find('input').simulate('change', { value: 'generic' });
	expect(spy.calls.length).toEqual(1);
	t.pass('onChange callback is called correctly');
	t.end();
});
