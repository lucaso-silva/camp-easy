import Logo from '../components/Logo.jsx'
import Button from '../components/Button.jsx';
import TripInfoCard from "../components/TripInfoCard.jsx";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Home(props) {
    const navigate = useNavigate();
    const [campingTrips, setCampingTrips] = useState([]);

    const handleClick = () => {
        navigate('/form');
    }

    // const tripInfoCard = () => {
    //     campingTrips.map(trip => <TripInfoCard campingTrip={trip} key={trip.id} deleteTrip={deleteTrip}/>);
    // }

    // const emptyCard = () => {
    //     return (
    //         <div className="h-80 text-center py-10">
    //             <p>No trips to display</p>
    //         </div>
    //     );
    // }

    useEffect(() => {
        const dataTrips = JSON.parse(localStorage.getItem('campingTrips'));
        setCampingTrips(dataTrips);
        // console.log(dataTrips);
    }, []);

    const deleteTrip = (campingTrip) => {
        const updatedTrips = campingTrips.filter(trip => trip.id !== campingTrip.id);
        setCampingTrips(updatedTrips);
        localStorage.setItem("campingTrips", JSON.stringify(updatedTrips));
    }

    const filterTrips = (e) => {
        const allTrips = JSON.parse(localStorage.getItem("campingTrips"));

        const filteredTrips = allTrips.filter((trip)=>{
            if(trip.destination.toLowerCase().includes(e.target.value.toLowerCase())) {
                return trip;
            }
        })
        setCampingTrips(filteredTrips);
    }

    return(
        <div className="max-w-3xl mx-auto bg-green-400 dark:bg-green-900 md:rounded-xl md:border-2 border-black">
            <header className="flex justify-between items-center p-5">
                <Logo />
                <div className="hidden md:block">
                   <Button label={'New camping'} onClick={handleClick} id="new-camping" />
                </div>
                <div className="flex justify-around items-center gap-x-8">
                    <span className="material-symbols-outlined md:hidden text-3xl dark:text-green-300 drop-shadow-light dark:drop-shadow-dark" onClick={handleClick}>
                        camping
                    </span>
                    <input type="checkbox" id="theme" className="hidden" onChange={props.onChange}/>
                    <label htmlFor="theme" className="md:cursor-pointer">
                        <span className="material-symbols-outlined text-3xl dark:text-green-300 drop-shadow-light dark:drop-shadow-dark">
                            {props.dark ?  "light_mode" : "dark_mode"}
                        </span>
                    </label>
                </div>
            </header>
            <div className="bg-banner-img bg-cover h-80">

            </div>
            <main className="px-8 py-4 flex flex-col gap-3">
                <div className="flex justify-between">
                    <h2 className="text-2xl text-green-950 dark:text-green-400 drop-shadow-light dark:drop-shadow-dark">
                        Upcoming
                    </h2>
                    <input type="search" id="filter" onChange={filterTrips} className="hidden md:block bg-green-200 rounded-lg bg-search bg-no-repeat bg-left py-1 pl-7 font-secondFont font-thin border-green-950 border-2 w-3/5"/>
                    <span className="material-symbols-outlined text-3xl md:hidden dark:text-green-300 drop-shadow-light dark:drop-shadow-dark">
                        search
                    </span>
                </div>
                {/*{ campingTrips ? tripInfoCard() : "" }*/}
                {campingTrips.length != 0 ?
                    campingTrips.map(trip => <TripInfoCard campingTrip={trip} key={trip.id} deleteTrip={deleteTrip}/>) :
                    (
                        <div className="h-80 text-center py-10">
                            <p>You have no trips to display yet..</p>
                        </div>
                    )
                }
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default Home;