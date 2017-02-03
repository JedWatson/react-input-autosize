'use strict';
/* global describe, it, expect */

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import AutosizeInput from '../AutosizeInput';

describe('AutosizeInput test', function () {

	const logChange = val => {
		console.log('Selected: ' + val);
	};

	// Render an instance of the component
	const instance = TestUtils.renderIntoDocument(
		<AutosizeInput onChange={logChange} value="test" inputClassName="testClass" />
	);

	const inputElement = TestUtils.findRenderedDOMComponentWithTag(instance, 'input');

	it('should assign the given inputClassName', function () {
		expect(inputElement.className).toEqual('testClass');
	});

});
