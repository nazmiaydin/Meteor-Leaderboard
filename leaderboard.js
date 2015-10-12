PlayersList = new Mongo.Collection('players');

if (Meteor.isClient) {
    Template.leaderboard.helpers({
        'player': function() {
            return PlayersList.find()
        }
    });

}
if (Meteor.isServer) {

    Meteor.startup(function () {
    // code to run on server at startup
  });
}
