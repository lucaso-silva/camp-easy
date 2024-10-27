import Logo from '../components/Logo.jsx'
import Button from '../components/Button.jsx';
import TripInfoCard from "../components/TripInfoCard.jsx";

function Home() {
    return(
        <div className="max-w-3xl mx-auto bg-green-400 md:rounded-xl md:border-2 border-black">
            <header className="flex justify-between items-center p-5">
                <Logo />
                <div className="hidden md:block">
                   <Button label={'New camping'}/>
                </div>
                <div className="flex justify-around items-center gap-x-8">
                    <span className="material-symbols-outlined md:hidden text-3xl">
                        camping
                    </span>
                    <input type="checkbox" id="theme" className="hidden"/>
                    <label htmlFor="theme" className="md:cursor-pointer">
                        <span className="material-symbols-outlined text-3xl">
                            light_mode
                        </span>
                    </label>
                </div>
            </header>
            <div className="bg-banner-img bg-cover h-80">

            </div>
            <main className="px-8 py-4 flex flex-col gap-3">
                <div className="flex justify-between">
                    <h2 className="text-2xl">Upcoming</h2>
                    <input type="search" className="hidden md:block bg-green-100 rounded-lg bg-search bg-no-repeat bg-left py-1 pl-7 font-secondFont font-thin border-green-900 border-2 w-3/5"/>
                    <span className="material-symbols-outlined text-3xl md:hidden">
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