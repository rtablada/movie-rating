import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

import { startMirage } from 'movie-rating/initializers/ember-cli-mirage';

module('Acceptance | Home Page', function(hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(() => {
    startMirage();
  });

  test('can visit "Movie Index" from navbar', async function(assert) {
    await visit('/movies');

    await click('[data-test-nav="movie-index"]');

    assert.equal(currentURL(), '/movies');
  });
});
