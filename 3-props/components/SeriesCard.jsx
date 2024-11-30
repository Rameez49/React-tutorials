import React from 'react'

export default function SeriesCard(props) {
    {
        return(
          <div key={props.key}>
          <div>
            <img src={props.value.img_url}
            alt='Image Load'
            width="40%"
            height="40%"
            />
          </div>
          <h1>Name: {props.value.name}</h1>
          <p><b>Rating:</b> {props.value.rating}</p>
          <p><b>Summary: </b>{props.value.description}</p>
          <p><b>Genre: </b>{props.value.genre}</p>
          <p><b>Cast: </b>{props.value.cast}</p>
          <a href={props.value.watch_url} target='_blank'>
            <button>Watch Now</button>
          </a>
          </div>
        )
      
        }
}
