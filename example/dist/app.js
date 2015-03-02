require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./example/src/app.js":[function(require,module,exports){
"use strict";

var React = require("react"),
    AutosizeInput = require("react-input-autosize");

var App = React.createClass({
	displayName: "App",
	getInitialState: function () {
		return {
			value1: "",
			value2: "example",
			value3: ""
		};
	},
	updateInputValue: function (input, event) {
		var newState = {};
		newState[input] = event.target.value;
		this.setState(newState);
	},
	render: function () {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"h3",
				null,
				"Simple example:"
			),
			React.createElement(AutosizeInput, {
				value: this.state.value1,
				onChange: this.updateInputValue.bind(this, "value1")
			}),
			React.createElement(
				"h3",
				null,
				"Styled example with default value:"
			),
			React.createElement(AutosizeInput, {
				value: this.state.value2,
				onChange: this.updateInputValue.bind(this, "value2"),
				style: { background: "#eee", borderRadius: 5, padding: 5 },
				inputStyle: { border: "1px solid #999", borderRadius: 3, padding: 3, fontSize: 14 }
			}),
			React.createElement(
				"h3",
				null,
				"Input with placeholder:"
			),
			React.createElement(AutosizeInput, {

				value: this.state.value3,
				onChange: this.updateInputValue.bind(this, "value3"),
				style: { background: "#eee", borderRadius: 5, padding: 5 },
				inputStyle: { border: "1px solid #999", borderRadius: 3, padding: 3, fontSize: 14 }
			})
		);
	}
});

React.render(React.createElement(App, null), document.getElementById("app"));

},{"react":false,"react-input-autosize":false}]},{},["./example/src/app.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvSmVkL0RldmVsb3BtZW50L3BhY2thZ2VzL3JlYWN0LWlucHV0LWF1dG9zaXplL2V4YW1wbGUvc3JjL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUMzQixhQUFhLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7O0FBRWpELElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7O0FBQzNCLGdCQUFlLEVBQUUsWUFBVztBQUMzQixTQUFPO0FBQ04sU0FBTSxFQUFFLEVBQUU7QUFDVixTQUFNLEVBQUUsU0FBUztBQUNqQixTQUFNLEVBQUUsRUFBRTtHQUNWLENBQUM7RUFDRjtBQUNELGlCQUFnQixFQUFFLFVBQVMsS0FBSyxFQUFFLEtBQUssRUFBRTtBQUN4QyxNQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDbEIsVUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQ3JDLE1BQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7RUFDeEI7QUFDRCxPQUFNLEVBQUUsWUFBVztBQUNsQixTQUNDOzs7R0FDQzs7OztJQUF3QjtHQUN4QixvQkFBQyxhQUFhO0FBQ2IsU0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxBQUFDO0FBQ3pCLFlBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQUFBQztLQUNwRDtHQUNGOzs7O0lBQTJDO0dBQzNDLG9CQUFDLGFBQWE7QUFDYixTQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEFBQUM7QUFDekIsWUFBUSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxBQUFDO0FBQ3JELFNBQUssRUFBRSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEFBQUM7QUFDM0QsY0FBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEFBQUM7S0FDbkY7R0FDRjs7OztJQUFnQztHQUNoQyxvQkFBQyxhQUFhOztBQUViLFNBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQUFBQztBQUN6QixZQUFRLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEFBQUM7QUFDckQsU0FBSyxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQUFBQztBQUMzRCxjQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsQUFBQztLQUNuRjtHQUNHLENBQ047RUFDRDtDQUNELENBQUMsQ0FBQzs7QUFFSCxLQUFLLENBQUMsTUFBTSxDQUFDLG9CQUFDLEdBQUcsT0FBRyxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpLFxuXHRBdXRvc2l6ZUlucHV0ID0gcmVxdWlyZSgncmVhY3QtaW5wdXQtYXV0b3NpemUnKTtcblxudmFyIEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dmFsdWUxOiAnJyxcblx0XHRcdHZhbHVlMjogJ2V4YW1wbGUnLFxuXHRcdFx0dmFsdWUzOiAnJ1xuXHRcdH07XG5cdH0sXG5cdHVwZGF0ZUlucHV0VmFsdWU6IGZ1bmN0aW9uKGlucHV0LCBldmVudCkge1xuXHRcdHZhciBuZXdTdGF0ZSA9IHt9O1xuXHRcdG5ld1N0YXRlW2lucHV0XSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblx0XHR0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGgzPlNpbXBsZSBleGFtcGxlOjwvaDM+XG5cdFx0XHRcdDxBdXRvc2l6ZUlucHV0XG5cdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUudmFsdWUxfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUlucHV0VmFsdWUuYmluZCh0aGlzLCAndmFsdWUxJyl9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxoMz5TdHlsZWQgZXhhbXBsZSB3aXRoIGRlZmF1bHQgdmFsdWU6PC9oMz5cblx0XHRcdFx0PEF1dG9zaXplSW5wdXRcblx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZTJ9XG5cdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMudXBkYXRlSW5wdXRWYWx1ZS5iaW5kKHRoaXMsICd2YWx1ZTInKX1cblx0XHRcdFx0XHRzdHlsZT17eyBiYWNrZ3JvdW5kOiAnI2VlZScsIGJvcmRlclJhZGl1czogNSwgcGFkZGluZzogNSB9fVxuXHRcdFx0XHRcdGlucHV0U3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICM5OTknLCBib3JkZXJSYWRpdXM6IDMsIHBhZGRpbmc6IDMsIGZvbnRTaXplOiAxNCB9fVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8aDM+SW5wdXQgd2l0aCBwbGFjZWhvbGRlcjo8L2gzPlxuXHRcdFx0XHQ8QXV0b3NpemVJbnB1dFxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlM31cblx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy51cGRhdGVJbnB1dFZhbHVlLmJpbmQodGhpcywgJ3ZhbHVlMycpfVxuXHRcdFx0XHRcdHN0eWxlPXt7IGJhY2tncm91bmQ6ICcjZWVlJywgYm9yZGVyUmFkaXVzOiA1LCBwYWRkaW5nOiA1IH19XG5cdFx0XHRcdFx0aW5wdXRTdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgIzk5OScsIGJvcmRlclJhZGl1czogMywgcGFkZGluZzogMywgZm9udFNpemU6IDE0IH19XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn0pO1xuXG5SZWFjdC5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiJdfQ==
