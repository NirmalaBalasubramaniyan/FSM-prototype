import Route from '@ember/routing/route';

var tabs = [
  {
    "title": "Customers",
    "submenu": [
      {
        "title": "Accounts",
        "url": "Accounts"
      },
      {
        "title": "Contacts",
        "url": "Contacts"
      }
    ]
  },
  {
    "title": "Assets",
    "url": "Assets"
  },
  {
    "title": "Prodcuts and Services",
    "submenu": [
      {
        "title": "Products",
        "url": "Products"
      }
    ]
  },
  {
    "title": "Work Order Management",
    "submenu": [
      {
        "title": "Requests",
        "url": "Requests"
      },
      {
        "title": "Estimates",
        "url": "Estimates"
      },
      {
        "title": "Work Order",
        "url": "Work Order"
      },
      {
        "title": "Dispatcher",
        "url": "Dispatcher"
      },
      {
        "title": "Calendar",
        "url": "Calendar"
      },
      {
        "title": "Maps",
        "url": "Maps"
      }
    ]
  },
  {
    "title": "Service Resource",
    "submenu": [
      {
        "title": "Filed Technicians",
        "url": "Filed Technicians"
      },
      {
        "title": "Time Off Requests",
        "url": "Time Off Requests"
      }
    ]
  },
  {
    "title": "Finance",
    "submenu": [
      {
        "title": "Invoice",
        "url": "Invoice"
      },
      {
        "title": "Payments",
        "url": "Payments"
      }
    ]
  }
] // No i18N
export default class ApplicationRoute extends Route {	
	model=function(argument) {
		return {tabs: tabs};
	}
}