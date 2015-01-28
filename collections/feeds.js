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
  }
}));
