import Logo from "../components/Logo.jsx";
import Button from "../components/Button.jsx";
import {useNavigate, useLocation} from "react-router-dom";
import ForecastContainer from "../components/ForecastContainer.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

function TripDetails() {
    const [ currentTemp, setCurrentTemp ] = useState(null);
    const [dailyForecast, setDailyForecast ] = useState(null);

    const navigation = useNavigate();
    const location = useLocation();
    const camping = location.state;

    const latitude = camping.lat;
    const longitude = camping.long;

    const checkIn = camping.checkIn.substring(0, camping.checkIn.indexOf('T'));
    const checkOut = camping.checkOut.substring(0, camping.checkOut.indexOf('T'));

    const handleClick = (e)=> {
        if(e.target.id === 'close') {
            navigation('/');

        } else if (e.target.id === 'edit') {
            navigation('/edit', {state: camping});
        }
    }

    useEffect(() => {

        axios.post('http://localhost:5001/', {
            'lat': latitude,
            'long': longitude

        })
            .then(res => {
                const data = res.data
                const { current, daily } = data;
                const { temperature_2m } = current;

                setCurrentTemp(temperature_2m);
                setDailyForecast(daily);

            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div
            className="max-w-2xl mx-auto bg-green-400 dark:bg-green-900 md:rounded-xl md:border-2 border-black p-3 md:px-20">
            <header className="p-5">
                <Logo/>
            </header>
            <main
                className="p-5 bg-green-500 dark:bg-green-700 tracking-wide rounded-xl border-2 border-black">
                <div className="flex justify-between items-center drop-shadow-light dark:drop-shadow-dark">
                    <h2 className="text-xl mb-3 text-green-950 dark:text-green-400">{camping.destination}</h2>
                    <span className="material-symbols-outlined md:cursor-pointer text-2xl" onClick={handleClick} id="close">
                        close
                    </span>
                </div>
                <section id="general-info" className="drop-shadow-light dark:drop-shadow-dark text-green-950 dark:text-green-100">
                    <p>Check-in: {checkIn}</p>
                    <p>Check-out: {checkOut}</p>
                    <a href={camping.website}>Website: {camping.website}</a>
                </section>
                <section id="forecast" className="p-2 mt-3 ">
                    {dailyForecast ? <ForecastContainer currentTemp={currentTemp} dailyForecast={dailyForecast}/> : ""}
                </section>
            </main>
            <div className="text-right mt-3">
                <Button label="Edit" onClick={handleClick} id="edit"/>
            </div>
        </div>

    )
}

export default TripDetails;