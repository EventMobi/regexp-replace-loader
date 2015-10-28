'use strict';

var loaderUtils = require('loader-utils');

module.exports = function (source) {
  var query = loaderUtils.parseQuery(this.query);
  var re = new RegExp(query.match.pattern, query.match.flags);
  return source.replace(re, query.replaceWith);
};
