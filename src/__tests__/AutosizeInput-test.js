'use strict';
/* global describe, it, expect */
import React from 'react';
import TestUtils from 'react-dom/test-utils';
import AutosizeInput from '../AutosizeInput';
describe('AutosizeInput test', function () {
	function logChange (val) {
		console.log('Selected: ' + val);
	}
	// Render an instance of the component
	var instance = TestUtils.renderIntoDocument(
		<AutosizeInput onChange={logChange} value="test" inputClassName="testClass" id="abcId" />
	);

	var inputElement = TestUtils.findRenderedDOMComponentWithTag(instance, 'input');
	it('should assign the given inputClassName', function () {
		expect(inputElement.className).toEqual('testClass');
	});

	it('should use the id passed as prop', function () {
		expect(inputElement.id).toEqual('abcId');
	});

});
