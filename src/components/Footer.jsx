import { useNavigate } from "react-router-dom";

function Footer() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/documentation');
    }

    return (
        <footer className="text-right p-3 text-green-950 dark:text-green-400 drop-shadow-light dark:drop-shadow-dark text-lg">
            <span onClick={handleClick} className="cursor-pointer pr-8">Documentation</span>
        </footer>
    )
}

export default Footer;