import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { tracked } from "@glimmer/tracking";

var data = {"Contacts":[{"Name":"Shivaram","mail":"shivara@gmail.com","phone":"912873","status":"Accepted","lead":"Zoho","Age":"20"},{"Name":"Kugan","mail":"kugan@gmail.com","phone":"912873","status":"Accepted","lead":"Zoho","Age":"21"},{"Name":"Krishanth","mail":"krishanth@gmail.com","phone":"912873","status":"Accepted","lead":"Zoho","Age":"22"}],"Accounts":[{"Name":"Shivaram_Account","mail":"shivara@gmail.com","phone":"912873","status":"Accepted","lead":"Zoho","Age":"20"},{"Name":"Kugan_Account","mail":"kugan@gmail.com","phone":"912873","status":"Accepted","lead":"Zoho","Age":"20"},{"Name":"Krishanth_Account","mail":"krishanth@gmail.com","phone":"912873","status":"Accepted","lead":"Zoho","Age":"20"}],"Products":[{"Name":"Shivaram_Product","mail":"shivara@gmail.com","phone":"912873","status":"Accepted","lead":"Zoho","Age":"20"},{"Name":"Kugan_Account","mail":"kugan@gmail.com","phone":"912873","status":"Accepted","lead":"Zoho","Age":"20"},{"Name":"Krishanth_Account","mail":"krishanth@gmail.com","phone":"912873","status":"Accepted","lead":"Zoho","Age":"20"}]};   // No i18N

var columns = ['Name', 'mail', 'phone', 'status', 'lead', 'Age'];  // No i18N

export default class TabIndexRoute extends Route {
	model=function() {
		var moduleName = 'Contacts';
		var passedInThing = this.paramsFor('tab');
		if(passedInThing != undefined && passedInThing.tab_id != undefined && data[passedInThing.tab_id] != undefined)
			moduleName = passedInThing.tab_id;
		return {
			records: data[moduleName],
			columns: columns
		};
	}
}


