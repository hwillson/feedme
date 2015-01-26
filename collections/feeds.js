Feeds = new Meteor.Collection('feeds');
Feeds.attachSchema(new SimpleSchema({
  _id: {
    type: String,
    label: '_id',
    max: 100
  },
  name: {
    type: String,
    label: 'Name',
    max: 100
  },
  category: {
    type: String,
    label: 'Category'
  },
  link: {
    type: String,
    label: 'Feed URL',
    regEx: SimpleSchema.RegEx.Url
  }
}));
