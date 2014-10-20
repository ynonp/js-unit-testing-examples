// to depend on a bower installed component:
// define(['bower_components/componentName/file'])

define(["jquery", "counter"], function($, Counter) {
  var counter = new Counter();
  counter.inc();
  $('body').append('jQuery ' + $.fn.jquery + ' loaded!. counter = ' + counter.value());
});
