Meteor.publish('feeds', function () {
  return FeedMe.Feeds.find({});
});
