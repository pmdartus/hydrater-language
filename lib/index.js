'use strict';

var config = require('./../config/configuration.js');
var lngDetector = config.detector;

/**
 * HYDRATING FUNCTION
 *
 * @param {string} path Path of the specified file
 * @param {string} document to hydrate
 * @param {function} cb Callback, first parameter, is the error if any, then the processed data
 */
module.exports = function(path, document, cb) {
  var languages = lngDetector.detect(document.datas.text, 5);
  languages = languages.map(function(lang) {
    var langHash = {
      language: lang[0],
      value: lang[1]
    };
    return langHash;
  });

  document.metadatas = {};
  document.metadatas.languages = languages;
  cb(null , document);
};
