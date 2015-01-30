Meteor.methods({

  removeAllFeedEntries: function () {
    return FeedEntries.remove({});
  },

  removeFeedEntriesForFeed: function (feedId) {
    FeedEntries.remove({ feed_id: feedId });
  }

});
