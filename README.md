# Movie Rating Application

This application is used as a demonstration for basic Ember Acceptance Testing techniques for the [Franklin Developer Meetup](https://www.meetup.com/franklin-developer-lunch/events/249232086) and the SV Ember Meetup.

## New Ember Features Used


### 3.1+

* `@arg` Glimmer Named Component Arguments
  * [Invocation](app/templates/movie/index.hbs)
  * [Component Use](app/templates/components/movie-list-item.hbs)
* Glimmer Template Only Components
  * [Component](app/templates/components/movie-list-item.hbs)
* New Testing APIs
  * [Home Test](tests/acceptance/home-test.js)
  * [Movie Index Test](tests/acceptance/movie/index-test.js)
  * [Movie Create Test](tests/acceptance/movie/create-test.js)
* Template Only Component
  * [`movie-list-item` Invocation](app/templates/movie/index.hbs)
  * [Component Use](app/templates/components/movie-list-item.hbs)

### ES6 Classes

* Typescript
  * [Movie Create Controller](app/controllers/movie/create.ts)
  * [Top Nav Component](app/components/top-nav.ts)
  * [Movie Create Route](app/routes/movie/create.ts)
  * [Movie Index Route](app/routes/movie/index.ts)
