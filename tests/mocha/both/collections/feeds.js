if (!(typeof MochaWeb === 'undefined')) {

  MochaWeb.testOnly(function () {

		if (Meteor.isClient) {

	    describe('Collections', function () {

	      describe('Feeds', function () {

	        it('Feeds collection should be created', function () {
	          chai.expect(Feeds).to.not.equal(undefined);
	          chai.expect(Feeds instanceof Mongo.Collection).to.equal(true);
	        });

					describe('Schema', function () {

						beforeEach(function () {
							this.feed = {
								name: 'Test Name',
								category: 'Test Category',
								link: 'http://www.google.com',
								type: 'Feed Type',
								user_id: '123'
							};
						});

						it('Feed name should be mandatory', function () {
							this.feed.name = null;
							Feeds.insert(this.feed, function (error, result) {
								chai.expect(error.message).to.equal('Name is required');
							});
						});

						it('Feed category should be mandatory', function () {
							this.feed.category = null;
							Feeds.insert(this.feed, function (error, result) {
								chai.expect(error.message).to.equal('Category is required');
							});
						});

						it('Feed link should be mandatory', function () {
							this.feed.link = null;
							Feeds.insert(this.feed, function (error, result) {
								chai.expect(error.message).to.equal('Feed URL is required');
							});
						});

						it('Feed link should be a valid URL', function () {
							this.feed.link = 'asdfasdf';
							Feeds.insert(this.feed, function (error, result) {
								chai.expect(error.message)
									.to.equal('Feed URL must be a valid URL');
							});
						});

						it('Feed type is mandatory', function () {
							this.feed.type = null;
							Feeds.insert(this.feed, function (error, result) {
								chai.expect(error.message).to.equal('Feed Type is required');
							});
						});

						it('Feed user ID is mandatory', function () {
							this.feed.user_id = null;
							Feeds.insert(this.feed, function (error, result) {
								chai.expect(error.message).to.equal('User ID is required');
							});
						});

					});

				});

      });

    }

  });

}
