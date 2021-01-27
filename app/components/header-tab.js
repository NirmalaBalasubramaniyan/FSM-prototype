import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from "@glimmer/tracking";

export default class HeaderTabComponent extends Component {

	@tracked submenu = [];
	@tracked subMenuVisible = false;
  	@action
  	showSubMenu(tabHead, event) {
    	// alert(`The tab name is `+ tabHead.submenu.length);
    	this.subMenuVisible = true;
		this.submenu = tabHead.submenu;
		var left = event.target.offsetLeft;
		document.getElementsByClassName('dialog-popup1')[0].style.display = 'block';
		document.getElementsByClassName('dialog-popup1')[0].style.left = left + "px";
	}

	@action
	hideSubMenu() {
		this.subMenuVisible = false;
	}
}