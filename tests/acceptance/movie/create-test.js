import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | Movie | Create', function(hooks) {
  setupApplicationTest(hooks);

  test('can visit from movie index', async function(assert) {
    await visit('/movies');

    await click('[data-test-link="movie.create"]');

    assert.equal(currentURL(), '/movies/create');
  });
});
