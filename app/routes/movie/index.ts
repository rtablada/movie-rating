import Route from '@ember/routing/route';
import $ from 'jquery';

import { MovieReviewJsonResource } from '../../interfaces/movie-review';

export default class extends Route {
  model() : Promise<MovieReviewJsonResource[]> {
    return $.getJSON('/reviews');
  }
}
