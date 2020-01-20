import React from 'react'


const Result  = props => {
    const { date, city, sunrise, sunset, temp, pressure, wind, err } = props.weather
    let content = null;

    if(!err && city){
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
        content = (
            <div>
                <h3>Searching results for <strong>{city}</strong></h3>
                <h4>Day and time: {date}</h4>
                <h4>Current weather: {temp}</h4>
                <h4>Sunrise: {sunriseTime}</h4>
                <h4>Sunset: {sunsetTime}</h4>
                <h4>Pressure: {pressure}</h4>
                <h4>Wind: {wind}</h4>
            </div>
        )
    }

    return (
        <div className="weatherResult">
        {err ? `Couldn't find ${city} in the database, try something different` : content}
        </div>
    )
}

export default Result