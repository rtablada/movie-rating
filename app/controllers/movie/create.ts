import Controller from '@ember/controller';
import { action } from 'ember-decorators/object';

import $ from 'jquery';

export default class MovieCreateController extends Controller {
  @action
  async saveReview(this: MovieCreateController, ev: Event) {
    ev.preventDefault();

    await $.ajax({
      url: '/reviews',
      method: 'POST',
      data: JSON.stringify({
        data: {
          type: 'reviews',
          attributes: {
            title: this.model.title,
            rating: this.model.rating,
            'release-date': this.model.releaseDate,
          }
        }
      })
    });

    this.transitionToRoute('movie.index');
  }
};
