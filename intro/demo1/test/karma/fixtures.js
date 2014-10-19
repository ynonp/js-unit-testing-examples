(function(global) {
  var $el = $('<div id="fixture"></div>');
  $('body').append($el);

  global.Fixtures = {
    el: $el,
    load: function(name) {
      var filename = 'test/fixtures/' + name + '.html';
      var content = __html__[filename];
      $el.html(content);
    }
  };
}(this));
