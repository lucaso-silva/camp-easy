import axios from 'axios';
import DailyForecast from "./DailyForecast.jsx";
import {useEffect, useState} from "react";

function ForecastContainer(props) {
    const [ currentTemp, setCurrentTemp ] = useState(null);
    const [dailyForecast, setDailyForecast ] = useState(null);
    // console.log(props.lat, props.long);

    useEffect(() => {
        //NEED TO USE LAT AND LONG : PROPS
        const forecast = axios.get('http://localhost:5001/forecast').then((res) => {
            const data = res.data;
            const { current, daily } = data;
            const { temperature_2m } = current;

            // console.log(temperature_2m);
            // console.log(daily);
            setCurrentTemp(temperature_2m)
            setDailyForecast(daily);
        });
    }, []);

    return (
        <>
            <div className="flex justify-between p-1">
                <h3>Forecast</h3>
                <span>Current temp: {currentTemp}°C</span>
            </div>
            <div className="p-2 border-2 border-black rounded-xl">
                {/*{dailyForecast.map((day) => <DailyForecast day={day} />)}*/}
                {/*<DailyForecast dailyForecast={dailyForecast}/>*/}
            </div>
        </>
    )
}


export default ForecastContainer;