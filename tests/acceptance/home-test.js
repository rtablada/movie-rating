import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | Home Page', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /home', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/movies',
      'User should be redirected to movies when visiting the home page.');
  });
});
