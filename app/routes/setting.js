import Route from '@ember/routing/route';
import { tracked } from "@glimmer/tracking";

var settingsJson = [{"title":"General","type":"trial","submenus":[{"title":"Personal Settings","url":"Personal Settings"},{"title":"Company Details","url":"Company Details"}]},{"title":"Users and Control","type":"trial","submenus":[{"title":"Workforce","url":"Workforce"},{"title":"Users","url":"Users"},{"title":"Service Territories","url":"Service Territories"},{"title":"Security Control","url":"Security Control"}]},{"title":"Customization","type":"trial","submenus":[{"title":"Modules and Fields","url":"Modules and Fields"},{"title":"Layouts ","url":"Layouts"},{"title":"Module mapping","url":"Module mapping"},{"title":"Templates","url":"Templates"}]}];
export default class SettingRoute extends Route {
	@tracked path = "index";
	model=function(json) {
		console.log('Inside setting.js');
		var {settings_path: path} = json;
		if (path != undefined)
			this.path = path;
		return {
			settings: settingsJson,
			path: this.path
		};
	}
}

