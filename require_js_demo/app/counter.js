define([], function() {
  return function() {
    var self = this;
    var value = 0;

    self.inc = function() {
      return value++;
    };

    self.dec = function() {
      return value--;
    };

    self.value = function() {
      return value;
    };
  };
});
