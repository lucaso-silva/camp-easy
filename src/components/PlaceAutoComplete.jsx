import {useEffect, useRef, useState} from "react";
import {useMapsLibrary} from "@vis.gl/react-google-maps";

const PlaceAutocomplete = (props) => {
    const [placeAutocomplete, setPlaceAutocomplete] = useState(props.value || "");
    const inputRef = useRef(null);
    const places = useMapsLibrary("places");

    const inputStyle = "bg-green-200 rounded-lg font-secondFont font-thin border-green-900 border-2 p-0.5 pl-2 dark:text-green-800";

    useEffect(() => {
        if (!places || !inputRef.current) return;

        const options = {
            fields: ["geometry", "name", "formatted_address"],
        };

        setPlaceAutocomplete(new places.Autocomplete(inputRef.current, options));
    }, [places]);

    useEffect(() => {
        if (!placeAutocomplete) return;

        placeAutocomplete.addListener("place_changed", () => {
            // props.onPlaceSelect(placeAutocomplete.getPlace());
            console.log(placeAutocomplete.getPlace());
        });
    }, [placeAutocomplete]);
//[props.onPlaceSelect, placeAutocomplete]
    return (
        <input type="text" ref={inputRef} name={props.name} className={inputStyle}/>
    )
}

export default PlaceAutocomplete;