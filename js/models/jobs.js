Resume.Job = DS.Model.extend({
  date: DS.attr(),
  company: DS.attr(),
  role: DS.attr(),
  description: DS.attr()
});

Resume.Job.FIXTURES = [
  {
    id: 1,
    date: '2011-Present',
    company: 'The Economist Group',
    role: 'Senior Developer & Core Committer',
    description: "Served as lead developer on the <a href=\"http://www.economist.com?econmobile=1\" target=\"_blank\">mobile web project</a>: implemented device detection in Varnish, theme switching in Drupal, custom HTML5/jQuery gallery, implemented SASS + Compass and Grunt workflow, integrated Google Custom Search.<br/><br />Implemented a caching strategy utilizing Varnish and Edge Side Includes resulting in web server performance improvements of 30 - 50%; improved editorial workflow by eliminating wait times for updated content."
  },
  {
    id: 2,
    date: '2008-Present',
    company: 'The Hiphop Archive at Harvard',
    role: 'Web Consultant',
    description: "Currently redesigning <a href=\"http://www.hiphoparchive.org\" target=\"_blank\">HiphopArchive.org</a> using Zurb Foundation’s responsive front-end framework and Drupal 7; served as a resource on Hiphop knowledge."
  },
  {
    id: 3,
    date: '2009-Present',
    company: 'NY Tech Mixer',
    role: 'Co-founder',
    description: "Built a membership of 4100+ members via meetup.com, providing a space for individuals and start-ups to network and share ideas. Notable presenters include Twilio and Coffee Meets Bagel."
  },
  {
    id: 4,
    date: '2010-2011',
    company: 'Time Out',
    role: 'Online Developer',
    description: "Built, maintained, and optimized Drupal sites for Time Out New York, New York Kids, Boston, Chicago, and Chicago Kids."
  },
  {
    id: 5,
    date: '2005-2009',
    company: 'Forbes Magazine',
    role: 'Manager of Business Systems',
    description: "Led the integration of Forbes Print and Digital’s CRM application; managed a team of three business analysts and project managers that oversaw the company’s business applications (clients included internal Accounting, Editorial, and Sales teams); led two major publishing system upgrades."
  }
];
