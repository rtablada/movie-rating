import { visit, currentURL, click, fillIn } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { faker } from 'ember-cli-mirage';
import { module, test } from 'qunit';
import moment from 'moment';

import { startMirage } from 'movie-rating/initializers/ember-cli-mirage';

module('Acceptance | Movie | Create', function(hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(() => {
    startMirage();
  });

  test('can visit from movie index', async function(assert) {
    await visit('/movies');

    await click('[data-test-link="movie.create"]');

    assert.equal(currentURL(), '/movies/create');
  });

  test('can submit the form', async function(assert) {
    var attrs = {
      title: faker.commerce.product(),
      releaseDate: moment(faker.date.past(10)).format('YYYY-MM-DD'),
      rating: faker.random.number({ min: 1, max: 10})
    };

    await visit('/movies/create');

    await fillIn('input[name="title"]', attrs.title);
    await fillIn('input[name="release-date"]', attrs.releaseDate);
    await fillIn('input[name="rating"]', attrs.rating);

    await click('[data-test-submit]');

    assert.equal(currentURL(), '/movies',
      'Redirect after submitting');

    assert.equal(server.db.reviews.length, 1,
      'There should be a review saved to the API');

    assert.dom('[data-test-review="1"]').exists();

    assert.dom('[data-test-review="1"] [data-test-title]').exists();
    assert.dom('[data-test-review="1"] [data-test-title]').hasText(attrs.title);

    assert.dom('[data-test-review="1"] [data-test-rating]').exists();
    assert.dom('[data-test-review="1"] [data-test-rating]').hasText(`${attrs.rating}`);
  });
});
