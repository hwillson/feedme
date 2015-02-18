FeedMe.FeedEntries = new Mongo.Collection('feed_entries');

FeedMe.FeedEntries.allow({
	update: function (userId, doc, fields, modifier) {
		var authorizedEntryIds =
			FeedMe.FeedEntries.authorizedEntries().map(function (doc) {
				return doc._id;
			});
		var canUpdate = false;
		if (authorizedEntryIds.indexOf(doc._id) > -1) {
			canUpdate = true;
		}
		return canUpdate;
  }
})

FeedMe.FeedEntries.authorizedEntries = function () {
	return this.find({
		feed_id: { $in: FeedMe.Feeds.authorizedFeedIds() },
		read: { $ne: true }
	}, { sort: { date: -1 } });
};

FeedMe.FeedEntries.mostRecentEntry = function () {
	return this.findOne({
		feed_id: { $in: FeedMe.Feeds.authorizedFeedIds() },
		read: { $ne: true }
	}, { sort: { date: -1 } });
};

FeedMe.FeedEntries.entryCount = function () {
	return this.authorizedEntries().count();
};

FeedMe.FeedEntries.markAllRead = function () {
	this.update({
		feed_id: { $in: FeedMe.Feeds.authorizedFeedIds() }
	}, { $set: { read: true } }, { multi: true });
};

FeedMe.FeedEntries.removeEntriesForFeed = function (feedId) {
  this.remove({ feed_id: feedId });
};
