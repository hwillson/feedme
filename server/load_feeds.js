var collections = {
	feeds: Feeds,
  feed_entries: FeedEntries
}

Feed.collections(collections);

var daringFireballFeed = {
  _id: 'Daring Fireball',
  category: 'Tech News',
  link: 'http://daringfireball.net/feeds/main',
  refresh_interval: 1000
};

Feed.createRssFeed(daringFireballFeed);

var sixColorsFeed = {
  _id: 'Six Colors',
  category: 'Tech News',
  link: 'http://feedpress.me/sixcolors?type=xml',
  refresh_interval: 1000
};

Feed.createRssFeed(sixColorsFeed);

Feed.read();