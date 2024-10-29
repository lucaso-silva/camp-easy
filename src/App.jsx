import Home  from './pages/Home.jsx';
import Form from './pages/Form.jsx';
import TripDetails from './pages/TripDetails.jsx';
import {useState} from "react";
import { Switch, Route } from 'react-router-dom';

function App() {
    const [isDark, setDark] = useState(false);

    const toggleTheme = ()=> {
        setDark(!isDark);
        document.body.classList.toggle("dark");
    }

    return (
        <div className="md:bg-green-100 h-full md:p-2 dark:bg-gray-800">
            <Switch >
                <Route exact path="/" component={Home} />
                <Route path="/form" component={Form} />
                <Route path="/tripdetails" component={TripDetails} />
                <Route component={Error} />
            </Switch>
            {/*<Home*/}
            {/*    onChange={toggleTheme}*/}
            {/*    dark={isDark}*/}
            {/*/>*/}
            {/*<Form />*/}
            {/*<TripDetails />*/}
        </div>
    )
}

export default App;
