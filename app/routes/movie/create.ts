import Route from '@ember/routing/route';
import MovieReview from '../../interfaces/movie-review';

export default class extends Route {
  model() : MovieReview {
    return {
      title: '',
      releaseDate: '',
      rating: ''
    };
  }
}
