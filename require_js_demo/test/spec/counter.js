define(['app/counter'], function(Counter) {
  describe('Counter Tests', function() {
    it('should start from 0', function() {
      var counter = new Counter();
      expect(counter.value()).to.eq(0);
    });
  });
});
