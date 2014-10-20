function Colors(body_el) {
  var self = this;

  var validColors = ['red', 'blue', 'green', 'white', 'yellow', 'black', 'brown'];

  self.getCss = function(color) {
      if ( validColors.indexOf(color.toLowerCase()) === -1 ) {
        throw new Error('Invalid color');
      }
      return { 'background' : color }
  };

  self.paint = function(color) {
      body_el.css(self.getCss(color));
  };

  self.addColorButton = function(button, color) {
    button.on('click', function() {
      self.paint(color);
    });
  };
}

var colors = new Colors($('body'));
colors.addColorButton($('#btnRed'), 'red');
colors.addColorButton($('#btnBlue'), 'blue');
colors.addColorButton($('#btnGreen'), 'green');

