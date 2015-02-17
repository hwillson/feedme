Meteor.startup(function () {

	// Initialize the "danielqiu:feed" package with our collections
	Feed.collections({
		feeds: FeedMe.Feeds,
  	feed_entries: FeedMe.FeedEntries
	});

	// // If no feeds exist seed the feed list
	// if (Feeds.find().count() === 0) {
	//
	// 	Feed.createRssFeed({
	// 	  _id: '1',
	// 		name: 'Daring Fireball',
	// 	  category: 'Tech News',
	// 	  link: 'http://daringfireball.net/feeds/main',
	// 		type: 'Atom',
	// 	  refresh_interval: 600000  // 10 minutes
	// 	});
	//
	// 	Feed.createRssFeed({
	// 	  _id: '2',
	// 		name: 'Six Colors',
	// 	  category: 'Tech News',
	// 	  link: 'http://feedpress.me/sixcolors?type=xml',
	// 	  refresh_interval: 600000
	// 	});
	//
	// 	Feed.createRssFeed({
	// 	  _id: '3',
	// 		name: 'Marco',
	// 	  category: 'Tech News',
	// 	  link: 'http://www.marco.org/rss',
	// 	  refresh_interval: 600000
	// 	});
	//
	// 	Feed.createRssFeed({
	// 	  _id: '4',
	// 		name: 'Recode',
	// 	  category: 'Tech News',
	// 	  link: 'http://recode.net/feed/',
	// 	  refresh_interval: 600000
	// 	});
	//
	// 	Feed.createRssFeed({
	// 	  _id: '5',
	// 		name: 'The Verge',
	// 	  category: 'Tech News',
	// 	  link: 'http://www.theverge.com/rss/frontpage',
	// 	  refresh_interval: 600000
	// 	});
	//
	// 	Feed.createRssFeed({
	// 	  _id: '6',
	// 		name: 'MacStories',
	// 	  category: 'Tech News',
	// 	  link: 'http://www.macstories.net/feed/',
	// 	  refresh_interval: 600000
	// 	});
	//
	// 	Feed.createRssFeed({
	// 	  _id: '7',
	// 		name: 'Ars Technica',
	// 	  category: 'Tech News',
	// 	  link: 'http://feeds.arstechnica.com/arstechnica/index?format=xml',
	// 	  refresh_interval: 600000
	// 	});
	//
	// }

	// Update all feeds and entries, starting the re-occuring refresh
	//Feed.read();
	Meteor.call('refreshFeeds');

});
