import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from "@glimmer/tracking";

export default class DetailMiddlePanComponent extends Component {
	@tracked currentTab = "lineitem";
  	@action
  	showMiddleTab(tabHead, event) {
    	this.currentTab = tabHead;
	
	}
}