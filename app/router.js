import EmberRouter from '@ember/routing/router';
import config from 'fsm/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('tab', {path:"tab/"});
  this.route('tab', {path:"tab/:tab_id"});
});
