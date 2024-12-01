import Logo from "../components/Logo.jsx";
import { useNavigate } from "react-router-dom";

function Documentation() {
    const navigation = useNavigate();

    const handleClick = () => {
        navigation('/home');
    }

    return (
        <div className="max-w-2xl mx-auto bg-green-400 dark:bg-green-900 md:rounded-xl md:border-2 border-black p-3 md:px-20">
            <header className="p-5 flex justify-between items-center">
                <Logo/>
                <span className="material-symbols-outlined md:cursor-pointer text-2xl" onClick={handleClick}>
                        close
                </span>
            </header>
            <main>
                <h2 className="text-green-950 dark:text-green-400 drop-shadow-light dark:drop-shadow-dark text-lg">Documentation</h2>
                <section className="text-justify border-2 border-black rounded-xl mt-2 py-2.5 px-3">
                    <h3 className="text-green-950 dark:text-green-400 drop-shadow-light dark:drop-shadow-dark mb-3">Overview</h3>
                    <div className="flex flex-col gap-1.5 tracking-wide dark:text-gray-200 dark:drop-shadow-dark font-sans">
                        <p>CampEasy is a web app where users can manage information about their upcoming trips, including the destination, dates, number of participants, and related websites. All data is stored and retrieved from localStorage.</p>
                        <p>The homepage displays key information about each trip, and users can filter the displayed results. To manage different states throughout the application, the useState hook was used, along with the useEffect hook to handle effects such as fetching data and interacting with localStorage.</p>
                        <p>Navigation between different routes in the application is handled using the React Router library, with the useNavigate and useLocation hooks enabling the passing of necessary data between pages.</p>
                        <p>The useForm hook from the react-hook-form library was used to handle form-related activities, including registering new trips and validating input. Validations ensure that required fields are filled, no overlapping trips with the same check-in or check-out dates, prevent check-in dates earlier than the current date, and ensure check-out dates are not earlier than check-in dates.</p>
                        <p>On the TripDetails page, the information entered by the user is displayed alongside a weather forecast for the next three days. Weather data is retrieved from the Open-Meteo Weather Forecast API using latitude and longitude coordinates.</p>
                    </div>

                    <h3 className="mt-3 mb-4 text-green-950 dark:text-green-400 drop-shadow-light dark:drop-shadow-dark">Points for improvement:</h3>
                    <ul className="list-disc pl-6 dark:text-gray-200 dark:drop-shadow-dark font-sans">
                        <li>Correctly integrate the Google Place Autocomplete API with the destination input field to retrieve accurate latitude and longitude values for each location. Currently, those values are generated using a Math.random function to simulate different weather conditions for each trip.</li>
                        <li>Enhance the Edit page to validate updated trip information.</li>
                        <li>Improve the styling of components on the TripDetails page, including weather forecast details.</li>
                        <li>Sort trips on the homepage by check-in date.</li>
                        <li>Implement a database, and support multiple user accounts.</li>
                    </ul>
                </section>
                <section>
                    <h3 className="mt-5 mb-4 text-green-950 dark:text-green-400 drop-shadow-light dark:drop-shadow-dark">References</h3>
                    <ul className="list-disc pl-6 text-sm dark:text-gray-200 dark:drop-shadow-dark font-sans">
                        <li><a href="https://open-meteo.com/" className="underline text-blue-800">Open-Meteo Weather API</a></li>
                        <li><a href="https://react-hook-form.com/docs" className="underline text-blue-800">React-hook-form</a></li>
                        <li><a href="https://developers.google.com/maps/documentation/javascript/place-autocomplete" className="underline text-blue-800">Google Place Autocomplete API</a></li>
                        <li>Home page image: retrieved from <a href="https://unsplash.com/photos/orange-camping-tent-near-green-trees-y8Ngwq34_Ak" className="underline text-blue-800">Unsplash.com</a></li>
                        <li>Camp Firecamp, and backpack camping icons: retrieved from <a href="https://www.iconfinder.com/search?q=camping" className="underline text-blue-800">Iconfinder.com</a></li>
                    </ul>
                </section>
            </main>
        </div>
    )
}

export default Documentation;