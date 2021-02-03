import Route from '@ember/routing/route';

export default class DetailMainRoute extends Route {
	model=function(json) {
		console.log(json);
	}
}
