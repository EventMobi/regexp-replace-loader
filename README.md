# regexp-replace-loader
A webpack loader to replace a regexp pattern with a string

### Installation

```shell
npm install regexp-replace-loader
```

### Usage

##### webpack 2.x
```js
// webpack.config.js
...
module: {
  rules: [
    {
      test: /\.js$/,
      loader: 'regexp-replace-loader',
      options: {
        match: {
          pattern: 'ba(r|z)',
          flags: 'g'
        },
        replaceWith: 'foo'
      }
    }
  ]
}
```

##### webpack 1.x
```js
// webpack.config.js
...
module: {
  loaders: [
    {
      test: /\.js$/,
      loader: 'regexp-replace-loader',
      query: {
        match: {
          pattern: 'ba(r|z)',
          flags: 'g'
        },
        replaceWith: 'foo'
      }
    }
  ]
}
```

All instances of "bar" and "baz" will then be replaced by "foo".
