describe('Colors Test', function() {
  describe('#paint', function() {
    it('should paint it red', function() {
      var el = { css: sinon.spy() };

      var colors = new Colors(el);
      var cssObj = colors.getCss('red');
      colors.paint('red');

      expect(el.css.calledWith(cssObj)).to.be.true;
    });
  });


  describe('#getCss()', function() {
    it('red paints it red', function() {
      // init
      var colors = new Colors();

      // perform
      var result = colors.getCss('red');

      // assert
      // expect(result).to.have.property('background', 'red');
      expect(result.background).to.eq('red');
    });

    it('should not allow pink color', function() {
      var colors = new Colors();

      expect(function() {
        colors.getCss('pink');
      }).to.throw(Error);


    });
  });

});


