import WeatherInfoList from "../components/weather-info-list/weather-info-list";

const WeatherIcons = {
    "01d": "/icons/Sunshine.svg",
    "01n": "/icons/Night.svg",
    "02d": "/icons/Sun.svg",
    "02n": "/icons/Night-rainy.svg",
    "03d": "/icons/Cloud-wind.svg",
    "03n": "/icons/Cloud-wind.svg",
    "04d": "/icons/Sun.svg",
    "04n": "/icons/Night-rainy.svg",
    "09d": "/icons/Rainy.svg",
    "09n": "/icons/Night-rainy.svg",
    "10d": "/icons/Rainy.svg",
    "10n": "/icons/Night-rainy.svg",
    "11d": "/icons/Tonado.svg",
    "11n": "/icons/Tonado.svg",
} as any;

interface Props {
    weather: any,
    setSelectCity: Function
}

const WeatherDetails = ({ weather, setSelectCity }: Props) => {

    const isDay = weather?.weather[0].icon?.includes('d')

    const getTime = (timeStamp: any) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }

    return <div className="WeatherDetails">
        <div className="weather--details">
            <div className="weather--temp--group">
                <div className="weather--temp">{`${Math.floor(weather?.main?.temp)}°C`}</div>
                {`  |  ${weather?.weather[0]?.description}`}
            </div>
            <div className="weather--img">
                <img className="" alt="weather--info" src={WeatherIcons[weather?.weather[0].icon]} />
            </div>
        </div>
        <div className="weather--info">
            <div className="weather--head"> Weather Info </div>
            <div className="weather--info--list">
                <WeatherInfoList name={isDay ? "sunset" : "sunrise"} value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`} />
                <WeatherInfoList name="humidity" value={weather?.main?.humidity} />
                <WeatherInfoList name="wind" value={weather?.wind?.speed} />
                <WeatherInfoList name="pressure" value={weather?.main?.pressure} />
            </div>
        </div>
        <div className="card--footer">
            <button onClick={() => setSelectCity(null)} className="btn">Back to List</button>
        </div>
    </div>
}

export default WeatherDetails;