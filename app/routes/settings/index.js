import Route from '@ember/routing/route';

var settingsJson = [{"title":"General","type":"trial","submenus":[{"title":"Personal Settings","url":"Personal Settings"},{"title":"Company Details","url":"Company Details"}]},{"title":"Users and Control","type":"trial","submenus":[{"title":"Workforce","url":"Workforce"},{"title":"Users","url":"Users"},{"title":"Service Territories","url":"Service Territories"},{"title":"Security Control","url":"Security Control"}]},{"title":"Customization","type":"trial","submenus":[{"title":"Modules and Fields","url":"Modules and Fields"},{"title":"Layouts ","url":"Layouts"},{"title":"Module mapping","url":"Module mapping"},{"title":"Templates","url":"Templates"}]}]
export default class SettingsIndexRoute extends Route {
	model=function() {
		return {
			settings: settingsJson
		};
	}
}
