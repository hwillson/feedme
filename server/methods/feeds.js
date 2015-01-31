Meteor.methods({

  refreshFeeds: function () {
    // TODO - get custom stopReading working in danielqiu:feed fork and
    // enable when ready
    // Feed.stopReading();
    Feed.read();
  }

});
