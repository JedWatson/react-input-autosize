React-Input-Autosize
====================

A text input for [React](http://facebook.github.io/react/index.html) that resizes itself to the current content.


## Demo & Examples

Live demo: [jedwatson.github.io/react-input-autosize](http://jedwatson.github.io/react-input-autosize/)

To run the examples locally, run:

```
npm install
npm start
```

Then open [localhost:8000](http://localhost:8000) in a browser.


## Installation

The easiest way to use React-Input-Autosize is to install it from NPM and include it in your own React build process (using Browserify, rollup, webpack, etc).

You can also use the umd build by including `dist/AutosizeInput.js` in your page. If you use this, make sure you have already included a umd React build.

```
npm install react-input-autosize --save
```


## Usage

React-Input-Autosize generates an input field, wrapped in a `<div>` tag so it can detect the size of its value. Otherwise it behaves very similarly to a standard React input.


```es6
import AutosizeInput from 'react-input-autosize';

<AutosizeInput
	name="form-field-name"
	value={inputValue}
	onChange={function(event) {
		// event.target.value contains the new value
	}}
/>
```

## Gotchas

### Custom font sizes
If your input uses custom font sizes, you will need to provide the custom size to `AutosizeInput`.

```es6
<AutosizeInput
	name="form-field-name"
	value={inputValue}
	style={{ fontSize: 36 }}
	onChange={function(event) {
		// event.target.value contains the new value
	}}
/>
```

### Uncontrolled input
`AutosizeInput` is a [controlled input](https://facebook.github.io/react/docs/forms.html#controlled-components) and depends on the `value` prop to work as intended. It does not support being used as an uncontrolled input.

## License

Copyright (c) 2017 Jed Watson. [MIT](LICENSE) License.
