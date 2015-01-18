Template.feedEntries.created = function () {
	Meteor.Keybindings.addOne('d', function() {
		var mostRecentEntry = FeedEntries.findOne({}, { sort: { date: -1 } });
		FeedEntries.remove(mostRecentEntry._id);
	});
};

Template.feedEntries.helpers({

	/**
	 * Get all feed entries.
	 *
	 * @return  {Array}  Feed entries.
	 */
	feedEntries: function () {

		return FeedEntries.find({}, { sort: { date: -1 } }).map(function (entry) {

			if (entry.description) {
				// Strip HTML
				entry.description = entry.description.replace(/<(?:.|\n)*?>/gm, '');
			}

			if (entry.date) {
				var formattedDate = moment(entry.date);
				if (formattedDate.isValid()) {
					entry.date = formattedDate.format('YYYY-MM-DD');
				}
			}

			return entry;

		});

	}

});

Template.feedEntries.events({

	'click .js-remove': function (e) {
		FeedEntries.remove(this._id);
	}

});
