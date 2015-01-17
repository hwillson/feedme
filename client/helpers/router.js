Router.configure({
	layoutTemplate: 'layout',
});

// Show all feed entries by default.
Router.route('/', function () {
  this.render('feedEntries');
});
