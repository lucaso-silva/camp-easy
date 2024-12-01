import Logo from '../components/Logo.jsx'
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { nanoid } from 'nanoid';
import PlaceAutoComplete from "../components/PlaceAutoComplete";
import { APIProvider } from "@vis.gl/react-google-maps";

function Form() {
    const [campingTrips, setCampingTrip] = useState([]);

    const inputStyle = "bg-green-200 rounded-lg font-secondFont font-thin border-green-900 border-2 p-0.5 pl-2 dark:text-green-800";
    const inputNumStyle = inputStyle + " w-24";
    const errorMsg = "text-red-600 mb-1";

    const GOOGLE_API_KEY = 'xxxxxx';

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

    const Controller = ({ control, register, name, ref, rules, render }) => {
        const props = register(name, rules);

        return render({
            onChange: (e) => props.onChange({
                target: {
                    name,
                    value: e.target.value,
                }
            }),
            onBlur: props.onBlur,
            name: props.name,
        });
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

    const handleClick = ()=> {
        navigation('/');
    }

    const addNewTrip = (data) => {

        const newTrip =
            {
                id: nanoid(),
                destination: data.destination,
                numParticipants: data.numParticipants,
                checkIn: data.checkIn,
                lat: (Math.random() * 90),
                long: (Math.random() * 180),
                checkOut: data.checkOut,
                website: data.website
            };
        setCampingTrip([...campingTrips, newTrip]);
    }

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
                    <input type="text" className={inputStyle} id="destination"
                           {...register("destination", {required: "Please enter a place"})}
                    />

                    {/*<Controller {...{*/}
                    {/*    control,*/}
                    {/*    register,*/}
                    {/*    name: 'destination',*/}
                    {/*    rules: { required: "Please enter a place"},*/}
                    {/*    render: (props) => (*/}
                    {/*                        <APIProvider apiKey={GOOGLE_API_KEY}>*/}
                    {/*                            <PlaceAutoComplete {...props } id={"destination"} inputStyle={inputStyle}/>*/}
                    {/*                        </APIProvider>*/}
                    {/*                    )*/}
                    {/*                }*/}
                    {/*            }*/}
                    {/*/>*/}
                    <p className={errorMsg}>{errors.destination?.message}</p>

                    <label htmlFor="participants">n. participants</label>
                    <input type="number" className={inputNumStyle} id="participants"
                           {...register("numParticipants", {
                                   required: "Enter the number of participants",
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
                                                       let formattedDate = new Date(value).toISOString();
                                                       formattedDate = formattedDate.substring(0, formattedDate.indexOf('T'));
                                                       const sameDate = campingTrips.some((trip) => trip.checkIn.substring(0, trip.checkIn.indexOf('T')) === formattedDate);
                                                       return !sameDate || "There is another trip with same check-in date";
                                                   },
                                                   futureDate: (value) => {
                                                       let currentDate = new Date();
                                                       return value > currentDate || "Please enter a future date.";
                                                   }
                                               },
                                           valueAsDate: true,
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
                                                       let formattedDate = new Date(value).toISOString();
                                                       formattedDate = formattedDate.substring(0, formattedDate.indexOf('T'));
                                                       const sameDate = campingTrips.some((trip) => trip.checkOut.substring(0, trip.checkOut.indexOf('T')) === formattedDate);
                                                       return !sameDate || "There is another trip with same check-out date";
                                                   },

                                                   checkOutBeforeCheckIn: (value) => {
                                                       let checkIn = watch('checkIn');
                                                       return value > checkIn || "Please enter a future date. Check-out must be after the check-in";
                                                   }
                                               },
                                           valueAsDate: true
                                       }
                                   )}
                            />
                            <p className={errorMsg}>{errors.checkOut?.message}</p>
                        </div>
                    </div>

                    <label htmlFor="website">Website:</label>
                    <input type="text" id="website"
                           className={inputStyle} {...register("website", {required: "Please enter a website address"})}/>
                    <p className={errorMsg}>{errors.website?.message}</p>

                    <div className="text-center">
                        <input type='submit'/>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default Form;
