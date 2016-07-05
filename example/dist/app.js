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
			}),
			React.createElement(
				'h3',
				null,
				'Input with placeholder as minimum width:'
			),
			React.createElement(AutosizeInput, {
				placeholder: 'Placeholder',
				placeholderIsMinWidth: true,
				value: this.state.value4,
				onChange: this.updateInputValue.bind(this, 'value4'),
				style: { background: '#eee', borderRadius: 5, padding: 5 },
				inputStyle: { border: '1px solid #999', borderRadius: 3, padding: 3, fontSize: 14 }
			})
		);
	}
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-dom":undefined,"react-input-autosize":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9yZWFjdC1jb21wb25lbnQtZ3VscC10YXNrcy9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL0dpdEh1Yi9yZWFjdC1pbnB1dC1hdXRvc2l6ZS9leGFtcGxlL3NyYy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3QixJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDcEMsSUFBSSxhQUFhLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7O0FBRXBELElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUMzQixnQkFBZSxFQUFDLDJCQUFHO0FBQ2xCLFNBQU87QUFDTixTQUFNLEVBQUUsRUFBRTtBQUNWLFNBQU0sRUFBRSxTQUFTO0FBQ2pCLFNBQU0sRUFBRSxFQUFFO0FBQ1YsU0FBTSxFQUFFLEVBQUU7R0FDVixDQUFDO0VBQ0Y7QUFDRCxpQkFBZ0IsRUFBQywwQkFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFO0FBQy9CLE1BQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNsQixVQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDckMsTUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztFQUN4QjtBQUNELE9BQU0sRUFBQyxrQkFBRztBQUNULFNBQ0M7OztHQUNDOzs7O0lBQXdCO0dBQ3hCLG9CQUFDLGFBQWE7QUFDYixTQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEFBQUM7QUFDekIsWUFBUSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxBQUFDO0tBQ3BEO0dBQ0Y7Ozs7SUFBMkM7R0FDM0Msb0JBQUMsYUFBYTtBQUNiLFNBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQUFBQztBQUN6QixZQUFRLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEFBQUM7QUFDckQsU0FBSyxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQUFBQztBQUMzRCxjQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsQUFBQztLQUNuRjtHQUNGOzs7O0lBQWdDO0dBQ2hDLG9CQUFDLGFBQWE7QUFDYixlQUFXLEVBQUMsYUFBYTtBQUN6QixTQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEFBQUM7QUFDekIsWUFBUSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxBQUFDO0FBQ3JELFNBQUssRUFBRSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEFBQUM7QUFDM0QsY0FBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEFBQUM7S0FDbkY7R0FDRjs7OztJQUFpRDtHQUNqRCxvQkFBQyxhQUFhO0FBQ2IsZUFBVyxFQUFDLGFBQWE7QUFDekIseUJBQXFCLE1BQUE7QUFDckIsU0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxBQUFDO0FBQ3pCLFlBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQUFBQztBQUNyRCxTQUFLLEVBQUUsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxBQUFDO0FBQzNELGNBQVUsRUFBRSxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxBQUFDO0tBQ25GO0dBQ0csQ0FDTDtFQUNGO0NBQ0QsQ0FBQyxDQUFDOztBQUVILFFBQVEsQ0FBQyxNQUFNLENBQUMsb0JBQUMsR0FBRyxPQUFHLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcbnZhciBBdXRvc2l6ZUlucHV0ID0gcmVxdWlyZSgncmVhY3QtaW5wdXQtYXV0b3NpemUnKTtcblxudmFyIEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0Z2V0SW5pdGlhbFN0YXRlICgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dmFsdWUxOiAnJyxcblx0XHRcdHZhbHVlMjogJ2V4YW1wbGUnLFxuXHRcdFx0dmFsdWUzOiAnJyxcblx0XHRcdHZhbHVlNDogJycsXG5cdFx0fTtcblx0fSxcblx0dXBkYXRlSW5wdXRWYWx1ZSAoaW5wdXQsIGV2ZW50KSB7XG5cdFx0dmFyIG5ld1N0YXRlID0ge307XG5cdFx0bmV3U3RhdGVbaW5wdXRdID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXHRcdHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuXHR9LFxuXHRyZW5kZXIgKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8aDM+U2ltcGxlIGV4YW1wbGU6PC9oMz5cblx0XHRcdFx0PEF1dG9zaXplSW5wdXRcblx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZTF9XG5cdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMudXBkYXRlSW5wdXRWYWx1ZS5iaW5kKHRoaXMsICd2YWx1ZTEnKX1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PGgzPlN0eWxlZCBleGFtcGxlIHdpdGggZGVmYXVsdCB2YWx1ZTo8L2gzPlxuXHRcdFx0XHQ8QXV0b3NpemVJbnB1dFxuXHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlMn1cblx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy51cGRhdGVJbnB1dFZhbHVlLmJpbmQodGhpcywgJ3ZhbHVlMicpfVxuXHRcdFx0XHRcdHN0eWxlPXt7IGJhY2tncm91bmQ6ICcjZWVlJywgYm9yZGVyUmFkaXVzOiA1LCBwYWRkaW5nOiA1IH19XG5cdFx0XHRcdFx0aW5wdXRTdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgIzk5OScsIGJvcmRlclJhZGl1czogMywgcGFkZGluZzogMywgZm9udFNpemU6IDE0IH19XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxoMz5JbnB1dCB3aXRoIHBsYWNlaG9sZGVyOjwvaDM+XG5cdFx0XHRcdDxBdXRvc2l6ZUlucHV0XG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJQbGFjZWhvbGRlclwiXG5cdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUudmFsdWUzfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUlucHV0VmFsdWUuYmluZCh0aGlzLCAndmFsdWUzJyl9XG5cdFx0XHRcdFx0c3R5bGU9e3sgYmFja2dyb3VuZDogJyNlZWUnLCBib3JkZXJSYWRpdXM6IDUsIHBhZGRpbmc6IDUgfX1cblx0XHRcdFx0XHRpbnB1dFN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjOTk5JywgYm9yZGVyUmFkaXVzOiAzLCBwYWRkaW5nOiAzLCBmb250U2l6ZTogMTQgfX1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PGgzPklucHV0IHdpdGggcGxhY2Vob2xkZXIgYXMgbWluaW11bSB3aWR0aDo8L2gzPlxuXHRcdFx0XHQ8QXV0b3NpemVJbnB1dFxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiUGxhY2Vob2xkZXJcIlxuXHRcdFx0XHRcdHBsYWNlaG9sZGVySXNNaW5XaWR0aFxuXHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlNH1cblx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy51cGRhdGVJbnB1dFZhbHVlLmJpbmQodGhpcywgJ3ZhbHVlNCcpfVxuXHRcdFx0XHRcdHN0eWxlPXt7IGJhY2tncm91bmQ6ICcjZWVlJywgYm9yZGVyUmFkaXVzOiA1LCBwYWRkaW5nOiA1IH19XG5cdFx0XHRcdFx0aW5wdXRTdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgIzk5OScsIGJvcmRlclJhZGl1czogMywgcGFkZGluZzogMywgZm9udFNpemU6IDE0IH19XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9LFxufSk7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuIl19
