import { Factory, faker } from 'ember-cli-mirage';
import moment from 'moment';

export default Factory.extend({
  title: () => faker.commerce.product(),
  releaseDate: () => moment(faker.date.past(10)).format(),
  rating: () => faker.random.number({ min: 1, max: 10}),
});
