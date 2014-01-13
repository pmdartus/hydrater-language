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

    hydrater(null, document, function(err, document) {
      document.should.have.property('metadatas');
      console.log(document.metadatas);
      document.metadatas.should.have.property('languages').and.contains('french');
      done();
    });
  });
});
