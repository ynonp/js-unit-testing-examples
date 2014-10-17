(function () {
  'use strict';

  // Note Model
  // ----------
  App.Models.Note = Backbone.Model.extend({

    defaults: function () {
      return {
        title: "",
        text: "*Edit your note!*",
        createdAt: new Date()
      };
    },

		word_count: function() {
			return this.get('text').split(/\s/).length;
		}

  });
}());
