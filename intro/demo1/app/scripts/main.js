function Colors(body_el) {
  var self = this;

  self.getCss = function(color) {
      if ( color === 'pink' ) {
        throw new Error('Pink is not allowed');
      }
      return { 'background' : color }
  };

  self.paint = function(color) {
      body_el.css(self.getCss(color));
  };
}

var colors = new Colors($('body'));

$('#btnRed').on('click', function() {
  colors.paint('red');
});

$('#btnBlue').on('click', function() {
  colors.paint('blue');
});

$('#btnGreen').on('click', function() {
  colors.paint('green');
});