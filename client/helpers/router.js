Router.configure({
	layoutTemplate: 'layout',
});

Router.onBeforeAction(function () {
  if (!Meteor.userId()) {
    this.render('welcome');
  } else {
    this.next();
  }
});

// Show all feed entries by default.
Router.route('/', {

	subscriptions: function () {
		this.subscribe('feeds');
		this.subscribe('feedEntries');
	},

	action: function () {
		this.render('feedEntries');
	}

});
