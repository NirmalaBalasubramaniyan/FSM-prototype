import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | tab/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:tab/index');
    assert.ok(route);
  });
});
