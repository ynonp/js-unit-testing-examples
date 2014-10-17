/*global FilteredCollection*/
(function () {
  'use strict';

  // Notes Collection
  // ----------------
  // Uses HTML `localStorage`.
  App.Collections.Notes = Backbone.Collection.extend({

    model: App.Models.Note,

    localStorage: new Backbone.LocalStorage(App.Config.storeName),

		initialize: function() {
			this.forDisplay = new FilteredCollection(this);
		},

		filterBy: function(query) {
			if ( query.length > 0 ) {
				this.forDisplay.filterBy('note title', { title: function(val) {
					return val.indexOf(query) >= 0;
				}});
			} else {
				this.showAll();
			}

			this.trigger('reset');
		},

		showAll: function() {
			this.forDisplay.resetFilters();
		}

  });
}());
