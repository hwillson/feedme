Template.editFeed.helpers({
  feed: function () {
    return Feeds.findOne(Session.get('feedId'));
  }
});
