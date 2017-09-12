# react-input-autosize

## v2.0.1 / 2017-09-13

* fixed; peer dependencies for `prop-types`

## v2.0.0 / 2017-09-12

* fixed; converted to es6 Class and removed `create-react-class`
* changed; default export is now an es6 module

### Note:

As of 2.0.0 this package exports an es6 module in the main entry
(`/lib/AutoSizeInput.js`). If you are in an older environment, you'll need to
refer to the `.default` export:

```js
var AutoSizeInput = require('react-input-autosize').default;
```

Aside from this, the new version doesn't change any public API.

## v1.2.0 / 2017-09-12

* added; `inputRef` prop (function, passed the reference to the input node)
* fixed; resize issues in IE11, thanks [Constantine](https://github.com/costagolub)
* fixed; `copyInputStyles()` never running, thanks [Michael Elsdörfer](https://github.com/miracle2k)
