
(function () {
  'use strict';

  // Notes Filter View
  // -----------------
  // Controls search filter and emits filter events.
  App.Views.NotesFilter = Backbone.View.extend({

    el: ".navbar-search",

    events: {
      // Disable form submission.
      "submit": function () { return false; },

      // Call filter on any data change.
      "change   .search-query": "filterNotes",
      "input    .search-query": "filterNotes"
    },

    // Apply filter to all notes in collection.
    filterNotes: function () {
      var query = this.$(".search-query").val().trim();
			this.collection.filterBy(query);
    },

  });
}());
