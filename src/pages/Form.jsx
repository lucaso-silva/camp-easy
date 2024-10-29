import Logo from '../components/Logo.jsx'
import Button from "../components/Button.jsx";
import {useNavigate} from "react-router-dom";

function Form() {
    const inputStyle = "bg-green-200 rounded-lg font-secondFont font-thin border-green-900 border-2 p-0.5 pl-2 dark:text-green-800";
    const inputNumStyle = inputStyle + " w-24";
    const navigation = useNavigate();

    const handleClick = ()=> {
        navigation(-1);
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
                <form className="flex flex-col gap-1 mt-8 drop-shadow-light dark:drop-shadow-dark">
                    <label htmlFor="destination">Destination</label>
                    <input id="destination" type="text" className={inputStyle}/>

                    <label htmlFor="participants">n. participants</label>
                    <input id="participants" type="number" className={inputNumStyle}/>

                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <label htmlFor="checkIn">Check-in</label>
                            <input id="checkIn" type="date" className={inputStyle}/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="checkOut">Check-out</label>
                            <input id="checkOut" type="date" className={inputStyle}/>
                        </div>
                    </div>

                    <label htmlFor="website">Website:</label>
                    <input id="website" type="text" className={inputStyle}/>

                </form>
            </main>
            <div className="flex justify-center gap-20 mt-4">
                <Button label="Save" id="save"/>
                <Button label="Reset" id="reset"/>
            </div>
        </div>
    )
}

export default Form;