Template.feedEntry.helpers({

	feedName: function () {
		var feed = Feeds.findOne({ _id: this.feed_id });
		if (feed) {
			return feed.name;
		}
	}

});
