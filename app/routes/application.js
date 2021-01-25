import Route from '@ember/routing/route';

var tabs = [{"title":"Customers","submenu":[{"title":"Accounts","url":"Accounts"},{"title":"Contacts","url":"Contacts"}]},{"title":"Assets","url":"assets","submenu":[]},{"title":"Prodcuts and Services","submenu":[{"title":"Products","url":"Products"}]}]; // No i18N
export default class ApplicationRoute extends Route {	
	model=function(argument) {
		return {tabs: tabs};
	}
}
