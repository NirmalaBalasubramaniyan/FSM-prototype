import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from "@glimmer/tracking";

export default class TabIndexController extends Controller {
	@tracked selectedView = 'list';
	@action 
	changeView(viewName) {
		this.selectedView = viewName;
	}
}
