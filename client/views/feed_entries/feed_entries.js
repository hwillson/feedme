function removeFeedEntry(id) {
	if (id) {
		FeedEntries.update(id, { $set: { read: true } });
		//FeedEntries.remove(id);
	}
}

Template.feedEntries.created = function () {
	// Wire up 'd' keybinding to remove the most recent feed entry.
	Meteor.Keybindings.addOne('d', function() {
		var mostRecentEntry = FeedEntries.mostRecentEntry();
		if (mostRecentEntry) {
			removeFeedEntry(mostRecentEntry._id);
		}
	});
};

Template.feedEntries.helpers({

	/**
	 * Get all feed entries.
	 *
	 * @return  {Array}  Feed entries.
	 */
	feedEntries: function () {

    var entries = FeedEntries.authorizedEntries();

		return entries.map(function (entry) {

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
		removeFeedEntry(this._id);
	}

});
