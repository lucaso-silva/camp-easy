import Home  from './pages/Home.jsx';
import Form from './pages/Form.jsx';
import {useState} from "react";

function App() {
    const [isDark, setDark] = useState(false);

    const toggleTheme = ()=> {
        setDark(!isDark);
        document.body.classList.toggle("dark");
    }

    return (
        <div className="md:bg-green-100 h-full md:p-2 dark:bg-gray-800">
            {/*<Home*/}
            {/*    onChange={toggleTheme}*/}
            {/*    dark={isDark}*/}
            {/*/>*/}
            <Form />
        </div>
    )
}

export default App;
