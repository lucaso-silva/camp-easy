import { useNavigate } from "react-router-dom";

function TripInfoCard({ campingTrip, deleteTrip }) {
    const textStyle = "drop-shadow-light dark:drop-shadow-dark";
    const iconStyle = "material-symbols-outlined text-2xl md:text-3xl dark:text-green-300 drop-shadow-light dark:drop-shadow-dark md:cursor-pointer";
    const navigate = useNavigate();

    const handleClick = (e) => {
        if(e.target.id === 'edit') {
            navigate('/edit', {state: campingTrip});
        }
        if(e.target.id === 'more') {
            navigate('/tripdetails', {state: campingTrip});
        }

        if(e.target.id === 'delete') {
           deleteTrip(campingTrip);
        }
    }

    const checkIn = campingTrip.checkIn.substring(0, campingTrip.checkIn.indexOf('T'));
    const checkOut = campingTrip.checkOut.substring(0, campingTrip.checkOut.indexOf('T'));

    return (
        <div
            className="font-normal md:text-lg p-5 bg-green-500 dark:bg-green-700 text-green-950 dark:text-green-50 tracking-wide w-full rounded-xl mx-auto border-2 border-black grid grid-rows-4">
            <div className="flex justify-between">
                <p className={textStyle}>Destination: <span className="font-secondFont">{campingTrip.destination}</span></p>
                <span className={iconStyle} onClick={handleClick} id="edit">edit_note</span>
            </div>
            <div className="flex justify-between">
                <p className={textStyle}>n. participants: <span className="font-secondFont">{campingTrip.numParticipants}</span></p>
                <span className={iconStyle} onClick={handleClick} id="delete">delete</span>
            </div>
            <div className="flex justify-between">
                <p className={textStyle}>link: <a href={campingTrip.website} className="font-secondFont">{campingTrip.website}</a></p>
                <span className={iconStyle} onClick={handleClick} id="more">read_more</span>
            </div>
            <div className="flex gap-6 md:gap-32">
                <p className={textStyle}>Check-in: <span className="font-secondFont">{checkIn}</span></p>
                <p className={textStyle}>Check-out: <span className="font-secondFont">{checkOut}</span></p>
            </div>
        </div>
    )
}

export default TripInfoCard;