import React from 'react'
import worldIcon from '../assets/world-icon.svg'

export default function Header() {
    return (
        <>
            <div className='header'>
                <img className="header--icon" src={worldIcon}/>
                <h3>my travel journal.</h3>
            </div>
        </>
    )
}