Meteor.methods({

  removeAllFeedEntries: function() {
    return FeedEntries.remove({});
  }

});
