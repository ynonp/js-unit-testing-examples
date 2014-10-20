require.config({
  // make components more sensible
  // expose jquery 
  paths: {
    "components": "bower_components",
    "underscore" : "bower_components/underscore/underscore",
    "jquery": "bower_components/jquery/dist/jquery"
  }
});

if (!window.requireTestMode) {
  require(['main'], function(){ });
}





