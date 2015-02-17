Template.feedEntry.helpers({

	feedName: function () {
		var feed = FeedMe.Feeds.findOne({ _id: this.feed_id });
		if (feed) {
			return feed.name;
		}
	}

});
