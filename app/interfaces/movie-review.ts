export default interface MovieReview {
  title: string;
  releaseDate: string;
  rating: string;
}

export interface MovieReviewJsonResource {
  id: string;
  type: string;
  attributes: MovieReview;
}
