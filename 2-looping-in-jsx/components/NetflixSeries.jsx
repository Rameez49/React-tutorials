import React from 'react'
import seriesData from '../src/api/seriesData.json'
function NetflixSeries() {
  return (
    <>
    <div >
      {
        seriesData.map((value)=>{
          return(
            <div key={value.id}>
            <div>
              <img src={value.img_url}
              alt='Image Load'
              width="40%"
              height="40%"
              />
            </div>
            <h1>Name: {value.name}</h1>
            <p><b>Rating:</b> {value.rating}</p>
            <p><b>Summary: </b>{value.description}</p>
            <p><b>Genre: </b>{value.genre}</p>
            <p><b>Cast: </b>{value.cast}</p>
            <a href={value.watch_url} target='_blank'>
              <button>Watch Now</button>
            </a>
            </div>
          )
        })
      }
     
    </div>
    </>
  )
}

export default NetflixSeries