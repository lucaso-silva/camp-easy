
function DailyForecastCard({info}) {

    return (
        <div className="border-2 border-black rounded-xl py-3 px-3">
            <h3 className="text-right mb-2 text-sm">{info.date}</h3>
            <div className="flex flex-col items-center gap-2">
                <div className="flex gap-2 justify-between text-xs">
                    <div className="flex flex-col">
                        <span className="hidden">Sunrise</span>
                        <span className="bg-sunrise h-8 w-8"></span>
                        <p>{info.sunrise}</p>
                    </div>
                    <div className="flex flex-col">
                        <span className="hidden">Sunset</span>
                        <span className="bg-sunset h-8 w-8"></span>
                        <p>{info.sunset}</p>
                    </div>
                </div>
                <div className="flex gap-3 justify-around">
                    <div className="flex">
                    <span className="material-symbols-outlined text-xs text-red-800">
                        arrow_upward_alt
                    </span>
                        <p className="text-xs">{info.max_temp}°C</p>
                    </div>
                    <div className="flex">
                    <span className="material-symbols-outlined text-sm text-blue-800">
                        arrow_downward_alt
                    </span>
                        <p className="text-xs">{info.min_temp}°C</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DailyForecastCard;