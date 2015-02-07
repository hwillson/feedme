Feeds = new Mongo.Collection('feeds');

Feeds.attachSchema(new SimpleSchema({
  // _id: {
  //   type: String,
  //   label: '_id'
  // },
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
    type: String
  }
}));

Feeds.authorizedFeedIds = function () {
  var feedIds = [];
  var feeds =
    this.find({ user_id: Meteor.userId() }, { fields: { _id: 1 }}).fetch();
  _.each(feeds, function (feed) {
    feedIds.push(_.values(feed)[0]);
  });
  return feedIds;
};
