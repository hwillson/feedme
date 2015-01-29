Template.layout.helpers({

	feedEntryCount: function () {
		return FeedEntries.find().count();
	}

});

Template.layout.events({

	'click .js-edit-feeds': function (e) {
		$('.fd-row').toggle();
	},

	'click .js-remove-all': function (e) {
		Meteor.call('removeAllFeedEntries')
	}

});
