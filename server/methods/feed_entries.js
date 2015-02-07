Meteor.methods({

  removeAllFeedEntries: function () {
    FeedEntries.markAllRead();
  },

  removeFeedEntriesForFeed: function (feedId) {
    FeedEntries.removeEntriesForFeed
  }

});
