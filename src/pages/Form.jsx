import Logo from '../components/Logo.jsx'
import Button from "../components/Button.jsx";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { nanoid } from 'nanoid';
import PlaceAutoComplete from "../components/PlaceAutoComplete";
import { APIProvider, useMapsLibrary } from "@vis.gl/react-google-maps";

function Form() {
    const [campingTrips, setCampingTrip] = useState([]);
    const [placeAutocomplete, setPlaceAutocomplete] = useState(null);
    const places = useMapsLibrary("places");

    const inputStyle = "bg-green-200 rounded-lg font-secondFont font-thin border-green-900 border-2 p-0.5 pl-2 dark:text-green-800";
    const inputNumStyle = inputStyle + " w-24";
    const errorMsg = "text-red-600 mb-1";

    // const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
    // const GOOGLE_API_KEY = process.env.VITE_GOOGLE_API_KEY;
    const GOOGLE_API_KEY = 'xxxxxxx';

// https://react-hook-form.com/faqs#Howtosharerefusage

    const navigation = useNavigate();
    const { register,
        handleSubmit,
        control,
        watch,
        formState: { errors },

    } = useForm({
        defaultValues: {
            destination: "",
            numParticipants: 1,
            website: "",
        }
    });

    const destinationRef = useRef(null);
    // const { ref, ...rest } = register("destination");
    // useImperativeHandle(ref, () => destinationRef.current);

    const Controller = ({ control, register, name, ref, rules, render }) => {
        return render();
    };

    useEffect(() => {
        const data = localStorage.getItem("campingTrips");

        if(data) {
            setCampingTrip(JSON.parse(data));
        }
    }, []);

    useEffect(()=>{
        localStorage.setItem("campingTrips", JSON.stringify(campingTrips));

    }, [campingTrips]);
    useEffect(() => {
        if(!places || !destinationRef.current) return;

        const options = {
            fields: ["geometry", "name", "formatted_address"],
        };

        setPlaceAutocomplete(new places.Autocomplete(destinationRef.current, options));
    }, [places]);

    useEffect(() => {
        if(!placeAutocomplete) return;

        placeAutocomplete.addListener("place_changed", () => {
            console.log(placeAutocomplete.getPlace());
        })
    }, [placeAutocomplete]);

    const handleClick = ()=> {
        navigation('/');
    }

    console.log(errors);

    // const [checkInDate, checkOutDate] = watch(["checkIn", "checkOut"]);

    // const validateCheckIn = (value) => {
    //     // campingTrips.forEach((trip)=>{
    //     //     console.log(value, trip.checkIn);
    //     //     if(value === trip.checkIn) {
    //     //         console.log(trip.destination)
    //     //         return false;
    //     //     }
    //     // })
    //     // return true;
    //     const sameDate = campingTrips.some((trip) => trip.checkIn === value);
    //     return !sameDate;
    // }

    const addNewTrip = (data) => {
        // e.preventDefault();
        // const form = e.target;
        // const formData = new FormData(form);
        // // console.log("first - formData");
        // // console.log(formData);
        // const newTrip =
        //     {
        //         id: nanoid(),
        //         destination: formData.get("destination"),
        //         numParticipants: formData.get("participants"),
        //         checkIn: formData.get("checkIn"),
        //         lat: 49.0502783,
        //         long: -121.9883143,
        //         checkOut: formData.get("checkOut"),
        //         website: formData.get("website")
        //     };
        //
        // setCampingTrip([...campingTrips, newTrip]);

        console.log(data);
        const newTrip =
            {
                id: nanoid(),
                destination: data.destination,
                numParticipants: data.numParticipants,
                checkIn: data.checkIn,
                lat: 49.0502783,
                long: -121.9883143,
                checkOut: data.checkOut,
                website: data.website
            };
        setCampingTrip([...campingTrips, newTrip]);
        // navigation('/');

    }


    // console.log(campingTrips);
    // console.log(process.env.VITE_GOOGLE_API_KEY);

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
                <form onSubmit={handleSubmit(addNewTrip)}
                      id="newTrip"
                      className="flex flex-col gap-1 mt-8 drop-shadow-light dark:drop-shadow-dark"
                >
                    <label htmlFor="destination">Destination</label>

                    <APIProvider apiKey={GOOGLE_API_KEY}>
                    {/*<input {...rest}  ref={destinationRef} type="text" className={inputStyle} id="destination" />*/}
                    <Controller {...{
                                    control,
                                    register,
                                    name: 'destination',
                                    ref: { destinationRef },
                                    rules: { required: true},
                                    render: () => <PlaceAutoComplete />
                                    }
                                }
                    />

                    </APIProvider>

                    {/*<APIProvider apiKey={GOOGLE_API_KEY}>*/}
                    {/*    <PlaceAutoComplete style={inputStyle} id={"destination"} />*/}
                    {/*</APIProvider>*/}
                    {/*<p className={errorMsg}>{errors.destination?.message}</p>*/}

                    <label htmlFor="participants">n. participants</label>
                    <input type="number" className={inputNumStyle} id="participants"
                           {...register("numParticipants", {
                                   min: {value: 1, message: "You need at least 1 participant"},
                                   max: {value: 50, message: "The max number of participants is 50"}
                               }
                           )}
                    />
                    <p className={errorMsg}>{errors.numParticipants?.message}</p>

                    <div className="flex justify-between mb-2">
                        <div className="flex flex-col">
                            <label htmlFor="checkIn">Check-in</label>
                            <input type="date" className={inputStyle} id="checkIn"
                                   {...register("checkIn", {
                                           required: "Please inform a date for check-in",
                                           validate:
                                               {
                                                   sameCheckInDate: (value) => {
                                                       //
                                                       campingTrips.forEach((trip) => trip.checkIn === value || "There is another trip with same check in date");
                                                   }
                                               },
                                           // valueAsDate: true,
                                       }
                                   )}
                            />
                            <p className={errorMsg}>{errors.checkIn?.message}</p>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="checkOut">Check-out</label>
                            <input type="date" className={inputStyle} id="checkOut"
                                   {...register("checkOut", {
                                           required: "Please inform a date for check out",
                                           validate:
                                               {
                                                   sameCheckOutDate: (value) => {
                                                       //
                                                       campingTrips.forEach((trip) => trip.checkOut === value || "There is another trip with same check out date");
                                                   }

                                                   // checkOutBeforeCheckIn: (value) => value <=
                                               }
                                           // valueAsDate: true
                                       }
                                   )}
                            />
                            {/*<p className={errorMsg}>{errors.checkOut?.message}</p>*/}
                        </div>
                    </div>

                    <label htmlFor="website">Website:</label>
                    <input type="text" id="website" className={inputStyle} {...register("website")}/>

                    <input type='submit'/>
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

//Input validation -