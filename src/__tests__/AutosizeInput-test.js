'use strict';
/* global describe, it, jest, expect */

jest.dontMock('../AutosizeInput');

var React = require('react');
var TestUtils = require('react-addons-test-utils');
var AutosizeInput = require('../AutosizeInput');

describe('AutosizeInput test', function () {

	function logChange (val) {
		console.log('Selected: ' + val);
	}

	// Render an instance of the component
	var instance = TestUtils.renderIntoDocument(
		<AutosizeInput onChange={logChange} value="test" inputClassName="testClass" />
	);

	var inputElement = TestUtils.findRenderedDOMComponentWithTag(instance, 'input');

	it('should assign the given inputClassName', function () {
		expect(inputElement.className).toEqual('testClass');
	});

	it('should change the width', function () {
		expect(inputElement.style.width).toEqual('1px');
		inputElement.value = 'foo bar';
		expect(inputElement.value).toEqual('foo bar');
		expect(inputElement.style.width).toEqual('39px');
	});

});
