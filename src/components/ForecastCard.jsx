import axios from 'axios';

function ForecastCard(props) {
    // const ACCUWEATHER_API_KEY = 'xxxxxxx';

    // const fetchData = async () => {
    //     const url = `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${ACCUWEATHER_API_KEY}&q=${props.lat}%2C${props.long}`
    //     await axios.get(url)
    //         .then(data => {
    //             let location_key = data.data.Key;
    //             console.log("location key: " + location_key);
    //
    //             forecast(location_key);
    //         });
    // }
    //
    // const forecast = async (location) => {
    //     const url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${location}?apikey=${ACCUWEATHER_API_KEY}&metric=true`;
    //
    //     await axios.get(url)
    //         .then(data => {
    //             const dailyForecasts = data.data.DailyForecasts;
    //
    //             console.log(dailyForecasts);
    //         });
    // }
    //
    // fetchData();
    const locationKey = axios.get('http://localhost:5001/locationKey').then(data => {
        console.log(data.data);
    });

    const forecast = axios.get('http://localhost:5001/forecast').then(data => {
        console.log(data.data);
    })

    return (
        <div className="p-2 border-2 border-black rounded-xl">
            <h3>Date: 30/11/2024</h3>
        </div>
    )
}


export default ForecastCard;