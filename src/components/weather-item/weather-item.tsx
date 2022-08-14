import Axios from "axios";
import { useEffect, useState } from "react";
import "./weather-item.css";

interface Props {
    city: String,
    setSelectCity: Function
}

// interface WeatherProps {
//     weather?: Array<{
//         main: string,
//         description: string
//     }>,
//     main?: {
//         temp: number,
//         feels_like: number,
//         pressure: number,
//         humidity: number
//     },
//     visibility?: number,
//     wind?: {
//         speed: number,
//         deg: number,
//     }
// }

const WeatherItem = ({ city, setSelectCity }: Props) => {
    const [weather, setWeather] = useState<any>(null);
    const [bgColor, setBgColor] = useState<any>('') //transparent
    useEffect(() => {
        const fetchWeather = async () => {
            const response = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=6dc117b66b6e76ce57bb6fb0ac1fad35`);
            setWeather(response.data);
            // let temp = Math.floor(weather?.main?.temp)
            // // console.log(temp)
            // temp = temp < 100 ? temp : 100;
            // let hue = 200 + (160 * (temp / 100));
            // setBgColor(`hsl(${hue}, 70%, 50%)`)
        };
        fetchWeather()
    }, [city])

    // console.log(weather);
    return weather ? <div style={{backgroundColor: bgColor}} className="WeatherItem">
        <div className="card--content">
            <div className="card--name">{`${weather?.name}, ${weather?.sys?.country}`}</div>
            <div className="weather--info">
                <div className="weather--temp">{`${Math.floor(weather?.main?.temp)}°C`}</div>
                {`  |  ${weather?.weather[0]?.description}`}
            </div>
        </div>
        <div className="card--footer">
            <button onClick={() => setSelectCity(weather)} className="btn">View More</button>
        </div>
    </div> : null
}

export default WeatherItem;