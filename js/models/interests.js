Resume.Interest = DS.Model.extend({
  activity: DS.attr(),
  description: DS.attr()
});

Resume.Interest.FIXTURES = [
  {
    id: 1,
    activity: 'Triathlon',
    description: "Training for Ironman Lake Tahoe 2014"
  },
  {
    id: 2,
    activity: "DJ'ing",
    description: "<a href=\"http://www.djbobbydrake.com\" target=\"_blank\">www.djbobbydrake.com</a>"
  },
  {
    id: 3,
    activity: 'Poetry/writing',
    description: "<a href=\"http://medium.com/@djbobbydrake\" target=\"_blank\">medium.com/@djbobbydrake</a>"
  }
];
