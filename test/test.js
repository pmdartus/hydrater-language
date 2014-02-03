'use strict';

require('should');

var hydrater = require('../lib/');


describe('Test HYDRATER results', function() {

  
  it('returns the correct informations', function(done) {
    console.log("test1 : french with english");
    
    var fs = require('fs');
    fs.readFile('./test/testFiles/test1.txt', 'utf8', function (err,data) {
      var start = +new Date();  // log start timestamp
      if (err) {
        return console.log(err);
      }
      var document = {
        datas: {
            text: data
          } 
      };
     
      hydrater(null, document, function(err, document) {
        document.should.have.property('metadatas');
        document.metadatas.should.have.property('language').and.eql('french');
        done();
      });
      var end =  +new Date();  // log end timestamp
      var diff = end - start;
      console.log(diff);
    });  
  });

  it('returns the correct informations', function(done) {  
    console.log("test2: french tags");  
    var fs = require('fs');
    fs.readFile('./test/testFiles/test2.txt', 'utf8', function (err,data) {
      var start = +new Date();  // log start timestamp
      if (err) {
        return console.log(err);
      }
      var document = {
        datas: {
            text: data
          } 
      };
     
      hydrater(null, document, function(err, document) {
        document.should.have.property('metadatas');
        document.metadatas.should.have.property('language').and.eql('french');
        done();
      });
      var end =  +new Date();  // log end timestamp
      var diff = end - start;
      console.log(diff);
    });  
  });
  
  it('returns the correct informations', function(done) { 
    console.log("test3 : german tags");   
    var fs = require('fs');
    fs.readFile('./test/testFiles/test3.txt', 'utf8', function (err,data) {
      var start = +new Date();  // log start timestamp
      if (err) {
        return console.log(err);
      }
      var document = {
        datas: {
            text: data
          } 
      };
     
      hydrater(null, document, function(err, document) {
        document.should.have.property('metadatas');
        document.metadatas.should.have.property('language').and.eql('german');
        done();
      });
      var end =  +new Date();  // log end timestamp
      var diff = end - start;
      console.log(diff);
    });  
  });

  it('returns the correct informations', function(done) { 
    console.log("test4 : english tags");   
    var fs = require('fs');
    fs.readFile('./test/testFiles/test4.txt', 'utf8', function (err,data) {
      var start = +new Date();  // log start timestamp
      if (err) {
        return console.log(err);
      }
      var document = {
        datas: {
            text: data
          } 
      };
     
      hydrater(null, document, function(err, document) {
        document.should.have.property('metadatas');
        document.metadatas.should.have.property('language').and.eql('english');
        done();
      });
      var end =  +new Date();  // log end timestamp
      var diff = end - start;
      console.log(diff);
    });  
  });


  it('returns the correct informations', function(done) {    
    console.log("test5 : french");
    var fs = require('fs');
    fs.readFile('./test/testFiles/test5.txt', 'utf8', function (err,data) {
      var start = +new Date();  // log start timestamp
      if (err) {
        return console.log(err);
      }
      var document = {
        datas: {
            text: data
          } 
      };
     
      hydrater(null, document, function(err, document) {
        document.should.have.property('metadatas');
        document.metadatas.should.have.property('language').and.eql('french');
        done();
      });
      var end =  +new Date();  // log end timestamp
      var diff = end - start;
      console.log(diff);
    });  
  });

  it('returns the correct informations', function(done) { 
  console.log("test6 : a lot of french");   
    var fs = require('fs');
    fs.readFile('./test/testFiles/test6.txt', 'utf8', function (err,data) {
      var start = +new Date();  // log start timestamp
      if (err) {
        return console.log(err);
      }
      var document = {
        datas: {
            text: data
          } 
      };
     
      hydrater(null, document, function(err, document) {
        document.should.have.property('metadatas');
        document.metadatas.should.have.property('language').and.eql('french');
        done();
      });
      var end =  +new Date();  // log end timestamp
      var diff = end - start;
      console.log(diff);
    });  
  });

  it('returns the correct informations', function(done) { 
    console.log("test7 : a lot of french");  
    var fs = require('fs');
    fs.readFile('./test/testFiles/test7.txt', 'utf8', function (err,data) {
      var start = +new Date();  // log start timestamp
      if (err) {
        return console.log(err);
      }
      var document = {
        datas: {
            text: data
          } 
      };
     
      hydrater(null, document, function(err, document) {
        document.should.have.property('metadatas');
        document.metadatas.should.have.property('language').and.eql('french');
        done();
      });
      var end =  +new Date();  // log end timestamp
      var diff = end - start;
      console.log(diff);
    });  
  });

  it('returns the correct informations', function(done) {
    console.log("test8 : english with spanish");    
    var fs = require('fs');
    fs.readFile('./test/testFiles/test8.txt', 'utf8', function (err,data) {
      var start = +new Date();  // log start timestamp
      if (err) {
        return console.log(err);
      }
      var document = {
        datas: {
            text: data
          } 
      };
     
      hydrater(null, document, function(err, document) {
        document.should.have.property('metadatas');
        document.metadatas.should.have.property('language').and.eql('english');
        done();
      });
      var end =  +new Date();  // log end timestamp
      var diff = end - start;
      console.log(diff);
    });  
  });

  it('returns the correct informations', function(done) {
    console.log("test9 : a lot of spanish");  
    var fs = require('fs');
    fs.readFile('./test/testFiles/test9.txt', 'utf8', function (err,data) {
      var start = +new Date();  // log start timestamp
      if (err) {
        return console.log(err);
      }
      var document = {
        datas: {
            text: data
          } 
      };
     
      hydrater(null, document, function(err, document) {
        document.should.have.property('metadatas');
        document.metadatas.should.have.property('language').and.eql('spanish');
        done();
      });
      var end =  +new Date();  // log end timestamp
      var diff = end - start;
      console.log(diff);
    });  
  });

  it('returns the correct informations', function(done) {
    console.log("test10 : german");  
    var fs = require('fs');
    fs.readFile('./test/testFiles/test10.txt', 'utf8', function (err,data) {
      var start = +new Date();  // log start timestamp
      if (err) {
        return console.log(err);
      }
      var document = {
        datas: {
            text: data
          } 
      };
     
      hydrater(null, document, function(err, document) {
        document.should.have.property('metadatas');
        document.metadatas.should.have.property('language').and.eql('german');
        done();
      });
      var end =  +new Date();  // log end timestamp
      var diff = end - start;
      console.log(diff);
    });  
  });

  it('returns the correct informations', function(done) {
    console.log("test11 : french with spanish");  
    var fs = require('fs');
    fs.readFile('./test/testFiles/test11.txt', 'utf8', function (err,data) {
      var start = +new Date();  // log start timestamp
      if (err) {
        return console.log(err);
      }
      var document = {
        datas: {
            text: data
          } 
      };
     
      hydrater(null, document, function(err, document) {
        document.should.have.property('metadatas');
        document.metadatas.should.have.property('language').and.eql('french');
        done();
      });
      var end =  +new Date();  // log end timestamp
      var diff = end - start;
      console.log(diff);
    });  
  });

  it('returns the correct informations', function(done) {
    console.log("test12 : spanish");  
    var fs = require('fs');
    fs.readFile('./test/testFiles/test12.txt', 'utf8', function (err,data) {
      var start = +new Date();  // log start timestamp
      if (err) {
        return console.log(err);
      }
      var document = {
        datas: {
            text: data
          } 
      };
     
      hydrater(null, document, function(err, document) {
        document.should.have.property('metadatas');
        document.metadatas.should.have.property('language').and.eql('spanish');
        done();
      });
      var end =  +new Date();  // log end timestamp
      var diff = end - start;
      console.log(diff);
    });  
  });




});
