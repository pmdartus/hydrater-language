'use strict';

require('should');

var hydrater = require('../lib/');


describe('Test HYDRATER results', function() {

  
  it('returns the correct informations', function(done) {
    
    
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
    var start = +new Date();  // log start timestamp

    var document = {
      datas: {
        text:  "to abide abode abode rester/tolérer/demeurer to quit quit  quit  cesser (de)   to show showed  shown montrer  to read read  read  lire    to shrink shrank  shrunk  rétrécir to rid  rid rid débarrasser   to shut shut  shut  fermer to ride rode  ridden  chevaucher    to sing sang  sung  chanter to ring rang  rung  sonner    to sink sank  sunk  couler to rise rose  risen s'élever, se lever    to sit  sat sat être assis to run  ran run courir    to sleep  slept slept dormir to saw  sawed sawn  scier   to slide  slid  slid  glisser to say  said  said  dire    to sling  slung slung lancer fort to see  saw seen  voir    to slink  slunk slunk aller furtivement to seek sought  sought  chercher    to slit slit  slit  se fendre, inciser to sell sold  sold  vendre    to smell  smelt smelt sentir (nez)-flairer to send sent  sent  envoyer   to sow  sowed sown  semer to set  set set fixer   to speak  spoke spoken  parler to sew  sewed sewn  coudre    to speed  sped  sped  aller très vite to shake  shook shaken  secouer   to spell  spelt spelt épeler-orthographier to shear  sheared shorn tondre- cisailler   to spend  spent spent dépenser to shed shed  shed  verser (larme) muer-répandre    to spill  spilt spilt renverser un liquide to shine  shone shone briller   to spit spat  spat  cracher to shoe shod  shod  ferrer, chausser    to split  split split fendre to shoot  shot  shot  tirer un projectile-tuer-filmer   to spoil  spoilt  spoilt  gâcher- gâter  to breed  bred  bred  élever des animaux to arise to spread spread  spread  répandre    to teach  taught  taught  enseigner to spring sprang  sprung  jaillir, bondir   to tear tore  torn  déchirer to stand  stood stood être debout   to tell told  told  dire, raconter to steal  stole stolen  voler, dérober    to think  thought thought penser to stick  stuck stuck coller    to throw  threw thrown  jeter to sting  stung stung piquer    to thrust thrust  thrust  enfoncer to stink  stank stunk puer    to tread  trod  trodden piétiner quelque chose to stride strode  stridden  marcher à grands pas    to understand understood  understood  comprendre to strike struck  struck  frapper   to wake woke  woken (se) réveiller to string strung  strung  ficeler ...   to wear wore  worn  porter (des habits) to strive strove  striven s'efforcer    to weave  wove  woven tisser to swear  swore sworn jurer   to weep wept  wept  pleurer to sweep  swept swept balayer   to win  won won gagner to swell  swelled swollen enfler    to wind wound wound enrouler to swim swam  swum  nager   to wring  wrung wrung tordre to swing  swung swung se balancer   to write  wrote written écrire to take took  taken prendre          arose arisen  surgir survenir   to bring  brought brought apporter to awake  awoke awoken  se réveiller    to build  built built construire to bear bore  borne supporter   to burn burnt burnt brûler to beat beat  beaten  battre    to burst  burst burst éclater to become became  become  devenir   to buy  bought  bought  acheter to begin  began begun commencer   to cast cast  cast  jeter, distribuer (rôles) to bend bent  bent  fléchir-se courber    to catch  caught  caught  attraper to bet  bet bet parier    to choose chose chosen  choisir to bid  bid bid offrir un prix -ordonner    to cling  clung clung s'accrocher to bind bound bound lier, relier    to come came  come  venir to bite bit bitten  mordre    to cost cost  cost  coûter to bleed  bled  bled  saigner   to creep  crept crept ramper to blow blew  blown souffler    to cut  cut cut couper to break  broke broken  casser          "      
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

  it('returns the correct informations', function(done) {
    var start = +new Date();  // log start timestamp

    var document = {
      datas: {
        text:  "Le français est une langue indo-européenne de la famille des langues romanes. Le français s'est formé en France (variété de la « langue d’oïl ») et est aujourd'hui parlé sur tous les continents par environ 220 millions de personnes dont 115 millions de locuteurs natifs1, auxquels s'ajoutent 72 millions de locuteurs partiels (évaluation Organisation internationale de la francophonie : 2010). Elle est une des six langues officielles et une des deux langues de travail (avec l’anglais) de l’Organisation des Nations unies, et langue officielle ou de travail de plusieurs organisations internationales ou régionales, dont l’Union européenne. Après avoir été à l’époque de l’Ancien Régime français la langue des cours royales et princières, des tsars de Russie aux rois d’Espagne et d'Angleterre en passant par les princes de l’Allemagne, elle demeure une langue importante de la diplomatie internationale aux côtés de l’anglais, de l'allemand et de l’espagnol. La langue française est un attribut de souveraineté en France, depuis 1992 « la langue de la République est le français » (article 2 de la Constitution de la Cinquième République française). Elle est également le principal véhicule de la pensée et de la culture française dans le monde. La langue française fait l’objet d’un dispositif public d’enrichissement de la langue, avec le décret du 3 juillet 1996 relatif à l'enrichissement de la langue française. La langue française a cette particularité que son développement et sa codification ont été en partie l’œuvre de groupes intellectuels, comme la Pléiade, ou d’institutions, comme l’Académie française. C’est une langue dite « académique ». Toutefois, l’usage garde ses droits et nombreux sont ceux qui malaxèrent cette langue vivante, au premier rang desquels Rabelais et Molière : il est d’ailleurs question de la « langue de Molière »4. French (le français [lə fʁ̥ɒ̃sɛ] ( listen) or la langue française [la lɑ̃ɡ fʁɑ̃sɛz]) is a Romance language spoken as a first language in France, the Romandy region in Switzerland, Wallonia and Brussels in Belgium, Monaco, the provinces of Quebec, Ontario and New Brunswick (Acadia region) in Canada, the Acadiana region of the U.S. state of Louisiana, the northern parts of the U.S. states of Maine, New Hampshire and Vermont in the New England region, and by various communities elsewhere. Other speakers of French, who often speak it as a second language,[4] are distributed throughout many parts of the world, the largest numbers of whom reside in Francophone Africa.[5] In Africa, French is most commonly spoken in Gabon (where 80% report fluency),[5] Mauritius (78%), Algeria (75%), Senegal and Côte d'Ivoire (70%). French is estimated as having 110 million[4] native speakers and 190 million more second language speakers.[3] French is an Italic language descended from the spoken Latin language of the Roman Empire, as are languages such as Italian, Portuguese, Spanish, Romanian, Lombard, Catalan, Sicilian and Sardinian. Its closest relatives are the other langues d'oïl—languages historically spoken in northern France and in Belgium, which French has largely supplanted. French was also influenced by native Celtic languages of Roman Gaul and by the (Germanic) Frankish language of the post-Roman Frankish invaders. Today, owing to France's past overseas expansion, there are numerous French-based creole languages, most notably Haitian. French is an official language in 29 countries, most of which form la francophonie (in French), the community of French-speaking countries. It is an official language of all United Nations agencies and a large number of international organizations. According to France's Ministry of Foreign and European Affairs, 77 million in Europe speak French natively. Outside of France, the highest numbers of French speakers are found in Canada (25% of the population, of whom most live in Quebec), Belgium (45% of the population), Switzerland (20% of the population) and Luxembourg. In 2013, the Ministry identified French as the second most spoken language in Europe, after German and before English.[6] Twenty percent of non-Francophone Europeans know how to speak French,[clarification needed] totaling roughly 145.6 million people in Europe alone.[7] As a result of extensive colonial ambitions of France and Belgium (at that time governed by a French-speaking elite), between the 17th and 20th centuries, French was introduced to colonies in the Americas, Africa, Polynesia, the Levant, Southeast Asia, and the Caribbean.According to a demographic projection led by the Université Laval and the Réseau Démographie de l'Agence universitaire de la francophonie, French speakers will number approximately 500 million people in 2025 and 650 million people, or approximately 7% of the world's population by 2050.[8][9] Estimates in 2013 suggest that French speakers will reach 1 billion by 2060.[10] French was the official language of the colony of French Indochina, comprising modern-day Vietnam, Laos, and Cambodia. It continues to be an administrative language in Laos and Cambodia, although its influence has waned in recent years.[55] In colonial Vietnam, the elites primarily spoke French, while many servants who worked in French households spoke a French pidgin known as (now extinct). After French rule ended, South Vietnam continued to use French in administration, education, and trade.[56] Since the Fall of Saigon and the opening of a unified Vietnam's economy, French has gradually been effectively displaced as the main foreign language of choice by English. French nevertheless maintains its colonial legacy by being spoken as a second language by the elderly and elite populations and is presently being revived in higher education and continues to be a diplomatic language in Vietnam."      
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
