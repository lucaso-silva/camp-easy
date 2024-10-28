
function TripInfoCard(props) {
    const textStyle = "drop-shadow-light dark:drop-shadow-dark";

    return (
        <div className="p-5 bg-green-500 dark:bg-green-700 text-green-950 dark:text-green-100 tracking-wide w-full rounded-xl mx-auto border-2 border-black">
            <p className={textStyle}>Destination: <span className="font-secondFont">Cultus Lake</span></p>
            <p className={textStyle}>n. participants: <span className="font-secondFont">4</span></p>
            <div className="md:flex md:gap-20">
                <p className={textStyle}>Check-in: <span className="font-secondFont">10/18/24</span></p>
                <p className={textStyle}>Check-out: <span className="font-secondFont">10/22/24</span></p>
            </div>
            <p className={textStyle}>link: <a href="#" className="font-secondFont">Cultus Lake</a></p>
        </div>
    )
}

export default TripInfoCard;