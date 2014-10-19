/**
 * Created by ynonperek on 10/19/14.
 */

describe('fixture', function() {
  beforeEach(function() {
    Fixtures.load('listview');
  });

  it('should use a fixture', function() {
    var lis = $('li', Fixtures.el);
    expect(lis.length).to.eq(3);
  });
});

describe('async test', function() {
  it('should work async', function(done) {
    var result = false;

    setTimeout(function() {
      result = true;
      expect(result).to.be.true;
      done();
    }, 10);
  });

  it('wont run until previous it finished', function() {

  });
});