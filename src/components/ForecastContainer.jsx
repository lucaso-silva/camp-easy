import DailyForecastCard from "./DailyForecastCard.jsx";
import {useEffect, useState} from "react";

function ForecastContainer(props) {
    const [days, setDays] = useState([]);

    useEffect(()=> {
        const dailyForecast = props.dailyForecast;
        const { sunrise, sunset, temperature_2m_max, temperature_2m_min, time } = dailyForecast;

        for(let i=0; i<time.length; i++) {
            const newDay = {
                date: time[i],
                sunrise: sunrise[i].substring(sunrise[i].indexOf('T')+1),
                sunset: sunset[i].substring(sunset[i].indexOf('T')+1),
                max_temp: temperature_2m_max[i],
                min_temp: temperature_2m_min[i]
            }

            setDays(prevDays => [...prevDays, newDay]);
        }

    }, [])

    return (
        <>
            <div className="flex justify-between p-1 items-center">
                <h3 className="text-2xl text-green-950 dark:text-green-300 drop-shadow-light dark:drop-shadow-dark">Forecast</h3>
                <span className="text-xl text-green-950 dark:text-green-300 drop-shadow-light dark:drop-shadow-dark">Current temp: {props.currentTemp}°C</span>
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:gap-2">
                { days.map((day) => <DailyForecastCard info={day} />)}
            </div>
        </>
    )
}


export default ForecastContainer;