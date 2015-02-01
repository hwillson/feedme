Meteor.methods({

  refreshFeeds: function () {
    Feed.stopReading();
    Feed.read();
  }

});
