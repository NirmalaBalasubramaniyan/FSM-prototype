import Route from '@ember/routing/route';

var tabs = [
		{
			title: 'Customers',
			submenu: [{
				title: 'Accounts',
				url: 'accounts'
			},{
				title: 'Contacts',
				url: 'contacts'
			}]
		},{
			title: 'Assets',
			url: 'assets',
		}, {
			title: 'Prodcuts and Services',
			
		}, {
			title: 'Work Order Management',
			submenu: [{
				title: 'Requests',
				url: 'requests',
				dynamic: 'requests'
			},{
				title: 'Estimates',
				url: 'estimates',
				dynamic: 'estimates'
			},{
				title: 'Work Order',
				url: 'workorder',
				dynamic: 'workorder'
			},{
				title: 'Dispatcher',
				url: 'dispatcher',
				dynamic: 'dispatcher'
			},{
				title: 'Calendar',
				url: 'calendar',
				dynamic: 'calendar'
			},{
				title: 'Maps',
				url: 'maps',
				dynamic: 'maps'
			}]
		}
		, {
			title: 'Service Resource',
			submenu: [{
				title: 'Filed Technicians',
				url: 'filedtechnicians',
				dynamic: 'filedtechnicians'
			},{
				title: 'Time Off Requests',
				url: 'timeoffrequests',
				dynamic: 'timeoffrequests'
			}]
		}
		, {
			title: 'Finance',
			submenu: [{
				title: 'Invoice',
				url: 'invoice',
				dynamic: 'invoice'
			},{
				title: 'Payments',
				url: 'payments',
				dynamic: 'payments'
			}]
		}
		]; // No i18N
export default class ApplicationRoute extends Route {	
	model=function(argument) {
		return {tabs: tabs};
	}
}