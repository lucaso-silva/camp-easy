import Logo from '../components/Logo.jsx'
import Button from '../components/Button.jsx';
import TripInfoCard from "../components/TripInfoCard.jsx";

function Home(props) {

    return(
        <div className="max-w-3xl mx-auto bg-green-400 dark:bg-green-900 md:rounded-xl md:border-2 border-black">
            <header className="flex justify-between items-center p-5">
                <Logo />
                <div className="hidden md:block">
                   <Button label={'New camping'}/>
                </div>
                <div className="flex justify-around items-center gap-x-8">
                    <span className="material-symbols-outlined md:hidden text-3xl dark:text-green-300 drop-shadow-light dark:drop-shadow-dark">
                        camping
                    </span>
                    <input type="checkbox" id="theme" className="hidden" onChange={props.onChange}/>
                    <label htmlFor="theme" className="md:cursor-pointer">
                        <span className="material-symbols-outlined text-3xl dark:text-green-300 drop-shadow-light dark:drop-shadow-dark">
                            {props.dark ? "dark_mode" : "light_mode"}
                        </span>
                    </label>
                </div>
            </header>
            <div className="bg-banner-img bg-cover h-80">

            </div>
            <main className="px-8 py-4 flex flex-col gap-3">
                <div className="flex justify-between">
                    <h2 className="text-2xl text-green-950 dark:text-green-400 drop-shadow-light dark:drop-shadow-dark">
                        Upcoming
                    </h2>
                    <input type="search" className="hidden md:block bg-green-200 rounded-lg bg-search bg-no-repeat bg-left py-1 pl-7 font-secondFont font-thin border-green-950 border-2 w-3/5"/>
                    <span className="material-symbols-outlined text-3xl md:hidden dark:text-green-300 drop-shadow-light dark:drop-shadow-dark">
                        search
                    </span>
                </div>
                <TripInfoCard />
                <TripInfoCard />
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default Home;