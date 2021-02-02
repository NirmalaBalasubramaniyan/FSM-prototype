import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from "@glimmer/tracking";

export default class HeaderTabComponent extends Component {
	@tracked subMenuVisible = false;
  	@action
  	showSubMenu(parentMethod) {
    	this.subMenuVisible = true;
    	parentMethod(this.subMenuVisible);
	}

	@action
	hideSubMenu(parentMethod) {
	 	this.subMenuVisible = false;
	 	parentMethod(this.subMenuVisible);
	}

}