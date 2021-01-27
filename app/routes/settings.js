import Route from '@ember/routing/route';
import { tracked } from "@glimmer/tracking";

var settingsJson = [{"General":{"type":"trial","submenus":[{"title":"Territories","url":"","route":"","data":""}]}}];
export default class SettingsRoute extends Route {
	@tracked path = "index";
	model=function(json) {
		var {settings_path: path} = json;
		if(path != undefined)
			this.path = path;
		return {
			settings: settingsJson,
			path: this.path
		};
	}
}
