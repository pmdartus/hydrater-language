'use strict';

require('should');

var hydrater = require('../lib/');


describe('Test HYDRATER results', function() {
  it('returns the correct informations', function(done) {
    var document = {
      datas: {
        text: "Je suis francois le francais."
      }
    };

    hydrater(document, function(err, document) {
      document.should.have.property('metadatas');
      document.metadatas.should.have.property('language').and.contains('french');
      done();
    });
  });
});
