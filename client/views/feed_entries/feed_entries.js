Template.feedEntries.helpers({

	/**
	 * Get all feed entries.
	 *
	 * @return  Array  Feed entries.
	 */
	feedEntries: function () {
		return FeedEntries.find().map(function (entry) {

			if (entry.description) {
				// Strip HTML
				entry.description = entry.description.replace(/<(?:.|\n)*?>/gm, '');
			}

			if (entry.date) {
				var formattedDate = moment(entry.data);
				if (formattedDate.isValid()) {
					entry.date = formattedDate.format('YYYY-MM-DD');
				}
			}

			return entry;

		});
	}

});
