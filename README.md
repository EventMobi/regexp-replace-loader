# regexp-replace-loader
A webpack loader to replace a regexp pattern with a string

### Installation

```shell
npm install regexp-replace-loader
```

### Usage

```js
// webpack.config.js
...
module: {
  loaders: [
    {
      test: /\.js$/,
      loader: 'regexp-replace',
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

All instances of "bar" and "baz" should then be replaced by "foo".
