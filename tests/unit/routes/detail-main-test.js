import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | detail-main', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:detail-main');
    assert.ok(route);
  });
});
