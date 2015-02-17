Template.feeds.helpers({

	feeds: function () {
		return FeedMe.Feeds.find({ user_id: Meteor.userId() });
	}

});
