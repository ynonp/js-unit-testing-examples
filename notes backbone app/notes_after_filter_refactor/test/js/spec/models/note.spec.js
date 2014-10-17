describe("App.Models.Note", function () {
  it("has default values", function () {
    // Create empty note model.
    var model = new App.Models.Note();

    expect(model).to.be.ok;
    expect(model.get("title")).to.equal("");
    expect(model.get("text")).to.equal("*Edit your note!*");
    expect(model.get("createdAt")).to.be.a("Date");
  });

  it("sets passed attributes", function () {
    var model = new App.Models.Note({
      title: "Grocery List",
      text: "* Milk\n* Eggs\n*Coffee"
    });

    expect(model.get("title")).to.equal("Grocery List");
    expect(model.get("text")).to.equal("* Milk\n* Eggs\n*Coffee");
  });

	it("Count the words of a note", function() {
		var model = new App.Models.Note({text: "hello world"});

		expect(model.word_count()).to.equal(2);
	});

	it("should trigger change event when changed", function() {
		var note = new App.Models.Note();
		var changeSpy = sinon.spy();

		note.on("change", changeSpy);
		note.set('title', 'hello');

		expect(changeSpy).to.have.been.called;
	});
});

describe("App.Models.Note tests with fake timer", function() {
	var clock;
	// back to the 1970s
	before(function () { clock = sinon.useFakeTimers(0); });
	after(function () { clock.restore(); });


	it("should use Now as the default time for new notes", function() {
		// freezing the time ensures we get the correct results in testing even for slow programs
		var note = new App.Models.Note();	
		var now = new Date();
		expect(note.get("createdAt")).to.eql(now);
	});
});











