import Route from '@ember/routing/route';

var settingsJson = [{"General":{"type":"trial","submenus":[{"title":"Territories","url":"","route":"","data":""}]}}];
export default class Settings extends Route {
	model=function() {
		return {
			settings: settingsJson
		};
	}
}