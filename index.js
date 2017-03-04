'use strict';

var loaderUtils = require('loader-utils');

module.exports = function (source) {
  var options = loaderUtils.getOptions(this);
  var re = new RegExp(options.match.pattern, options.match.flags);
  return source.replace(re, options.replaceWith);
};
