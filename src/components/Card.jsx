import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Card(props) {
  return (
    <div className='card'>
        <img src={props.trip.imageUrl}/>
        <div className='card-textcontent'>
            <div className='card-textcontent-location'>
                <FontAwesomeIcon icon={faLocationDot} className="card-textcontent-location-icon" />
                <h4 className='country-text'>{props.trip.location.toUpperCase()}</h4>
                <a href={props.trip.googleMapsUrl} className='google-maps'>View on Google Maps</a>
            </div>
            <h1  className='card-textcontent-title'>{props.trip.title}</h1>
            <p className='card-textcontent-dates'><strong>{props.trip.startDate + " - " + props.trip.endDate}</strong></p>
            <p className='card-textcontent-desc'>{props.trip.description}</p>
        </div>
    </div>
  )
}
