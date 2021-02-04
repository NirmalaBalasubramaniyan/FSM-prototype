import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { tracked } from "@glimmer/tracking";

var settingsJson = [{ "title": "General", "type": "trial", "submenus": [{ "title": "Personal Settings", "url": "Personal Settings" }, { "title": "Company Details", "url": "Company Details" }] }, { "title": "Users and Control", "type": "trial", "submenus": [{ "title": "Workforce", "url": "Workforce", "subtabs": [{ "title": "Users" }, { "title": "Service Resources" }] }, { "title": "Users", "url": "Users" }, { "title": "Service Territories", "url": "Service Territories" }, { "title": "Security Control", "url": "Security Control" }] }, { "title": "Customization", "type": "trial", "submenus": [{ "title": "Modules and Fields", "url": "Modules and Fields" }, { "title": "Layouts ", "url": "Layouts" }, { "title": "Module mapping", "url": "Module mapping" }, { "title": "Templates", "url": "Templates" }] }];
export default class SettingRoute extends Route {
  @tracked path = "index";
  model = function(json) {
    console.log('Inside setting.js');
    var { settings_path: path } = json;
    var currentTabDetail = {};
    var currentPageDetail = {};
    for (var i in settingsJson) {
      var value = settingsJson[i];
      if (value.submenus && value.submenus.length) {
        for (var j in value.submenus) {
          var v = value.submenus[j];
          if (v.url == path) {
            currentTabDetail = v;
            currentPageDetail = value;
          }
        }
      }
    }
    // debugger;

    if (path != undefined)
      this.path = path;

    // this.current_page_detail = currentPageDetail;
    // this.current_tab_detail = currentTabDetail;
    return {
      settings: settingsJson,
      path: this.path,
      current_page_detail: currentPageDetail,
      current_tab_detail: currentTabDetail
    };
  }

}
