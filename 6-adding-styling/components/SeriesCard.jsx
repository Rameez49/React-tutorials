import React from "react";

export default function SeriesCard({ value }) {
  {
    const { id, name, img_url, rating, description, genre, cast, watch_url } =
      value;
    return (
      <li className="card" id={id}>
        <div>
          <img src={img_url} alt="Image Load" width="40%" height="40%" />
        </div>  
        <div className="card-content">
        <h2>Name: {name}</h2>
        <h3>Rating: <span className={`rating ${rating>8.5 ? "super_hit" : "average"}`}>{rating}</span></h3>
        <p>Summary: {description}</p>
        <p>Genre:{genre.join(", ")}</p>
        <p>
          Cast: {cast.join(", ")}
        </p>
        <a href={watch_url} target="_blank">
          <button>Watch Now</button>
        </a>
        </div>
      </li>
    );
  }
}
