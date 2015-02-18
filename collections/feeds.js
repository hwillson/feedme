FeedMe.Feeds = new Mongo.Collection('feeds');

FeedMe.feedSchema = new SimpleSchema({
  name: {
    type: String,
    label: 'Name'
  },
  category: {
    type: String,
    label: 'Category'
  },
  link: {
    type: String,
    label: 'Feed URL',
    regEx: SimpleSchema.RegEx.Url
  },
  refresh_interval: {
    type: Number,
    label: 'Refresh Interval',
    optional: true
  },
  type: {
    type: String,
    label: 'Feed Type',
    defaultValue: 'Rss'
  },
  user_id: {
    type: String,
    label: 'User ID'
  }
});

FeedMe.Feeds.attachSchema(FeedMe.feedSchema);

FeedMe.Feeds.allow({

  insert: function () {
    return true;
  },

  update: function (userId, doc, fields, modifier) {
    var canUpdate = false;
    var authorizedFeedIds = FeedMe.Feeds.authorizedFeedIds();
    if (authorizedFeedIds.indexOf(doc._id) > -1) {
      canUpdate = true;
    }
    return canUpdate;
  },

  remove: function (userId, doc) {
    var canRemove = false;
    var authorizedFeedIds = FeedMe.Feeds.authorizedFeedIds();
    if (authorizedFeedIds.indexOf(doc._id) > -1) {
      canRemove = true;
    }
    return canRemove;
  }

});

FeedMe.Feeds.authorizedFeedIds = function () {
  var feedIds = [];
  var feeds =
    this.find({ user_id: Meteor.userId() }, { fields: { _id: 1 }}).fetch();
  _.each(feeds, function (feed) {
    feedIds.push(_.values(feed)[0]);
  });
  return feedIds;
};
