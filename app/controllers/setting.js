import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from "@glimmer/tracking";

export default class SettingController extends Controller {
  get getCurrentTabData() {
    var model = this.model;
    var currentTabDetail = model.current_tab_detail;
    if(model.current_tab_detail.subtabs && model.current_tab_detail.subtabs.length){
    	return model.current_tab_detail.subtabs[0];
    }else{
    	return model.current_tab_detail;
    }
  }
}
