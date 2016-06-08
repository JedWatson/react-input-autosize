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
		console.log(newValue, oldValue);
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9yZWFjdC1jb21wb25lbnQtZ3VscC10YXNrcy9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL0dpdEh1Yi9yZWFjdC1pbnB1dC1hdXRvc2l6ZS9leGFtcGxlL3NyYy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3QixJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDcEMsSUFBSSxhQUFhLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7O0FBRXBELElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUMzQixnQkFBZSxFQUFDLDJCQUFHO0FBQ2xCLFNBQU87QUFDTixTQUFNLEVBQUUsRUFBRTtBQUNWLFNBQU0sRUFBRSxTQUFTO0FBQ2pCLFNBQU0sRUFBRSxFQUFFO0FBQ1YsU0FBTSxFQUFFLEVBQUU7R0FDVixDQUFDO0VBQ0Y7QUFDRCxpQkFBZ0IsRUFBQywwQkFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFO0FBQ3JDLFNBQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0VBQ2hDO0FBQ0QsT0FBTSxFQUFDLGtCQUFHO0FBQ1QsU0FDQzs7O0dBQ0M7Ozs7SUFBd0I7R0FDeEIsb0JBQUMsYUFBYSxPQUFFO0dBQ2hCOzs7O0lBQTJDO0dBQzNDLG9CQUFDLGFBQWE7QUFDYixnQkFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxBQUFDO0FBQ2hDLFlBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEFBQUM7QUFDaEMsU0FBSyxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQUFBQztBQUMzRCxjQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsQUFBQztLQUNuRjtHQUNGOzs7O0lBQWdDO0dBQ2hDLG9CQUFDLGFBQWE7QUFDYixlQUFXLEVBQUMsYUFBYTtBQUN6QixTQUFLLEVBQUUsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxBQUFDO0FBQzNELGNBQVUsRUFBRSxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxBQUFDO0tBQ25GO0dBQ0Y7Ozs7SUFBaUQ7R0FDakQsb0JBQUMsYUFBYTtBQUNiLGVBQVcsRUFBQyxhQUFhO0FBQ3pCLHlCQUFxQixNQUFBO0FBQ3JCLFNBQUssRUFBRSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEFBQUM7QUFDM0QsY0FBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEFBQUM7S0FDbkY7R0FDRyxDQUNMO0VBQ0Y7Q0FDRCxDQUFDLENBQUM7O0FBRUgsUUFBUSxDQUFDLE1BQU0sQ0FBQyxvQkFBQyxHQUFHLE9BQUcsRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xudmFyIEF1dG9zaXplSW5wdXQgPSByZXF1aXJlKCdyZWFjdC1pbnB1dC1hdXRvc2l6ZScpO1xuXG52YXIgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRnZXRJbml0aWFsU3RhdGUgKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR2YWx1ZTE6ICcnLFxuXHRcdFx0dmFsdWUyOiAnZXhhbXBsZScsXG5cdFx0XHR2YWx1ZTM6ICcnLFxuXHRcdFx0dmFsdWU0OiAnJyxcblx0XHR9O1xuXHR9LFxuXHR1cGRhdGVJbnB1dFZhbHVlIChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcblx0XHRjb25zb2xlLmxvZyhuZXdWYWx1ZSwgb2xkVmFsdWUpO1xuXHR9LFxuXHRyZW5kZXIgKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8aDM+U2ltcGxlIGV4YW1wbGU6PC9oMz5cblx0XHRcdFx0PEF1dG9zaXplSW5wdXQvPlxuXHRcdFx0XHQ8aDM+U3R5bGVkIGV4YW1wbGUgd2l0aCBkZWZhdWx0IHZhbHVlOjwvaDM+XG5cdFx0XHRcdDxBdXRvc2l6ZUlucHV0XG5cdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlMn1cblx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy51cGRhdGVJbnB1dFZhbHVlfVxuXHRcdFx0XHRcdHN0eWxlPXt7IGJhY2tncm91bmQ6ICcjZWVlJywgYm9yZGVyUmFkaXVzOiA1LCBwYWRkaW5nOiA1IH19XG5cdFx0XHRcdFx0aW5wdXRTdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgIzk5OScsIGJvcmRlclJhZGl1czogMywgcGFkZGluZzogMywgZm9udFNpemU6IDE0IH19XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxoMz5JbnB1dCB3aXRoIHBsYWNlaG9sZGVyOjwvaDM+XG5cdFx0XHRcdDxBdXRvc2l6ZUlucHV0XG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJQbGFjZWhvbGRlclwiXG5cdFx0XHRcdFx0c3R5bGU9e3sgYmFja2dyb3VuZDogJyNlZWUnLCBib3JkZXJSYWRpdXM6IDUsIHBhZGRpbmc6IDUgfX1cblx0XHRcdFx0XHRpbnB1dFN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjOTk5JywgYm9yZGVyUmFkaXVzOiAzLCBwYWRkaW5nOiAzLCBmb250U2l6ZTogMTQgfX1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PGgzPklucHV0IHdpdGggcGxhY2Vob2xkZXIgYXMgbWluaW11bSB3aWR0aDo8L2gzPlxuXHRcdFx0XHQ8QXV0b3NpemVJbnB1dFxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiUGxhY2Vob2xkZXJcIlxuXHRcdFx0XHRcdHBsYWNlaG9sZGVySXNNaW5XaWR0aFxuXHRcdFx0XHRcdHN0eWxlPXt7IGJhY2tncm91bmQ6ICcjZWVlJywgYm9yZGVyUmFkaXVzOiA1LCBwYWRkaW5nOiA1IH19XG5cdFx0XHRcdFx0aW5wdXRTdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgIzk5OScsIGJvcmRlclJhZGl1czogMywgcGFkZGluZzogMywgZm9udFNpemU6IDE0IH19XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9LFxufSk7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuIl19
