import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | tab/detail/editpage', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:tab/detail/editpage');
    assert.ok(route);
  });
});
