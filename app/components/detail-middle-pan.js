import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showLineitemTab() {
      this.toggleProperty('showNotes');
      this.toggleProperty('showLineitem');
      // alert("d");
    },
    showNotesTab() {
      this.toggleProperty('showNotes');
      this.toggleProperty('showLineitem');
      // alert("d");
    }
  }
});
