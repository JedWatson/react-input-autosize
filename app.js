require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var React = require('react'),
    AutosizeInput = require('react-input-autosize');

var App = React.createClass({
	displayName: 'App',

	getInitialState: function getInitialState() {
		return {
			value1: '',
			value2: 'example',
			value3: ''
		};
	},
	updateInputValue: function updateInputValue(input, event) {
		var newState = {};
		newState[input] = event.target.value;
		this.setState(newState);
	},
	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'h3',
				null,
				'Simple example:'
			),
			React.createElement(AutosizeInput, {
				value: this.state.value1,
				onChange: this.updateInputValue.bind(this, 'value1')
			}),
			React.createElement(
				'h3',
				null,
				'Styled example with default value:'
			),
			React.createElement(AutosizeInput, {
				value: this.state.value2,
				onChange: this.updateInputValue.bind(this, 'value2'),
				style: { background: '#eee', borderRadius: 5, padding: 5 },
				inputStyle: { border: '1px solid #999', borderRadius: 3, padding: 3, fontSize: 14 }
			}),
			React.createElement(
				'h3',
				null,
				'Input with placeholder:'
			),
			React.createElement(AutosizeInput, {
				placeholder: 'Placeholder',
				value: this.state.value3,
				onChange: this.updateInputValue.bind(this, 'value3'),
				style: { background: '#eee', borderRadius: 5, padding: 5 },
				inputStyle: { border: '1px solid #999', borderRadius: 3, padding: 3, fontSize: 14 }
			})
		);
	}
});

React.render(React.createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-input-autosize":undefined}]},{},[1]);
