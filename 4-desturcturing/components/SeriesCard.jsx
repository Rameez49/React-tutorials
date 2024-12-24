import React from "react";

export default function SeriesCard({ value }) {
  {
    const { id, name, img_url, rating, description, genre, cast, watch_url } =
      value;
    return (
      <div id={id}>
        <div>
          <img src={img_url} alt="Image Load" width="40%" height="40%" />
        </div>
        <h1>Name: {name}</h1>
        <p>
          <b>Rating:</b> {rating}
        </p>
        <p>
          <b>Summary: </b>
          {description}
        </p>
        <p>
          <b>Genre: </b>
          {genre}
        </p>
        <p>
          <b>Cast: </b>
          {cast}
        </p>
        <a href={watch_url} target="_blank">
          <button>Watch Now</button>
        </a>
      </div>
    );
  }
}
