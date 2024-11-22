import Logo from "../components/Logo.jsx";
import Button from "../components/Button.jsx";
import {useNavigate, useLocation} from "react-router-dom";

function TripDetails() {
    const navigation = useNavigate();
    const location = useLocation();
    const camping = location.state;
    console.log(camping);

    const handleClick = (e)=> {
        if(e.target.id === 'close') {
            navigation('/');

        } else if (e.target.id === 'edit') {
            navigation('/edit', {state: camping});
        }
    }

    return (
        <div
            className="max-w-2xl mx-auto bg-green-400 dark:bg-green-900 md:rounded-xl md:border-2 border-black p-3 md:px-20">
            <header className="p-5">
                <Logo/>
            </header>
            <main
                className="p-5 bg-green-500 dark:bg-green-700 text-green-950 dark:text-green-100 tracking-wide rounded-xl border-2 border-black">
                <div className="flex justify-between items-center drop-shadow-light dark:drop-shadow-dark">
                    <h2 className="text-xl">{camping.destination}</h2>
                    <span className="material-symbols-outlined md:cursor-pointer text-2xl" onClick={handleClick} id="close">
                        close
                    </span>
                </div>
                <div>
                    <p>It's is left 15 days until your trip</p>
                </div>
            </main>
            <div className="text-right">
                <Button label="Edit" onClick={handleClick} id="edit"/>
            </div>
        </div>

    )
}

export default TripDetails;