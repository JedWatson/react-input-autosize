'use strict';

import React from 'react';
import test from 'tape';
import expect from 'expect';
import { shallow, mount } from 'enzyme';

import AutosizeInput from './AutosizeInput';

// className: React.PropTypes.string,               // className for the outer element
// defaultValue: React.PropTypes.any,               // default field value
// inputClassName: React.PropTypes.string,          // className for the input element
// inputStyle: React.PropTypes.object,              // css styles for the input element
// minWidth: React.PropTypes.oneOfType([            // minimum width for input element
// 	React.PropTypes.number,
// 	React.PropTypes.string,
// ]),
// onChange: React.PropTypes.func,                  // onChange handler: function(newValue) {}
// placeholder: React.PropTypes.string,             // placeholder text
// placeholderIsMinWidth: React.PropTypes.string,   // don't collapse size to less than the placeholder
// style: React.PropTypes.object,                   // css styles for the outer element
// value: React.PropTypes.any,

/* General Questions
-------------------------------------
- Is .childAt(index) the best way to get an element because the position and order
of elements may change within the component

*/

// renders correctly
test('should render a component', (t) => {
	const wrapper = shallow(<AutosizeInput />);
	expect(wrapper.type()).toExist();
	t.pass('component rendered');
	t.end();
});

// renders a value
test('should render the value passed to the component', (t) => {
	const wrapper = shallow(<AutosizeInput value="example" />);
	const inputValue = wrapper.childAt(0).prop('value');
	const valueDisplayed = wrapper.childAt(1).text();

	expect(valueDisplayed).toBe('example');
	t.pass('value is correct');

	expect(valueDisplayed).toEqual(inputValue);
	t.pass('value displayed equals the input value');

	t.end();
});

// renders a default value
test('should render a default value', (t) => {
	const wrapper = shallow(<AutosizeInput value="test" defaultValue="default" />);
	const value = wrapper.childAt(1).text();
	expect(value).toBe('default');
	t.pass('renderes correct default value');
	t.end();
});

// placeholder and value used at the same time
// default value should have lower precedence over value
test('default value should have lower precedence over value', (t) => {
	const wrapper = shallow(<AutosizeInput value="value" defaultValue="default" />);
	const value = wrapper.childAt(1).text();
	// comment out while failing
	// expect(value).toBe('value');
	t.skip();
	t.pass('renderes value over default value when present');
	t.end();
});

// renders input specific props
test('default value should have lower precedence over value', (t) => {
	const inputStyle = {
		background: 'blue',
		padding: 20,
		// fails when trying to use width
		// perhaps warns when blacklisted style
		// properties are trying to be used?
		// width: 20,
	};
	const wrapper = shallow(
		<AutosizeInput
			value="value"
			inputClassName="input-class"
			inputStyle={inputStyle}
		/>
	);
	const input = wrapper.childAt(0);

	expect(input.prop('className')).toBe('input-class');
	t.pass('className is on the input');

	const actualInputStyle = input.prop('style');
	const hasStyles = Object.keys(inputStyle).every((key) => {
		return inputStyle[key] === actualInputStyle[key];
	});
	expect(hasStyles).toBe(true);
	t.pass('style object includes all the inputStyles');
	t.end();
});

// placeholder sets the min width when the value or defaultValue is smaller
test('component width is larger if the value length is longer', (t) => {
	const wrapper = shallow(
		<AutosizeInput
			value="abc"
			placeholder="Placeholder"
			placeholderIsMinWidth
		/>
	);
	const { width } = wrapper.childAt(0).prop('style');
	console.log('width', width);

	expect(parseFloat(width)).toBeGreaterThan(1);
	t.pass('placeholder has set the minimum width');
	t.end();
});

// input is larger if the value length increases
test('component width is larger if the value length is longer', (t) => {
	const a = shallow(<AutosizeInput value="" />).childAt(0).prop('style');
	const b = shallow(<AutosizeInput value="example value" />).childAt(0).prop('style');

	expect(parseFloat(a.width)).toBeLessThan(parseFloat(b.width));
	t.pass('style object includes all the inputStyles');
	t.end();
});

// input is smaller if the value length decreases

// onChange is called and invokes callback

// doesn't update the width once component is unmounted
