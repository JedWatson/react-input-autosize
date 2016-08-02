require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var AutosizeInput = require('react-input-autosize');

var App = React.createClass({
	displayName: 'App',

	getInitialState: function getInitialState() {
		return {
			value1: '',
			value2: 'example',
			value3: 0,
			value4: '',
			value5: ''
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
				'Typed example with default value:'
			),
			React.createElement(AutosizeInput, {
				value: this.state.value3,
				type: 'number',
				onChange: this.updateInputValue.bind(this, 'value3')
			}),
			React.createElement(
				'h3',
				null,
				'Input with placeholder:'
			),
			React.createElement(AutosizeInput, {
				placeholder: 'Placeholder',
				value: this.state.value4,
				onChange: this.updateInputValue.bind(this, 'value4'),
				style: { background: '#eee', borderRadius: 5, padding: 5 },
				inputStyle: { border: '1px solid #999', borderRadius: 3, padding: 3, fontSize: 14 }
			}),
			React.createElement(
				'h3',
				null,
				'Input with placeholder as minimum width:'
			),
			React.createElement(AutosizeInput, {
				placeholder: 'Placeholder',
				placeholderIsMinWidth: true,
				value: this.state.value5,
				onChange: this.updateInputValue.bind(this, 'value5'),
				style: { background: '#eee', borderRadius: 5, padding: 5 },
				inputStyle: { border: '1px solid #999', borderRadius: 3, padding: 3, fontSize: 14 }
			})
		);
	}
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-dom":undefined,"react-input-autosize":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9yZWFjdC1jb21wb25lbnQtZ3VscC10YXNrcy9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL2lhbi9Eb2N1bWVudHMvZm9ya3MvcmVhY3QtaW5wdXQtYXV0b3NpemUvZXhhbXBsZS9zcmMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0IsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3BDLElBQUksYUFBYSxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDOztBQUVwRCxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFDM0IsZ0JBQWUsRUFBQywyQkFBRztBQUNsQixTQUFPO0FBQ04sU0FBTSxFQUFFLEVBQUU7QUFDVixTQUFNLEVBQUUsU0FBUztBQUNqQixTQUFNLEVBQUUsQ0FBQztBQUNULFNBQU0sRUFBRSxFQUFFO0FBQ1YsU0FBTSxFQUFFLEVBQUU7R0FDVixDQUFDO0VBQ0Y7QUFDRCxpQkFBZ0IsRUFBQywwQkFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFO0FBQy9CLE1BQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNsQixVQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDckMsTUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztFQUN4QjtBQUNELE9BQU0sRUFBQyxrQkFBRztBQUNULFNBQ0M7OztHQUNDOzs7O0lBQXdCO0dBQ3hCLG9CQUFDLGFBQWE7QUFDYixTQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEFBQUM7QUFDekIsWUFBUSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxBQUFDO0tBQ3BEO0dBQ0Y7Ozs7SUFBMkM7R0FDM0Msb0JBQUMsYUFBYTtBQUNiLFNBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQUFBQztBQUN6QixZQUFRLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEFBQUM7QUFDckQsU0FBSyxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQUFBQztBQUMzRCxjQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsQUFBQztLQUNuRjtHQUNGOzs7O0lBQTBDO0dBQzFDLG9CQUFDLGFBQWE7QUFDYixTQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEFBQUM7QUFDekIsUUFBSSxFQUFDLFFBQVE7QUFDYixZQUFRLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEFBQUM7S0FDcEQ7R0FDRjs7OztJQUFnQztHQUNoQyxvQkFBQyxhQUFhO0FBQ2IsZUFBVyxFQUFDLGFBQWE7QUFDekIsU0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxBQUFDO0FBQ3pCLFlBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQUFBQztBQUNyRCxTQUFLLEVBQUUsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxBQUFDO0FBQzNELGNBQVUsRUFBRSxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxBQUFDO0tBQ25GO0dBQ0Y7Ozs7SUFBaUQ7R0FDakQsb0JBQUMsYUFBYTtBQUNiLGVBQVcsRUFBQyxhQUFhO0FBQ3pCLHlCQUFxQixNQUFBO0FBQ3JCLFNBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQUFBQztBQUN6QixZQUFRLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEFBQUM7QUFDckQsU0FBSyxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQUFBQztBQUMzRCxjQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsQUFBQztLQUNuRjtHQUNHLENBQ0w7RUFDRjtDQUNELENBQUMsQ0FBQzs7QUFFSCxRQUFRLENBQUMsTUFBTSxDQUFDLG9CQUFDLEdBQUcsT0FBRyxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG52YXIgQXV0b3NpemVJbnB1dCA9IHJlcXVpcmUoJ3JlYWN0LWlucHV0LWF1dG9zaXplJyk7XG5cbnZhciBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGdldEluaXRpYWxTdGF0ZSAoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHZhbHVlMTogJycsXG5cdFx0XHR2YWx1ZTI6ICdleGFtcGxlJyxcblx0XHRcdHZhbHVlMzogMCxcblx0XHRcdHZhbHVlNDogJycsXG5cdFx0XHR2YWx1ZTU6ICcnLFxuXHRcdH07XG5cdH0sXG5cdHVwZGF0ZUlucHV0VmFsdWUgKGlucHV0LCBldmVudCkge1xuXHRcdHZhciBuZXdTdGF0ZSA9IHt9O1xuXHRcdG5ld1N0YXRlW2lucHV0XSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblx0XHR0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcblx0fSxcblx0cmVuZGVyICgpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGgzPlNpbXBsZSBleGFtcGxlOjwvaDM+XG5cdFx0XHRcdDxBdXRvc2l6ZUlucHV0XG5cdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUudmFsdWUxfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUlucHV0VmFsdWUuYmluZCh0aGlzLCAndmFsdWUxJyl9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxoMz5TdHlsZWQgZXhhbXBsZSB3aXRoIGRlZmF1bHQgdmFsdWU6PC9oMz5cblx0XHRcdFx0PEF1dG9zaXplSW5wdXRcblx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZTJ9XG5cdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMudXBkYXRlSW5wdXRWYWx1ZS5iaW5kKHRoaXMsICd2YWx1ZTInKX1cblx0XHRcdFx0XHRzdHlsZT17eyBiYWNrZ3JvdW5kOiAnI2VlZScsIGJvcmRlclJhZGl1czogNSwgcGFkZGluZzogNSB9fVxuXHRcdFx0XHRcdGlucHV0U3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICM5OTknLCBib3JkZXJSYWRpdXM6IDMsIHBhZGRpbmc6IDMsIGZvbnRTaXplOiAxNCB9fVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8aDM+VHlwZWQgZXhhbXBsZSB3aXRoIGRlZmF1bHQgdmFsdWU6PC9oMz5cblx0XHRcdFx0PEF1dG9zaXplSW5wdXRcblx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZTN9XG5cdFx0XHRcdFx0dHlwZT1cIm51bWJlclwiXG5cdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMudXBkYXRlSW5wdXRWYWx1ZS5iaW5kKHRoaXMsICd2YWx1ZTMnKX1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PGgzPklucHV0IHdpdGggcGxhY2Vob2xkZXI6PC9oMz5cblx0XHRcdFx0PEF1dG9zaXplSW5wdXRcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlBsYWNlaG9sZGVyXCJcblx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZTR9XG5cdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMudXBkYXRlSW5wdXRWYWx1ZS5iaW5kKHRoaXMsICd2YWx1ZTQnKX1cblx0XHRcdFx0XHRzdHlsZT17eyBiYWNrZ3JvdW5kOiAnI2VlZScsIGJvcmRlclJhZGl1czogNSwgcGFkZGluZzogNSB9fVxuXHRcdFx0XHRcdGlucHV0U3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICM5OTknLCBib3JkZXJSYWRpdXM6IDMsIHBhZGRpbmc6IDMsIGZvbnRTaXplOiAxNCB9fVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8aDM+SW5wdXQgd2l0aCBwbGFjZWhvbGRlciBhcyBtaW5pbXVtIHdpZHRoOjwvaDM+XG5cdFx0XHRcdDxBdXRvc2l6ZUlucHV0XG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJQbGFjZWhvbGRlclwiXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXJJc01pbldpZHRoXG5cdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUudmFsdWU1fVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUlucHV0VmFsdWUuYmluZCh0aGlzLCAndmFsdWU1Jyl9XG5cdFx0XHRcdFx0c3R5bGU9e3sgYmFja2dyb3VuZDogJyNlZWUnLCBib3JkZXJSYWRpdXM6IDUsIHBhZGRpbmc6IDUgfX1cblx0XHRcdFx0XHRpbnB1dFN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjOTk5JywgYm9yZGVyUmFkaXVzOiAzLCBwYWRkaW5nOiAzLCBmb250U2l6ZTogMTQgfX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG59KTtcblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG4iXX0=
