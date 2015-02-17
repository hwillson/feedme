Template.layout.helpers({

	feedEntryCount: function () {
		return FeedMe.FeedEntries.entryCount();
	},

	showRemoveAllButton: function () {
		showRemoveAllButton = false;
		if (FeedMe.FeedEntries.entryCount() > 0) {
			showRemoveAllButton = true;
		}
		return showRemoveAllButton;
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
