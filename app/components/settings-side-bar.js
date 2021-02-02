import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SettingsSideBarComponent extends Component{

  @action
  toggleSubSettings(event, element) {
      var $ele = event.target;
      var closestMenu = $ele.closest('.stg-group').querySelector('.side-stg-submenus');
      var style = window.getComputedStyle(closestMenu);
      if(style.display == "none")
      	closestMenu.style.display='block';
      else
      	closestMenu.style.display='none';
    }

    @action
    adjustHeight(element) {
      var windowHgt = window.outerHeight;
      element.style.height = windowHgt + "px";
    }  
};