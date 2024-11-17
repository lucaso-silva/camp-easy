import Logo from '../components/Logo.jsx'
import Button from "../components/Button.jsx";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { nanoid } from 'nanoid';

function Form() {
    const [campingTrips, setCampingTrip] = useState([]);

    const inputStyle = "bg-green-200 rounded-lg font-secondFont font-thin border-green-900 border-2 p-0.5 pl-2 dark:text-green-800";
    const inputNumStyle = inputStyle + " w-24";
    const navigation = useNavigate();

    useEffect(() => {
        const data = localStorage.getItem("campingTrips");

        if(data) {
            setCampingTrip(JSON.parse(data));
        }
    }, []);

    useEffect(()=>{
        localStorage.setItem("campingTrips", JSON.stringify(campingTrips));
    }, [campingTrips])

    const handleClick = ()=> {
        navigation(-1);
    }

    const addNewTrip = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        // console.log("first - formData");
        // console.log(formData);
        const newTrip =
            {
                id: nanoid(),
                destination: formData.get("destination"),
                numParticipants: formData.get("participants"),
                checkIn: formData.get("checkIn"),
                checkOut: formData.get("checkOut"),
                website: formData.get("website")
            };

        setCampingTrip([...campingTrips, newTrip]);
    }
    // console.log("second - state");
    console.log(campingTrips);

    return (
        <div className="max-w-2xl mx-auto bg-green-400 dark:bg-green-900 md:rounded-xl md:border-2 border-black p-3 md:px-20">
            <header className="p-5">
                <Logo/>
            </header>
            <main className="p-5 bg-green-500 dark:bg-green-700 text-green-950 dark:text-green-100 tracking-wide rounded-xl border-2 border-black">
                <div className="flex justify-between items-center drop-shadow-light dark:drop-shadow-dark">
                    <h2 className="text-xl">New Camping</h2>
                    <span className="material-symbols-outlined md:cursor-pointer text-2xl" onClick={handleClick}>
                        close
                    </span>
                </div>
                <form onSubmit={addNewTrip}
                      className="flex flex-col gap-1 mt-8 drop-shadow-light dark:drop-shadow-dark">
                    <label htmlFor="destination">Destination</label>
                    <input name="destination" type="text" className={inputStyle}/>

                    <label htmlFor="participants">n. participants</label>
                    <input name="participants" type="number" className={inputNumStyle}/>

                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <label htmlFor="checkIn">Check-in</label>
                            <input name="checkIn" type="date" className={inputStyle}/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="checkOut">Check-out</label>
                            <input name="checkOut" type="date" className={inputStyle}/>
                        </div>
                    </div>

                    <label htmlFor="website">Website:</label>
                    <input id="website" name="website" type="text" className={inputStyle}/>
                    <input type='submit' />
                    <div className="flex justify-center gap-20 mt-4">
                        {/*<Button label="Save" id="save"/>*/}
                        {/*<Button label="Reset" id="reset"/>*/}
                    </div>
                </form>
            </main>
            {/*<div className="flex justify-center gap-20 mt-4">*/}
            {/*    <Button label="Save" id="save"/>*/}
            {/*    <Button label="Reset" id="reset"/>*/}
            {/*</div>*/}
        </div>
    )
}

export default Form;