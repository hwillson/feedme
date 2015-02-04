Meteor.methods({

  removeAllFeedEntries: function () {
    FeedEntries.update({}, { $set: { read: true } }, { multi: true });
    // return FeedEntries.remove({});
  },

  removeFeedEntriesForFeed: function (feedId) {
    FeedEntries.remove({ feed_id: feedId });
  }

});
