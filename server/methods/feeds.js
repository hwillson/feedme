Meteor.methods({

  refreshFeeds: function() {
    Feed.read();
  }

});
