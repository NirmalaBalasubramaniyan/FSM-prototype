import Route from '@ember/routing/route';

export default class TabDetailRoute extends Route {
	model=function(urlValues) {
		return urlValues;
	}
}
