FeedEntries = new Mongo.Collection('feed_entries');

FeedEntries.authorizedEntries = function () {
	return this.find({
		feed_id: { $in: Feeds.authorizedFeedIds() },
		read: { $ne: true }
	}, { sort: { date: -1 } });
};

FeedEntries.mostRecentEntry = function () {
	return this.findOne({
		feed_id: { $in: Feeds.authorizedFeedIds() },
		read: { $ne: true }
	}, { sort: { date: -1 } });
};

FeedEntries.entryCount = function () {
	return this.authorizedEntries().count();
};

FeedEntries.markAllRead = function () {
	this.update({
		feed_id: { $in: Feeds.authorizedFeedIds() }
	}, { $set: { read: true } }, { multi: true });
};

FeedEntries.removeEntriesForFeed = function (feedId) {
  this.remove({ feed_id: feedId });
};
