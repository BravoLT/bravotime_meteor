//You want the different routes in your website to have titles and meta tags for search engines & users.
//To create titles and meta tags that are set at server startup view the /server/config/seo.js file.
//In case no route specific titles & meta tags are set this default will be used.

Meteor.startup(function () {
  SEO.config({
    title: 'Bravo Time',
    meta: {
      'description': 'A time tracking meteor app for Bravo LT.'
    }
  });
});
