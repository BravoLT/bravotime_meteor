//Meta tags and titles that are set at server startup. In case a route is not set here the default configuration from
// /client/config/defaultSeo.js is used.

Meteor.startup(function () {
  SeoCollection.upsert({route_name: 'home'}, {
    route_name: 'home',
    title: 'Bravo Time | Welcome',
    meta: {'description': 'Bravo Time is a project about tracking all the time..'}
  });
  SeoCollection.upsert({route_name: 'features'}, {
    route_name: 'features',
    title: 'Bravo Time | Features',
    meta: {'description': 'Look at all these amazing features Bravo Time has.'}
  });
  SeoCollection.upsert({route_name: 'about'}, {
    route_name: 'about',
    title: 'Bravo Time | About',
    meta: {'description': 'Read about how Bravo Time came to be.'}
  });
  SeoCollection.upsert({route_name: 'contact'}, {
    route_name: 'contact',
    title: 'Bravo Time | Contact',
    meta: {'description': 'Behold the plentiful ways to contact Bravo Time.'}
  });
  SeoCollection.upsert({route_name: 'profile'}, {
    route_name: 'profile',
    title: 'Bravo Time | Profile',
    meta: {'description': 'This is your Bravo Time profile page.'}
  });
  SeoCollection.upsert({route_name: 'logout'}, {
    route_name: 'logout',
    title: 'Bravo Time | Logout',
    meta: {'description': 'This is the Bravo Time logout page.'}
  });
  SeoCollection.upsert({route_name: 'login'}, {
    route_name: 'login',
    title: 'Bravo Time | Login & Register',
    meta: {'description': 'This is the Bravo Time login and register page.'}
  });
  SeoCollection.upsert({route_name: 'dashboard'}, {
    route_name: 'dashboard',
    title: 'Bravo Time | Dashboard',
    meta: {'description': 'This is the Bravo Time Dashboard.'}
  });
});

