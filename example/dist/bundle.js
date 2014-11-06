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

},{"react":false}]},{},[])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvQXV0b1NpemVJbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIEF1dG9zaXplSW5wdXQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6ICdBdXRvc2l6ZUlucHV0Jyxcblx0XG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG1pbldpZHRoOiAxXG5cdFx0fTtcblx0fSxcblx0XG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGlucHV0V2lkdGg6IHRoaXMucHJvcHMubWluV2lkdGhcblx0XHR9O1xuXHR9LFxuXHRcblx0Y29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuY29weUlucHV0U3R5bGVzKCk7XG5cdFx0dGhpcy51cGRhdGVJbnB1dFdpZHRoKCk7XG5cdH0sXG5cdFxuXHRjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMudXBkYXRlSW5wdXRXaWR0aCgpO1xuXHR9LFxuXHRcblx0Y29weUlucHV0U3R5bGVzOiBmdW5jdGlvbigpIHtcblx0XHRpZiAoIXRoaXMuaXNNb3VudGVkKCkgfHwgIXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHZhciBpbnB1dFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5yZWZzLmlucHV0LmdldERPTU5vZGUoKSk7XG5cdFx0dmFyIHdpZHRoTm9kZSA9IHRoaXMucmVmcy5zaXplci5nZXRET01Ob2RlKCk7XG5cdFx0d2lkdGhOb2RlLnN0eWxlLnBhZGRpbmcgPSBpbnB1dFN0eWxlLnBhZGRpbmc7XG5cdFx0d2lkdGhOb2RlLnN0eWxlLmZvbnRTaXplID0gaW5wdXRTdHlsZS5mb250U2l6ZTtcblx0XHR3aWR0aE5vZGUuc3R5bGUuZm9udEZhbWlseSA9IGlucHV0U3R5bGUuZm9udEZhbWlseTtcblx0fSxcblx0XG5cdHVwZGF0ZUlucHV0V2lkdGg6IGZ1bmN0aW9uKCkge1xuXHRcdGlmICghdGhpcy5pc01vdW50ZWQoKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR2YXIgbmV3SW5wdXRXaWR0aCA9IHRoaXMucmVmcy5zaXplci5nZXRET01Ob2RlKCkuc2Nyb2xsV2lkdGg7XG5cdFx0aWYgKG5ld0lucHV0V2lkdGggPCB0aGlzLnByb3BzLm1pbldpZHRoKSB7XG5cdFx0XHRuZXdJbnB1dFdpZHRoID0gdGhpcy5wcm9wcy5taW5XaWR0aDtcblx0XHR9XG5cdFx0aWYgKG5ld0lucHV0V2lkdGggIT09IHRoaXMuc3RhdGUuaW5wdXRXaWR0aCkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGlucHV0V2lkdGg6IHRoaXMucmVmcy5zaXplci5nZXRET01Ob2RlKCkuc2Nyb2xsV2lkdGhcblx0XHRcdH0pO1xuXHRcdH1cblx0fSxcblx0XG5cdHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cdFx0XG5cdFx0dmFyIHZhbHVlU3RyaW5nID0gdGhpcy5wcm9wcy52YWx1ZSB8fCAnJyxcblx0XHRcdHZhbHVlV2l0aE5CU1AgPSB2YWx1ZVN0cmluZy5yZXBsYWNlKC8gL2csICcmbmJzcDsnKTtcblx0XHRcblx0XHR2YXIgaW5wdXRTdHlsZSA9IHRoaXMucHJvcHMuc3R5bGUgfHwge307XG5cdFx0aW5wdXRTdHlsZS53aWR0aCA9IHRoaXMuc3RhdGUuaW5wdXRXaWR0aDtcblx0XHRcblx0XHR2YXIgc2l6ZXJTdHlsZSA9IHsgcG9zaXRpb246ICdhYnNvbHV0ZScsIGhlaWdodDogMCwgd2lkdGg6IDAsIG92ZXJmbG93OiAnc2Nyb2xsJywgd2hpdGVTcGFjZTogJ25vd3JhcCcgfTtcblx0XHRcblx0XHRyZXR1cm4gKFxuXHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBcblx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtyZWY6IFwiaW5wdXRcIiwgc3R5bGU6IGlucHV0U3R5bGUsIG9uQ2hhbmdlOiB0aGlzLnByb3BzLm9uQ2hhbmdlLCB2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZX0pLCBcblx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7cmVmOiBcInNpemVyXCIsIHN0eWxlOiBzaXplclN0eWxlLCBkYW5nZXJvdXNseVNldElubmVySFRNTDogeyBfX2h0bWw6IHZhbHVlV2l0aE5CU1B9fSlcblx0XHRcdClcblx0XHQpO1xuXHRcdFxuXHR9XG5cdFxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXV0b3NpemVJbnB1dDtcbiJdfQ==
