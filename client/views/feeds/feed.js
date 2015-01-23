Template.feed.events({

	'click .js-edit-feed': function (e) {
		Session.set('selectedFeedId', this._id);
	},

	'click .js-delete-feed': function (e) {
    e.preventDefault();
    if (confirm('Are you sure you want to delete this feed?')) {
      Feeds.remove(this._id);
    }
  }

});
