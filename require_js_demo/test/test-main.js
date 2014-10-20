var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/\/base\/test\/spec\/.*\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

window.requireTestMode = true;

/*global chai*/
require(['test/bower_components/chai/chai'], function(chai) {
  window.assert = chai.assert;
  window.expect = chai.expect;
  window.should = chai.should();
});


requirejs.config({
  // Karma serves files from '/base'
  baseUrl: '/base',

  shim: {
    'underscore': {
      exports: '_'
    }
  },

  // ask Require.js to load these files (all our tests)
  deps: tests,

  // start test run, once Require.js is done
  callback:   window.__karma__.start
});
