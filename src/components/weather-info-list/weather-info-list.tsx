import "./weather-info-list.css";

interface Props {
    name: any
    value: any
}

const WeatherInfoIcons = {
    sunset: "/icons/sun.svg",
    sunrise: "/icons/Sunshine.svg",
    humidity: "/icons/Rainy.svg",
    wind: "/icons/Cloud-wind.svg",
    pressure: "/icons/Snow.svg",
} as any;

const WeatherInfoList = ({ name, value }: Props) => {

    return <div className="WeatherInfoList">
        <div className="weather-type">
            <img src={WeatherInfoIcons[name]} alt="Weather type" />
        </div>
        <div className="weather--type-group">
            <div className="weather--type-name">
                {name}
            </div>
            <div className="weather--type-value">
                {value}
            </div>
        </div>
    </div>
}

export default WeatherInfoList;