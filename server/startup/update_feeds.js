Meteor.startup(function () {

	// Initialize the "danielqiu:feed" package with our collections
	Feed.collections({
		feeds: Feeds,
  	feed_entries: FeedEntries
	});

	// If no feeds exist seed the feed list
	if (Feeds.find().count() === 0) {

		Feed.createRssFeed({
		  _id: '1',
			name: 'Daring Fireball',
		  category: 'Tech News',
		  link: 'http://daringfireball.net/feeds/main',
		  refresh_interval: 1000  // 1 second
		});

		Feed.createRssFeed({
		  _id: '2',
			name: 'Six Colors',
		  category: 'Tech News',
		  link: 'http://feedpress.me/sixcolors?type=xml',
		  refresh_interval: 1000
		});

		Feed.createRssFeed({
		  _id: '3',
			name: 'Marco',
		  category: 'Tech News',
		  link: 'http://www.marco.org/rss',
		  refresh_interval: 1000
		});

		Feed.createRssFeed({
		  _id: '4',
			name: 'Recode',
		  category: 'Tech News',
		  link: 'http://recode.net/feed/',
		  refresh_interval: 1000
		});

		Feed.createRssFeed({
		  _id: '5',
			name: 'The Verge',
		  category: 'Tech News',
		  link: 'http://www.theverge.com/rss/frontpage',
		  refresh_interval: 1000
		});

	}

	// Update all feeds and entries, starting the re-occuring refresh
	//Feed.read();
	Meteor.call('refreshFeeds');

});
