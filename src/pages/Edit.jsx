import Logo from "../components/Logo.jsx";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect} from "react";
import Button from "../components/Button.jsx";

function Edit() {
    const navigation = useNavigate();
    const location = useLocation();
    const camping = location.state;
    const checkIn = camping.checkIn.substring(0, camping.checkIn.indexOf('T'));
    const checkOut = camping.checkOut.substring(0, camping.checkOut.indexOf('T'));

    const [campingTrips, setCampingTrips] = useState([]);

    const [participants, setParticipants] = useState(camping.numParticipants);
    const [inDate, setInDate] = useState(checkIn);
    const [outDate, setOutDate] = useState(checkOut);
    const [site, setSite] = useState(camping.website);



    const handleClick = ()=> {
        navigation('/');
    }

    const home = () => {
        navigation('/');
    }

    const inputStyle = "bg-green-200 rounded-lg font-secondFont font-thin border-green-900 border-2 p-0.5 pl-2 dark:text-green-800";
    const inputNumStyle = inputStyle + " w-24";

    useEffect(()=>{
        const data = localStorage.getItem("campingTrips");

        if(data) {
            setCampingTrips(JSON.parse(data));
        }

    },[]);

    useEffect(()=>{
        localStorage.setItem("campingTrips", JSON.stringify(campingTrips));

    }, [campingTrips])

    const updateField = (e) => {
        if(e.target.id === "participants") {
            setParticipants(e.target.value);

        } else if (e.target.id === "checkIn") {
            setInDate(e.target.value);

        } else if (e.target.id === "checkOut") {
            setOutDate(e.target.value);

        } else if (e.target.id === "website") {
            setSite(e.target.value);

        }
    }

    const updateTrip = () => {
        const updatedTrips = campingTrips.map((trip) =>{
            if(trip.id === camping.id) {
                return { ...trip,
                        numParticipants: participants,
                        checkIn: inDate,
                        checkOut: outDate,
                        website: site,
                }
            }
            return trip;
        })
        setCampingTrips(updatedTrips);
        // navigation('/', {state: updatedTrips});
    }

    return (
        <div className="max-w-2xl mx-auto bg-green-400 dark:bg-green-900 md:rounded-xl md:border-2 border-black p-3 md:px-20">
            <header className="p-5">
                <Logo/>
            </header>
            <main className="p-5 bg-green-500 dark:bg-green-700 text-green-950 dark:text-green-100 tracking-wide rounded-xl border-2 border-black">
                <div className="flex justify-between items-center drop-shadow-light dark:drop-shadow-dark">
                    <h2 className="text-xl">Edit Camping Trip</h2>
                    <span className="material-symbols-outlined md:cursor-pointer text-2xl" onClick={handleClick}>
                        close
                    </span>
                </div>
                <div className="flex flex-col gap-1 mt-8 drop-shadow-light dark:drop-shadow-dark">
                    <h3 className="mb-2.5">{camping.destination}</h3>

                    <label htmlFor="participants">n. participants</label>
                    <input name="participants" type="number" className={inputNumStyle} id="participants" value={participants} onChange={updateField}/>

                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <label htmlFor="checkIn">Check-in</label>
                            <input name="checkIn" type="date" className={inputStyle} id="checkIn" value={inDate} onChange={updateField}/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="checkOut">Check-out</label>
                            <input name="checkOut" type="date" className={inputStyle} id="checkOut" value={outDate} onChange={updateField}/>
                        </div>
                    </div>

                    <label htmlFor="website">Website:</label>
                    <input id="website" name="website" type="text" className={inputStyle} value={site} onChange={updateField}/>

                    <Button label={'Update'} onClick={updateTrip} id="update"  />
                </div>
            </main>
        </div>
    );
}

export default Edit;