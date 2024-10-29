import { useNavigate } from "react-router-dom";

function TripInfoCard(props) {
    const textStyle = "drop-shadow-light dark:drop-shadow-dark";
    const iconStyle = "material-symbols-outlined text-2xl md:text-3xl dark:text-green-300 drop-shadow-light dark:drop-shadow-dark md:cursor-pointer";
    const navigate = useNavigate();

    const handleClick = (e) => {
        if(e.target.id === 'edit') {
            navigate('/form');
        }
        if(e.target.id === 'more') {
            navigate('/tripdetails');
        }
    }

    return (
        <div
            className="font-normal md:text-lg p-5 bg-green-500 dark:bg-green-700 text-green-950 dark:text-green-50 tracking-wide w-full rounded-xl mx-auto border-2 border-black grid grid-rows-4">
            <div className="flex justify-between">
                <p className={textStyle}>Destination: <span className="font-secondFont">Cultus Lake</span></p>
                <span className={iconStyle} onClick={handleClick} id="edit">edit_note</span>
            </div>
            <div className="flex justify-between">
                <p className={textStyle}>n. participants: <span className="font-secondFont">4</span></p>
                <span className={iconStyle}>delete</span>
            </div>
            <div className="flex justify-between">
                <p className={textStyle}>link: <a href="#" className="font-secondFont">Cultus Lake</a></p>
                <span className={iconStyle} onClick={handleClick} id="more">read_more</span>
            </div>
            <div className="flex gap-6 md:gap-32">
                <p className={textStyle}>Check-in: <span className="font-secondFont">10/18/24</span></p>
                <p className={textStyle}>Check-out: <span className="font-secondFont">10/22/24</span></p>
            </div>
        </div>
    )
}

export default TripInfoCard;