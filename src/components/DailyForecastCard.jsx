
function DailyForecastCard({info}) {

    return (
        <div className="border-2 border-black rounded-xl py-3 px-4 text-sm">
            <h3 className="text-right mb-2">{info.date}</h3>
            <p>Sunrise: {info.sunrise}</p>
            <p>Sunset: {info.sunset}</p>
            <p>Temp. max: {info.max_temp}°C</p>
            <p>Temp. min: {info.min_temp}°C</p>
        </div>
    )
}

export default DailyForecastCard;