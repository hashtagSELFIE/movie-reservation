class Movies {
  constructor(
    id,
    title,
    description,
    categories,
    length,
    rating,
    premiere_date,
    end_date,
    trailer,
    poster
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.categories = categories;
    this.length = length;
    this.rating = rating;
    this.premiere_date = premiere_date;
    this.end_date = end_date;
    this.trailer = trailer;
    this.poster = poster;
  }
}

export default Movies;
