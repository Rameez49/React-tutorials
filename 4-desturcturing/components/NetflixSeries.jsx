import React from 'react'
import seriesData from '../src/api/seriesData.json'
import SeriesCard from './SeriesCard'
function NetflixSeries() {
  return (
    <>
    <div >
      {
        seriesData.map((value)=> <SeriesCard key={value.id} value={value}/>)
      }
     
    </div>
    </>
  )
}

export default NetflixSeries