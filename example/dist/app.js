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
			value3: '',
			value4: ''
		};
	},
	updateInputValue: function updateInputValue(newValue, oldValue) {
		if (this.refs.autosizeInput1) {
			if (newValue.length > 10) {
				this.refs.autosizeInput1.setValue(oldValue);
			}
		}
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
			React.createElement(AutosizeInput, null),
			React.createElement(
				'h3',
				null,
				'Styled example with default value:'
			),
			React.createElement(AutosizeInput, {
				ref: 'autosizeInput1',
				defaultValue: this.state.value2,
				onChange: this.updateInputValue,
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
				style: { background: '#eee', borderRadius: 5, padding: 5 },
				inputStyle: { border: '1px solid #999', borderRadius: 3, padding: 3, fontSize: 14 }
			})
		);
	}
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-dom":undefined,"react-input-autosize":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9yZWFjdC1jb21wb25lbnQtZ3VscC10YXNrcy9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL0dpdEh1Yi9yZWFjdC1pbnB1dC1hdXRvc2l6ZS9leGFtcGxlL3NyYy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3QixJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDcEMsSUFBSSxhQUFhLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7O0FBRXBELElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUMzQixnQkFBZSxFQUFDLDJCQUFHO0FBQ2xCLFNBQU87QUFDTixTQUFNLEVBQUUsRUFBRTtBQUNWLFNBQU0sRUFBRSxTQUFTO0FBQ2pCLFNBQU0sRUFBRSxFQUFFO0FBQ1YsU0FBTSxFQUFFLEVBQUU7R0FDVixDQUFDO0VBQ0Y7QUFDRCxpQkFBZ0IsRUFBQywwQkFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFO0FBQ3JDLE1BQUksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7QUFDN0IsT0FBSSxRQUFRLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBRTtBQUN6QixRQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUM7R0FDRDtFQUNEO0FBQ0QsT0FBTSxFQUFDLGtCQUFHO0FBQ1QsU0FDQzs7O0dBQ0M7Ozs7SUFBd0I7R0FDeEIsb0JBQUMsYUFBYSxPQUFFO0dBQ2hCOzs7O0lBQTJDO0dBQzNDLG9CQUFDLGFBQWE7QUFDYixPQUFHLEVBQUMsZ0JBQWdCO0FBQ3BCLGdCQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEFBQUM7QUFDaEMsWUFBUSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQUFBQztBQUNoQyxTQUFLLEVBQUUsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxBQUFDO0FBQzNELGNBQVUsRUFBRSxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxBQUFDO0tBQ25GO0dBQ0Y7Ozs7SUFBZ0M7R0FDaEMsb0JBQUMsYUFBYTtBQUNiLGVBQVcsRUFBQyxhQUFhO0FBQ3pCLFNBQUssRUFBRSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEFBQUM7QUFDM0QsY0FBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEFBQUM7S0FDbkY7R0FDRjs7OztJQUFpRDtHQUNqRCxvQkFBQyxhQUFhO0FBQ2IsZUFBVyxFQUFDLGFBQWE7QUFDekIseUJBQXFCLE1BQUE7QUFDckIsU0FBSyxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQUFBQztBQUMzRCxjQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsQUFBQztLQUNuRjtHQUNHLENBQ0w7RUFDRjtDQUNELENBQUMsQ0FBQzs7QUFFSCxRQUFRLENBQUMsTUFBTSxDQUFDLG9CQUFDLEdBQUcsT0FBRyxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG52YXIgQXV0b3NpemVJbnB1dCA9IHJlcXVpcmUoJ3JlYWN0LWlucHV0LWF1dG9zaXplJyk7XG5cbnZhciBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGdldEluaXRpYWxTdGF0ZSAoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHZhbHVlMTogJycsXG5cdFx0XHR2YWx1ZTI6ICdleGFtcGxlJyxcblx0XHRcdHZhbHVlMzogJycsXG5cdFx0XHR2YWx1ZTQ6ICcnLFxuXHRcdH07XG5cdH0sXG5cdHVwZGF0ZUlucHV0VmFsdWUgKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuXHRcdGlmICh0aGlzLnJlZnMuYXV0b3NpemVJbnB1dDEpIHtcblx0XHRcdGlmIChuZXdWYWx1ZS5sZW5ndGggPiAxMCkge1xuXHRcdFx0XHR0aGlzLnJlZnMuYXV0b3NpemVJbnB1dDEuc2V0VmFsdWUob2xkVmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0cmVuZGVyICgpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGgzPlNpbXBsZSBleGFtcGxlOjwvaDM+XG5cdFx0XHRcdDxBdXRvc2l6ZUlucHV0Lz5cblx0XHRcdFx0PGgzPlN0eWxlZCBleGFtcGxlIHdpdGggZGVmYXVsdCB2YWx1ZTo8L2gzPlxuXHRcdFx0XHQ8QXV0b3NpemVJbnB1dFxuXHRcdFx0XHRcdHJlZj1cImF1dG9zaXplSW5wdXQxXCJcblx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUudmFsdWUyfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUlucHV0VmFsdWV9XG5cdFx0XHRcdFx0c3R5bGU9e3sgYmFja2dyb3VuZDogJyNlZWUnLCBib3JkZXJSYWRpdXM6IDUsIHBhZGRpbmc6IDUgfX1cblx0XHRcdFx0XHRpbnB1dFN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjOTk5JywgYm9yZGVyUmFkaXVzOiAzLCBwYWRkaW5nOiAzLCBmb250U2l6ZTogMTQgfX1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PGgzPklucHV0IHdpdGggcGxhY2Vob2xkZXI6PC9oMz5cblx0XHRcdFx0PEF1dG9zaXplSW5wdXRcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlBsYWNlaG9sZGVyXCJcblx0XHRcdFx0XHRzdHlsZT17eyBiYWNrZ3JvdW5kOiAnI2VlZScsIGJvcmRlclJhZGl1czogNSwgcGFkZGluZzogNSB9fVxuXHRcdFx0XHRcdGlucHV0U3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICM5OTknLCBib3JkZXJSYWRpdXM6IDMsIHBhZGRpbmc6IDMsIGZvbnRTaXplOiAxNCB9fVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8aDM+SW5wdXQgd2l0aCBwbGFjZWhvbGRlciBhcyBtaW5pbXVtIHdpZHRoOjwvaDM+XG5cdFx0XHRcdDxBdXRvc2l6ZUlucHV0XG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJQbGFjZWhvbGRlclwiXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXJJc01pbldpZHRoXG5cdFx0XHRcdFx0c3R5bGU9e3sgYmFja2dyb3VuZDogJyNlZWUnLCBib3JkZXJSYWRpdXM6IDUsIHBhZGRpbmc6IDUgfX1cblx0XHRcdFx0XHRpbnB1dFN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjOTk5JywgYm9yZGVyUmFkaXVzOiAzLCBwYWRkaW5nOiAzLCBmb250U2l6ZTogMTQgfX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG59KTtcblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG4iXX0=
