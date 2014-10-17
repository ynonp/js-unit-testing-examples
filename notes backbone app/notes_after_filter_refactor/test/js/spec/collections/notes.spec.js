describe("App.Collections.Notes", function () {
	it("should create notes", function () {
		var col = new App.Collections.Notes();
		col.create({title: "test note"});

		expect(col.length).to.eq(1);
	});

	it("should trigger add event when adding a new note", function() {
		var col = new App.Collections.Notes();
		var note = new App.Models.Note();
		var addSpy = sinon.spy();

		col.on('add', addSpy);
		col.add(note);

		expect(addSpy).to.have.been.called;
	});
});

describe("App.Collection.Notes backend tests", function() {
	it("should save data to backend", function() {
		localStorage.clear();

		var col = new App.Collections.Notes();
		col.create({title: "my new test note"});

		col.reset();
		col.fetch();

		expect(col).to.have.length(1);
		expect(col.at(0).get("title")).to.eq("my new test note");
	});
});







