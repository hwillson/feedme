Template.editFeed.helpers({

  selectedFeed: function () {
    return FeedMe.Feeds.findOne(Session.get('selectedFeedId'));
  }

});

Template.editFeed.events({

	'click .js-clear-feed': function (e) {
		Session.set('selectedFeedId', undefined);
	}

});

AutoForm.hooks({
  feedForm: {

    before: {
      insert: function(doc, template) {
        doc.user_id = Meteor.userId();
        return doc;
      }
    },

    onSuccess: function (operation, result, template) {
      Meteor.call('refreshFeeds');
    }

  }
});
