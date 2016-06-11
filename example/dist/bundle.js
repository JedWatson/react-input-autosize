require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"react-input-autosize":[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');

var sizerStyle = { position: 'absolute', top: 0, left: 0, visibility: 'hidden', height: 0, overflow: 'scroll', whiteSpace: 'pre' };

var AutosizeInput = React.createClass({
	displayName: 'AutosizeInput',

	propTypes: {
		className: React.PropTypes.string, // className for the outer element
		defaultValue: React.PropTypes.any, // default field value
		inputClassName: React.PropTypes.string, // className for the input element
		inputStyle: React.PropTypes.object, // css styles for the input element
		minWidth: React.PropTypes.oneOfType([// minimum width for input element
		React.PropTypes.number, React.PropTypes.string]),
		onChange: React.PropTypes.func, // onChange handler: function(newValue) {}
		placeholder: React.PropTypes.string, // placeholder text
		style: React.PropTypes.object, // css styles for the outer element
		placeholderIsMinWidth: React.PropTypes.bool },
	// don't collapse size to less than the placeholder
	getDefaultProps: function getDefaultProps() {
		return {
			minWidth: 1
		};
	},
	getInitialState: function getInitialState() {
		return {
			inputWidth: this.props.minWidth,
			sizerValue: ''
		};
	},
	componentDidMount: function componentDidMount() {
		this.copyInputStyles();
		this.onInputChange();
		this.updateInputWidth();
	},
	componentDidUpdate: function componentDidUpdate() {
		this.updateInputWidth();
	},
	copyInputStyles: function copyInputStyles() {
		if (!this.isMounted() || !window.getComputedStyle) {
			return;
		}
		var inputStyle = window.getComputedStyle(this.refs.input);
		if (!inputStyle) {
			return;
		}
		var widthNode = this.refs.sizer;
		widthNode.style.fontSize = inputStyle.fontSize;
		widthNode.style.fontFamily = inputStyle.fontFamily;
		widthNode.style.fontWeight = inputStyle.fontWeight;
		widthNode.style.fontStyle = inputStyle.fontStyle;
		widthNode.style.letterSpacing = inputStyle.letterSpacing;
		if (this.props.placeholder) {
			var placeholderNode = this.refs.placeholderSizer;
			placeholderNode.style.fontSize = inputStyle.fontSize;
			placeholderNode.style.fontFamily = inputStyle.fontFamily;
			placeholderNode.style.fontWeight = inputStyle.fontWeight;
			placeholderNode.style.fontStyle = inputStyle.fontStyle;
			placeholderNode.style.letterSpacing = inputStyle.letterSpacing;
		}
	},
	onInputChange: function onInputChange(event) {
		var value = event ? event.target.value : this.props.defaultValue || '';
		this.setState({
			sizerValue: value
		});
		if (this.props.onChange) {
			this.props.onChange(value, this.state.sizerValue);
		}
	},
	updateInputWidth: function updateInputWidth() {
		if (!this.isMounted() || typeof this.refs.sizer.scrollWidth === 'undefined') {
			return;
		}
		var newInputWidth = undefined;
		if (this.props.placeholder && (!this.state.sizerValue || this.state.sizerValue && this.props.placeholderIsMinWidth)) {
			newInputWidth = Math.max(this.refs.sizer.scrollWidth, this.refs.placeholderSizer.scrollWidth) + 2;
		} else {
			newInputWidth = this.refs.sizer.scrollWidth + 2;
		}
		if (newInputWidth < this.props.minWidth) {
			newInputWidth = this.props.minWidth;
		}
		if (newInputWidth !== this.state.inputWidth) {
			this.setState({
				inputWidth: newInputWidth
			});
		}
	},
	getInput: function getInput() {
		return this.refs.input;
	},
	setValue: function setValue(value) {
		this.refs.input.value = value;
		this.setState({
			sizerValue: value
		});
	},
	focus: function focus() {
		this.refs.input.focus();
	},
	blur: function blur() {
		this.refs.input.blur();
	},
	select: function select() {
		this.refs.input.select();
	},
	render: function render() {
		var wrapperStyle = this.props.style || {};
		if (!wrapperStyle.display) wrapperStyle.display = 'inline-block';
		var inputStyle = _extends({}, this.props.inputStyle);
		inputStyle.width = this.state.inputWidth + 'px';
		inputStyle.boxSizing = 'content-box';
		var placeholder = this.props.placeholder ? React.createElement(
			'div',
			{ ref: 'placeholderSizer', style: sizerStyle },
			this.props.placeholder
		) : null;
		return React.createElement(
			'div',
			{ className: this.props.className, style: wrapperStyle },
			React.createElement('input', _extends({}, this.props, { ref: 'input', className: this.props.inputClassName, style: inputStyle, onChange: this.onInputChange })),
			React.createElement(
				'div',
				{ ref: 'sizer', style: sizerStyle },
				this.state.sizerValue
			),
			placeholder
		);
	}
});

module.exports = AutosizeInput;

},{"react":undefined}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9yZWFjdC1jb21wb25lbnQtZ3VscC10YXNrcy9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL0dpdEh1Yi9yZWFjdC1pbnB1dC1hdXRvc2l6ZS9zcmMvQXV0b3NpemVJbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUNBQSxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRS9CLElBQU0sVUFBVSxHQUFHLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDOztBQUVySSxJQUFNLGFBQWEsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFDdkMsVUFBUyxFQUFFO0FBQ1YsV0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTTtBQUNqQyxjQUFZLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHO0FBQ2pDLGdCQUFjLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0FBQ3RDLFlBQVUsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU07QUFDbEMsVUFBUSxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO0FBQ25DLE9BQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUN0QixLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FDdEIsQ0FBQztBQUNGLFVBQVEsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUk7QUFDOUIsYUFBVyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTTtBQUNuQyxPQUFLLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0FBQzdC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O01BQUssR0FBRyxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUUsVUFBVSxBQUFDO0lBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVO0lBQU87R0FDaEUsV0FBVztHQUNQLENBQ0w7RUFDRjtDQUNELENBQUMsQ0FBQzs7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbmNvbnN0IHNpemVyU3R5bGUgPSB7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6IDAsIGxlZnQ6IDAsIHZpc2liaWxpdHk6ICdoaWRkZW4nLCBoZWlnaHQ6IDAsIG92ZXJmbG93OiAnc2Nyb2xsJywgd2hpdGVTcGFjZTogJ3ByZScgfTtcblxuY29uc3QgQXV0b3NpemVJbnB1dCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cHJvcFR5cGVzOiB7XG5cdFx0Y2xhc3NOYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLCAgICAgICAgICAgICAgIC8vIGNsYXNzTmFtZSBmb3IgdGhlIG91dGVyIGVsZW1lbnRcblx0XHRkZWZhdWx0VmFsdWU6IFJlYWN0LlByb3BUeXBlcy5hbnksICAgICAgICAgICAgICAgLy8gZGVmYXVsdCBmaWVsZCB2YWx1ZVxuXHRcdGlucHV0Q2xhc3NOYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLCAgICAgICAgICAvLyBjbGFzc05hbWUgZm9yIHRoZSBpbnB1dCBlbGVtZW50XG5cdFx0aW5wdXRTdHlsZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCwgICAgICAgICAgICAgIC8vIGNzcyBzdHlsZXMgZm9yIHRoZSBpbnB1dCBlbGVtZW50XG5cdFx0bWluV2lkdGg6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoWyAgICAgICAgICAgIC8vIG1pbmltdW0gd2lkdGggZm9yIGlucHV0IGVsZW1lbnRcblx0XHRcdFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG5cdFx0XHRSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuXHRcdF0pLFxuXHRcdG9uQ2hhbmdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYywgICAgICAgICAgICAgICAgICAvLyBvbkNoYW5nZSBoYW5kbGVyOiBmdW5jdGlvbihuZXdWYWx1ZSkge31cblx0XHRwbGFjZWhvbGRlcjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZywgICAgICAgICAgICAgLy8gcGxhY2Vob2xkZXIgdGV4dFxuXHRcdHN0eWxlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LCAgICAgICAgICAgICAgICAgICAvLyBjc3Mgc3R5bGVzIGZvciB0aGUgb3V0ZXIgZWxlbWVudFxuXHRcdHBsYWNlaG9sZGVySXNNaW5XaWR0aDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsICAgICAvLyBkb24ndCBjb2xsYXBzZSBzaXplIHRvIGxlc3MgdGhhbiB0aGUgcGxhY2Vob2xkZXJcblx0fSxcblx0Z2V0RGVmYXVsdFByb3BzICgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bWluV2lkdGg6IDEsXG5cdFx0fTtcblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlICgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0aW5wdXRXaWR0aDogdGhpcy5wcm9wcy5taW5XaWR0aCxcblx0XHRcdHNpemVyVmFsdWU6ICcnXG5cdFx0fTtcblx0fSxcblx0Y29tcG9uZW50RGlkTW91bnQgKCkge1xuXHRcdHRoaXMuY29weUlucHV0U3R5bGVzKCk7XG5cdFx0dGhpcy5vbklucHV0Q2hhbmdlKCk7XG5cdFx0dGhpcy51cGRhdGVJbnB1dFdpZHRoKCk7XG5cdH0sXG5cdGNvbXBvbmVudERpZFVwZGF0ZSAoKSB7XG5cdFx0dGhpcy51cGRhdGVJbnB1dFdpZHRoKCk7XG5cdH0sXG5cdGNvcHlJbnB1dFN0eWxlcyAoKSB7XG5cdFx0aWYgKCF0aGlzLmlzTW91bnRlZCgpIHx8ICF3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBpbnB1dFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5yZWZzLmlucHV0KTtcblx0XHRpZiAoIWlucHV0U3R5bGUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3Qgd2lkdGhOb2RlID0gdGhpcy5yZWZzLnNpemVyO1xuXHRcdHdpZHRoTm9kZS5zdHlsZS5mb250U2l6ZSA9IGlucHV0U3R5bGUuZm9udFNpemU7XG5cdFx0d2lkdGhOb2RlLnN0eWxlLmZvbnRGYW1pbHkgPSBpbnB1dFN0eWxlLmZvbnRGYW1pbHk7XG5cdFx0d2lkdGhOb2RlLnN0eWxlLmZvbnRXZWlnaHQgPSBpbnB1dFN0eWxlLmZvbnRXZWlnaHQ7XG5cdFx0d2lkdGhOb2RlLnN0eWxlLmZvbnRTdHlsZSA9IGlucHV0U3R5bGUuZm9udFN0eWxlO1xuXHRcdHdpZHRoTm9kZS5zdHlsZS5sZXR0ZXJTcGFjaW5nID0gaW5wdXRTdHlsZS5sZXR0ZXJTcGFjaW5nO1xuXHRcdGlmICh0aGlzLnByb3BzLnBsYWNlaG9sZGVyKSB7XG5cdFx0XHRjb25zdCBwbGFjZWhvbGRlck5vZGUgPSB0aGlzLnJlZnMucGxhY2Vob2xkZXJTaXplcjtcblx0XHRcdHBsYWNlaG9sZGVyTm9kZS5zdHlsZS5mb250U2l6ZSA9IGlucHV0U3R5bGUuZm9udFNpemU7XG5cdFx0XHRwbGFjZWhvbGRlck5vZGUuc3R5bGUuZm9udEZhbWlseSA9IGlucHV0U3R5bGUuZm9udEZhbWlseTtcblx0XHRcdHBsYWNlaG9sZGVyTm9kZS5zdHlsZS5mb250V2VpZ2h0ID0gaW5wdXRTdHlsZS5mb250V2VpZ2h0O1xuXHRcdFx0cGxhY2Vob2xkZXJOb2RlLnN0eWxlLmZvbnRTdHlsZSA9IGlucHV0U3R5bGUuZm9udFN0eWxlO1xuXHRcdFx0cGxhY2Vob2xkZXJOb2RlLnN0eWxlLmxldHRlclNwYWNpbmcgPSBpbnB1dFN0eWxlLmxldHRlclNwYWNpbmc7XG5cdFx0fVxuXHR9LFxuXHRvbklucHV0Q2hhbmdlIChldmVudCkge1xuXHRcdGNvbnN0IHZhbHVlID0gZXZlbnQgPyBldmVudC50YXJnZXQudmFsdWUgOiAodGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUgfHwgJycpO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c2l6ZXJWYWx1ZTogdmFsdWVcblx0XHR9KTtcblx0XHRpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuXHRcdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZSwgdGhpcy5zdGF0ZS5zaXplclZhbHVlKTtcblx0XHR9XG5cdH0sXG5cdHVwZGF0ZUlucHV0V2lkdGggKCkge1xuXHRcdGlmICghdGhpcy5pc01vdW50ZWQoKSB8fCB0eXBlb2YgdGhpcy5yZWZzLnNpemVyLnNjcm9sbFdpZHRoID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRsZXQgbmV3SW5wdXRXaWR0aDtcblx0XHRpZiAodGhpcy5wcm9wcy5wbGFjZWhvbGRlciAmJiAoIXRoaXMuc3RhdGUuc2l6ZXJWYWx1ZSB8fCAodGhpcy5zdGF0ZS5zaXplclZhbHVlICYmIHRoaXMucHJvcHMucGxhY2Vob2xkZXJJc01pbldpZHRoKSkpIHtcblx0XHRcdG5ld0lucHV0V2lkdGggPSBNYXRoLm1heCh0aGlzLnJlZnMuc2l6ZXIuc2Nyb2xsV2lkdGgsIHRoaXMucmVmcy5wbGFjZWhvbGRlclNpemVyLnNjcm9sbFdpZHRoKSArIDI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG5ld0lucHV0V2lkdGggPSB0aGlzLnJlZnMuc2l6ZXIuc2Nyb2xsV2lkdGggKyAyO1xuXHRcdH1cblx0XHRpZiAobmV3SW5wdXRXaWR0aCA8IHRoaXMucHJvcHMubWluV2lkdGgpIHtcblx0XHRcdG5ld0lucHV0V2lkdGggPSB0aGlzLnByb3BzLm1pbldpZHRoO1xuXHRcdH1cblx0XHRpZiAobmV3SW5wdXRXaWR0aCAhPT0gdGhpcy5zdGF0ZS5pbnB1dFdpZHRoKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0aW5wdXRXaWR0aDogbmV3SW5wdXRXaWR0aCxcblx0XHRcdH0pO1xuXHRcdH1cblx0fSxcblx0Z2V0SW5wdXQgKCkge1xuXHRcdHJldHVybiB0aGlzLnJlZnMuaW5wdXQ7XG5cdH0sXG5cdHNldFZhbHVlICh2YWx1ZSkge1xuXHRcdHRoaXMucmVmcy5pbnB1dC52YWx1ZSA9IHZhbHVlO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c2l6ZXJWYWx1ZTogdmFsdWVcblx0XHR9KTtcblx0fSxcblx0Zm9jdXMgKCkge1xuXHRcdHRoaXMucmVmcy5pbnB1dC5mb2N1cygpO1xuXHR9LFxuXHRibHVyICgpIHtcblx0XHR0aGlzLnJlZnMuaW5wdXQuYmx1cigpO1xuXHR9LFxuXHRzZWxlY3QgKCkge1xuXHRcdHRoaXMucmVmcy5pbnB1dC5zZWxlY3QoKTtcblx0fSxcblx0cmVuZGVyICgpIHtcblx0XHRjb25zdCB3cmFwcGVyU3R5bGUgPSB0aGlzLnByb3BzLnN0eWxlIHx8IHt9O1xuXHRcdGlmICghd3JhcHBlclN0eWxlLmRpc3BsYXkpIHdyYXBwZXJTdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG5cdFx0Y29uc3QgaW5wdXRTdHlsZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMuaW5wdXRTdHlsZSk7XG5cdFx0aW5wdXRTdHlsZS53aWR0aCA9IHRoaXMuc3RhdGUuaW5wdXRXaWR0aCArICdweCc7XG5cdFx0aW5wdXRTdHlsZS5ib3hTaXppbmcgPSAnY29udGVudC1ib3gnO1xuXHRcdGNvbnN0IHBsYWNlaG9sZGVyID0gdGhpcy5wcm9wcy5wbGFjZWhvbGRlciA/IDxkaXYgcmVmPVwicGxhY2Vob2xkZXJTaXplclwiIHN0eWxlPXtzaXplclN0eWxlfT57dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn08L2Rpdj4gOiBudWxsO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9IHN0eWxlPXt3cmFwcGVyU3R5bGV9PlxuXHRcdFx0XHQ8aW5wdXQgey4uLnRoaXMucHJvcHN9IHJlZj1cImlucHV0XCIgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmlucHV0Q2xhc3NOYW1lfSBzdHlsZT17aW5wdXRTdHlsZX0gb25DaGFuZ2U9e3RoaXMub25JbnB1dENoYW5nZX0gLz5cblx0XHRcdFx0PGRpdiByZWY9XCJzaXplclwiIHN0eWxlPXtzaXplclN0eWxlfT57dGhpcy5zdGF0ZS5zaXplclZhbHVlfTwvZGl2PlxuXHRcdFx0XHR7cGxhY2Vob2xkZXJ9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9LFxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXV0b3NpemVJbnB1dDtcbiJdfQ==
