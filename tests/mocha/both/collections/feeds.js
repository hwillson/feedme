if (!(typeof MochaWeb === 'undefined')) {

  MochaWeb.testOnly(function () {

    describe('Collections', function () {

      describe('Feeds', function () {

        it('Feeds collection should be created', function () {
          chai.expect(Feeds).to.not.equal(undefined);
          chai.expect(Feeds instanceof Mongo.Collection).to.equal(true);
        });

      });

    });

  });

}
