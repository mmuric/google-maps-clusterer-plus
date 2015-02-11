Package.describe({
  name: 'joshdellay:google-maps-cluster',
  version: '0.0.7',
  // Brief, one-line summary of the package.
  summary: 'A utility libarary for Google Maps marker clustering.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/JoshDellay/google-maps-cluster',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.0.3.1');
    api.use('dburles:google-maps');
    api.imply('dburles:google-maps');
    api.addFiles('lib/joshdellay:google-maps-cluster.js');
    api.export('MarkerClusterer', 'client');
});
