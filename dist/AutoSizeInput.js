require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"react-input-autosize":[function(require,module,exports){
var React = require('react');

var AutosizeInput = React.createClass({displayName: 'AutosizeInput',
	
	getDefaultProps: function() {
		return {
			minWidth: 1
		};
	},
	
	getInitialState: function() {
		return {
			inputWidth: this.props.minWidth
		};
	},
	
	componentDidMount: function() {
		this.copyInputStyles();
		this.updateInputWidth();
	},
	
	componentDidUpdate: function() {
		this.updateInputWidth();
	},
	
	copyInputStyles: function() {
		if (!this.isMounted() || !window.getComputedStyle) {
			return;
		}
		var inputStyle = window.getComputedStyle(this.refs.input.getDOMNode());
		var widthNode = this.refs.sizer.getDOMNode();
		widthNode.style.padding = inputStyle.padding;
		widthNode.style.fontSize = inputStyle.fontSize;
		widthNode.style.fontFamily = inputStyle.fontFamily;
	},
	
	updateInputWidth: function() {
		if (!this.isMounted()) {
			return;
		}
		var newInputWidth = this.refs.sizer.getDOMNode().scrollWidth;
		if (newInputWidth < this.props.minWidth) {
			newInputWidth = this.props.minWidth;
		}
		if (newInputWidth !== this.state.inputWidth) {
			this.setState({
				inputWidth: this.refs.sizer.getDOMNode().scrollWidth
			});
		}
	},
	
	render: function() {
		
		var valueString = this.props.value || '',
			valueWithNBSP = valueString.replace(/ /g, '&nbsp;');
		
		var inputStyle = this.props.style || {};
		inputStyle.width = this.state.inputWidth;
		
		var sizerStyle = { position: 'absolute', height: 0, width: 0, overflow: 'scroll', whiteSpace: 'nowrap' };
		
		return (
			React.createElement("div", null, 
				React.createElement("input", {ref: "input", style: inputStyle, onChange: this.props.onChange, value: this.props.value}), 
				React.createElement("div", {ref: "sizer", style: sizerStyle, dangerouslySetInnerHTML: { __html: valueWithNBSP}})
			)
		);
		
	}
	
});

module.exports = AutosizeInput;

},{"react":undefined}]},{},[]);
