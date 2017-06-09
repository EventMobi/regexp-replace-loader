'use strict';

var loaderUtils = require('loader-utils');

module.exports = function (source) {
  var options = loaderUtils.getOptions(this);
  var re = new RegExp(options.match.pattern, options.match.flags);
  var isFunction = (typeof options.replaceWith === 'function');
  var replaceWith = isFunction ? options.replaceWith() : options.replaceWith;
  return source.replace(re, replaceWith);
};
