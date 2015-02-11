Package.describe({
  name: 'joshdellay:google-maps-cluster',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: 'A utility libarary for Google Maps marker clustering.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.use('jquery', 'client');
  api.imply('jquery', 'client');
  api.addFiles('joshdellay:google-maps-cluster.js');
});
