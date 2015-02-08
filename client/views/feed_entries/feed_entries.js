function markEntryAsRead(id) {
	if (id) {
		FeedEntries.update(id, { $set: { read: true } });
	}
}

function markEntryAsUnread(id) {
	if (id) {
		FeedEntries.update(id, { $set: { read: false } });
	}
}

Template.feedEntries.created = function () {

	var readEntryId = null;

	// Wire up 'd' keybinding to mark the most recent feed entry as read
	Meteor.Keybindings.addOne('d', function() {
		var mostRecentEntry = FeedEntries.mostRecentEntry();
		if (mostRecentEntry) {
			markEntryAsRead(mostRecentEntry._id);
			readEntryId = mostRecentEntry._id;
		}
	});

	// Wire up 'u' keybinding to mark the last read feed entry as unread.
	Meteor.Keybindings.addOne('u', function() {
		if (readEntryId) {
			markEntryAsUnread(readEntryId);
			readEntryId = null;
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
		markEntryAsRead(this._id);
	}

});
