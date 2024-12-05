import DailyForecastCard from "./DailyForecastCard.jsx";
import {useEffect, useState} from "react";
import { nanoid } from "nanoid";

function ForecastContainer({currentTemp, dailyForecast}) {
    const [days, setDays] = useState([]);

    useEffect(()=> {
        const daily = dailyForecast;
        console.log(daily);
        console.log(currentTemp);
        const { sunrise, sunset, temperature_2m_max, temperature_2m_min, time, weather_code } = daily;

        for(let i=0; i<time.length; i++) {
            const newDay = {
                id: nanoid(),
                date: time[i],
                sunrise: sunrise[i].substring(sunrise[i].indexOf('T')+1),
                sunset: sunset[i].substring(sunset[i].indexOf('T')+1),
                max_temp: temperature_2m_max[i],
                min_temp: temperature_2m_min[i],
                weather_code: weather_code[i],
            }

            setDays(prevDays => [...prevDays, newDay]);
        }

    }, [])

    return (
        <>
            <div className="flex justify-between p-1 items-center">
                <h3 className="text-2xl text-green-950 dark:text-green-300 drop-shadow-light dark:drop-shadow-dark">Forecast</h3>
                <span className="text-xl text-green-950 dark:text-green-300 drop-shadow-light dark:drop-shadow-dark">Current temp: {currentTemp.temp}°C</span>
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:gap-2">
                { days.map((day) => <DailyForecastCard info={day} key={day.id}/>)}
            </div>
        </>
    )
}


export default ForecastContainer;