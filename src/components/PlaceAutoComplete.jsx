import {useEffect, useRef, useState} from "react";
import {useMapsLibrary} from "@vis.gl/react-google-maps";

const PlaceAutocomplete = (props) => {
    const [placeAutocomplete, setPlaceAutocomplete] = useState(null);
    const inputRef = useRef(null);
    const places = useMapsLibrary("places");

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
        <input type="text" ref={inputRef}/>
    )
}

export default PlaceAutocomplete;