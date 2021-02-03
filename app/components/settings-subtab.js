import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from "@glimmer/tracking";

export default class SettingsSubtabComponent extends Component {
  @tracked currentTab = "index";
  @action
  showCurrentTab(tabHead, event) {
    this.currentTab = tabHead;
  }


}
