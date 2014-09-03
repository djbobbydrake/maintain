Resume.Router.map(function() {
  this.route('jobs', { path: '/work-experience'});
  this.route('interests');
});

Resume.JobsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('job');
  }
});

Resume.InterestsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('interest');
  }
});
