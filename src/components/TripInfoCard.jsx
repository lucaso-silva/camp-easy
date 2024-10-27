
function TripInfoCard(props) {
    return (
        <div className="p-5 bg-green-500 w-full rounded-xl mx-auto border-2 border-black">
            <p>Destination: <span className="font-secondFont">Cultus Lake</span></p>
            <p>n. participants: <span className="font-secondFont">4</span></p>
            <div className="">
                <p>Check-in: <span className="font-secondFont">10/18/24</span></p>
                <p>Check-out: <span className="font-secondFont">10/22/24</span></p>
            </div>
            <p>link: <a href="#" className="font-secondFont">Cultus Lake</a></p>
        </div>
    )
}

export default TripInfoCard;