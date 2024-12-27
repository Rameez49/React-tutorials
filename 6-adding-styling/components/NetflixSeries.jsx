import React from 'react'
import seriesData from '../src/api/seriesData.json'
import SeriesCard from './SeriesCard'
function NetflixSeries() {
  return (
    <>
    <ul className='grid grid-three--cols'>
      {
        seriesData.map((value)=> <SeriesCard key={value.id} value={value}/>)
      }
     
    </ul>
    </>
  )
}

export default NetflixSeries