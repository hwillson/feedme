if (NewsItems.find().count() === 0) {

  NewsItems.insert({
    title: 'News Item Title 1',
    content: 'News item 1 content.',
		url: 'http://newsitem1.com'
  });

	NewsItems.insert({
    title: 'News Item Title 2',
    content: 'News item 2 content.',
		url: 'http://newsitem2.com'
  });

	NewsItems.insert({
    title: 'News Item Title 3',
    content: 'News item 3 content.',
		url: 'http://newsitem3.com'
  });

}
