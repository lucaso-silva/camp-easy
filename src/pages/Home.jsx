import Logo from '../components/Logo.jsx'
import bonfire from "../assets/bonfire.svg";
import Button from '../components/Button.jsx';
import TripInfoCard from "../components/TripInfoCard.jsx";

function Home() {
    return(
        <>
            <header className="flex justify-between items-center p-5">
                <Logo image={bonfire}/>
                <Button label={'New camping'}/>
                <div>
                    <input type="checkbox" id="theme" />
                    <label htmlFor="theme">
                        <span className="material-symbols-outlined">
                            light_mode
                        </span>
                    </label>
                </div>
            </header>
            <div className="bg-banner-img bg-cover h-80">

            </div>
            <main>
                <div className="">
                    <h2>Upcoming</h2>
                    <input type="search"/>
                </div>
                <TripInfoCard />
            </main>
            <footer>

            </footer>
        </>
    )
}

export default Home;