Template.feeds.helpers({

	feeds: function () {
		return Feeds.find({ user_id: Meteor.userId() });
	}

});
