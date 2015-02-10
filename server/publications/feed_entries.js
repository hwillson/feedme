Meteor.publish('feedEntries', function () {
  return FeedEntries.find({});
});
