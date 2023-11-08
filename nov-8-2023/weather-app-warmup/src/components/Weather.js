'use client'
import { useEffect, useState } from 'react';

async function getWeatherTemperature() {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m&hourly=temperature_2m&temperature_unit=fahrenheit'
    const response = await fetch(url);
    const data = await response.json();

    return data.current?.temperature_2m ?? '';
}

function getFormattedTime() {
    const now = Date.now();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      };

    return new Date(now).toLocaleDateString('en-US', options);
}

export default function Weather() {

    const [time, setTime] = useState('')
    const [temperature, setTemperature] = useState('');
    const handleOnClick = () => {
        (async () => {
            const newTime = getFormattedTime();
            const newTemperature = await getWeatherTemperature();
           
            setTime(newTime)
            setTemperature(newTemperature);
        })()

    }   
    useEffect(() => {
        setTime(getFormattedTime())
        getWeatherTemperature().then(data => {
            const newTemperature = data;

            setTemperature(newTemperature)
        })
    }, [])

    return (
        <section>
          <label>Time: </label><span>{time}</span>
          <br />
          <label>Temperature: </label><span>{temperature} degrees Farenheit</span>
          <br />
          <button onClick={handleOnClick}>Update Time And Temperature</button>
        </section>
    )
}