Template.feed.events({

	'click .js-edit-feed': function (e) {
		Session.set('feedId', this._id);
	}

});
