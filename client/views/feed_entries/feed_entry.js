Template.feedEntry.helpers({

	feedName: function () {
		var feed = Feeds.findOne({ _id: this.feed_id });
		return feed.name;
	}

});
