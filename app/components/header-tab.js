import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from "@glimmer/tracking";

export default class HeaderTabComponent extends Component {

	@tracked submenu = [];
	@tracked subMenuVisible = false;
	@tracked childActive = true;
  	@action
  	showSubMenu(tabHead, event) {
    	this.subMenuVisible = true;
		this.submenu = tabHead.submenu;
		var left = event.target.offsetLeft;
		document.getElementsByClassName('sub-menu-container')[0].style.display = 'block';
		document.getElementsByClassName('dialog-popup1')[0].style.left = left + "px";
	}

	@action
	hideSubMenu() {
		console.log(event);		
		setTimeout(function() {
			if(this.childActive != true)
	    		this.subMenuVisible = false;
	  	}, 100);
	}

	@action
	toggleSubMenu(isChildActive) {
		if(isChildActive)
			this.childActive = true;
		this.subMenuVisible = isChildActive;
	}
}