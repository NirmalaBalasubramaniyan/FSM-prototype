import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | tab/index/create', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:tab/index/create');
    assert.ok(route);
  });
});
