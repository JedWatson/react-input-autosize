'use strict';
/*global describe, it, jest, expect*/

jest.dontMock('../AutosizeInput');

var React = require('react');
var AutosizeInput = require('../AutosizeInput');
var TestUtils = require('react-addons-test-utils');

describe('AutosizeInput test', function() {

	function logChange(val) {
		console.log('Selected: ' + val);
	}

	// Render an instance of the component
	var instance = TestUtils.renderIntoDocument(
		<AutosizeInput onChange={logChange} value="test" inputClassName="testClass" />
	);

	var inputElement = TestUtils.findRenderedDOMComponentWithTag(instance, 'input');

	it('should assign the given inputClassName', function() {
		expect(inputElement.getDOMNode().className).toEqual('testClass');
	});

});
