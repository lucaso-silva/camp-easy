import Home  from './pages/Home.jsx';
import Form from './pages/Form.jsx';
import TripDetails from './pages/TripDetails.jsx';
import Error from './pages/Error.jsx';
import {useState, useEffect} from "react";
import { Route, Routes } from 'react-router-dom';

function App() {
    const [isDark, setDark] = useState(false);
    // const [campingTrips, setCampingTrips] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem("dark-theme");

        if(data) {
            setDark(JSON.parse(data));
        }
    }, []);

    useEffect(()=>{
        localStorage.setItem("dark-theme", JSON.stringify(isDark));
    }, [isDark])

    const toggleTheme = ()=> {
        setDark(!isDark);
        document.body.classList.toggle("dark");
    }

    return (
        <div className="md:bg-green-100 h-full md:p-2 dark:bg-gray-800">
            <Routes>
                <Route index element={<Home onChange={toggleTheme} dark={isDark}/>} />
                <Route path="home" element={<Home onChange={toggleTheme} dark={isDark}/>} />
                <Route path="/form" element={<Form />} />
                <Route path="/tripdetails" element={<TripDetails />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    )
}

export default App;
