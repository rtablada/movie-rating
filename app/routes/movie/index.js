import Route from '@ember/routing/route';
import $ from 'jquery';

export default class extends Route {
  model() {
    return $.getJSON('/reviews');
  }
}
