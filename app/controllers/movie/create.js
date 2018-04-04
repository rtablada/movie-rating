import Controller from '@ember/controller';
import $ from 'jquery';

export default Controller.extend({
  actions: {
    async saveReview(ev) {
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
  }
});
