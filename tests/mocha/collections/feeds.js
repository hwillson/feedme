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

						it('Feed type should be mandatory', function () {
							this.feed.type = null;
							Feeds.insert(this.feed, function (error, result) {
								chai.expect(error.message).to.equal('Feed Type is required');
							});
						});

						it('Feed user ID should be mandatory', function () {
							this.feed.user_id = null;
							Feeds.insert(this.feed, function (error, result) {
								chai.expect(error.message).to.equal('User ID is required');
							});
						});

					});

          describe('#authorizedFeedIds', function () {

            it('should return an empty array if not logged in', function () {
              var feedIds = Feeds.authorizedFeedIds();
              chai.expect(feedIds.length).to.equal(0);
            });

            it(
              'should return an empty array if logged in but not authorized for any feeds',
              function () {
                // var feedIds = Feeds.authorizedFeedIds();
                // chai.expect(feedIds.length).to.equal(0);
              }
            );

            it(
              'should return an array of feed IDs the current user has access to',
              function () {
                // var feedIds = Feeds.authorizedFeedIds();
                // chai.expect(feedIds.length).to.not.equal(0);
              }
            );


          });

				});

      });

    }

  });

}
