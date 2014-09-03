Ember.Handlebars.helper('rawhtml', function(value, options) {
  return new Ember.Handlebars.SafeString(value);
});
