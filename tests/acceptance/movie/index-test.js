import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

import { startMirage } from 'movie-rating/initializers/ember-cli-mirage';

module('Acceptance | Movie | Index', function(hooks) {
  setupApplicationTest(hooks);

  // Setups Fake API Server
  hooks.beforeEach(() => {
    startMirage();
  });

  test('visiting the movie index requests data from "/reviews"', async function(assert) {
    server.get('/reviews', function({ reviews }) {
      assert.step('reviewRequest');

      return reviews.all();
    });

    await visit('/movies');

    assert.equal(currentURL(), '/movies');

    assert.verifySteps(['reviewRequest'],
      'Expected a GET request to "/reviews"');
  });

  test('vising the movie index shows a list of reviews from the API', async function(assert) {
    server.createList('review', 20);

    await visit('/movies');

    server.db.reviews.forEach((review) => {
      assert.dom(`[data-test-review="${review.id}"]`).exists();

      assert.dom(`[data-test-review="${review.id}"] [data-test-title]`).exists();
      assert.dom(`[data-test-review="${review.id}"] [data-test-title]`).hasText(review.title);

      assert.dom(`[data-test-review="${review.id}"] [data-test-rating]`).exists();
      assert.dom(`[data-test-review="${review.id}"] [data-test-rating]`).hasText(`${review.rating}`);
    });
  });
});
