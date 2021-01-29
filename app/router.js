import EmberRouter from '@ember/routing/router';
import config from 'FSM-prototype/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  // this.route('tab', {path:"tab/:tab_id"});
  this.route('tab', {path:"tab/:tab_id"}, function() {
    this.route('index', {path:"/"});
    this.route('detail', {path:"/:record_id"});
  });
  this.route('all-settings');
  this.route('setting', {path:"settings/:settings_path"});
  this.route('settings', {path:"settings/"}, function() {
    this.route('index', { path: '/' });
    // this.route('setting', { path: '/:settings_path' });
  })  
    this.route('create');
  this.route('edit');
});
