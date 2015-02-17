if (!(typeof MochaWeb === 'undefined')) {

  MochaWeb.testOnly(function () {

    describe('Collections', function () {

      describe('FeedEntries', function () {

        it('FeedsEntries collection should be created', function () {
          chai.expect(FeedMe.FeedEntries).to.not.equal(undefined);
          chai.expect(FeedMe.FeedEntries instanceof Mongo.Collection)
            .to.equal(true);
        });

      });

    });

  });

}
