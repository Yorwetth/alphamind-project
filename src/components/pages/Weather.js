import React from 'react'


export default function Weather() {
    return (
        <div className="weather-container">
            <div className="weather-icon">
                {/* <img src={unknown} alt="1"/> */}
            </div>
            <div className="temperature-value">
                <p>- °C</p>
            </div>
            <div className="location">
                <p></p>
            </div>
            <div className="notification">
                {/* <img src={unknown} alt="1"/> */}
            </div>
        </div>
    )
}
