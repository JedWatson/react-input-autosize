'use strict';
/*global describe, it, jest, expect*/

jest.dontMock('../AutosizeInput');

var React = require('react/addons');
var AutosizeInput = require('../AutosizeInput');
var TestUtils = React.addons.TestUtils;

describe('AutosizeInput test', function() {

	var options = [
		{ value: 'one', label: 'One' },
		{ value: 'two', label: 'Two' }
	];

	function logChange(val) {
		console.log('Selected: ' + val);
	}

	// Render an instance of the component
	var instance = TestUtils.renderIntoDocument(
		<AutosizeInput onChange={logChange} value="test" className="testClass" />
	);

	var inputElement = TestUtils.findRenderedDOMComponentWithTag(instance, 'input');

	it('should assign the given className', function() {
		expect(selectInputElement.getDOMNode().className).toEqual('testClass');
	});

});
