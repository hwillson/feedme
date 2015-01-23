Template.feed.events({

	'click .js-edit-feed': function (e) {
		Session.set('selectedFeedId', this._id);
	}

});
