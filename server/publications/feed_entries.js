Meteor.publish('feedEntries', function () {
  return FeedMe.FeedEntries.find({});
});
