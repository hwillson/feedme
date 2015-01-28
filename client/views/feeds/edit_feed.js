Template.editFeed.helpers({

  selectedFeed: function () {
    return Feeds.findOne(Session.get('selectedFeedId'));
  }

});

Template.editFeed.events({

	'click .js-clear-feed': function (e) {
		Session.set('selectedFeedId', undefined);
	}

});

AutoForm.hooks({
  feedForm: {
    onSuccess: function (operation, result, template) {
      Meteor.call('refreshFeeds');
    }
  }
});
