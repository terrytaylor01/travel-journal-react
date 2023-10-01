import React from 'react'
import travelData from '../data.js'
import Card from './Card'

export default function CardList() {

    const tripData = travelData.map(trip => {
        return (
            <Card
            key={trip.key}
            trip={trip}
            />
        )
    })

  return (
    <div className='card-list'>
        {tripData}
    </div>
  )
}
