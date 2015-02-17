Meteor.methods({

  removeAllFeedEntries: function () {
    FeedMe.FeedEntries.markAllRead();
  },

  removeFeedEntriesForFeed: function (feedId) {
    FeedMe.FeedEntries.removeEntriesForFeed
  }

});
