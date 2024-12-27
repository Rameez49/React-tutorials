import React from "react";
import styled from "styled-components";

export default function SeriesCard({ value }) {
  {
    const { id, name, img_url, rating, description, genre, cast, watch_url } = value;
    const buttonComponent = styled.button`
        
          padding: 3px;
          border: 2px solid black;
          background-color: ${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
          color: red;
      `;  

      const paraWord = styled.p`
      color: white;
      background-color: black;
      
      `;

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
         <buttonComponent>Watch Now</buttonComponent>
        </a>
   
        <paraWord>Hello</paraWord>
        </div>
      </li>
    );
  }
}
