import Axios from "axios";
import { useState } from "react";
import "./search.css";

interface Props {
    updateCity: Function
}

const fetchWeather = (val: string) => {
    return new Promise((resolve, reject) => {
        Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${val}&units=metric&APPID=6dc117b66b6e76ce57bb6fb0ac1fad35`).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        })
    })
};


const Search = ({ updateCity }: Props) => {
    const [city, setCity] = useState('');

    const addCity = () => {
        updateCity('string', city)
        setCity('')
    }

    const onChangeVal = (e: any) => {
        let serachVal = e.target.value;
        setCity(e.target.value)
        if (serachVal) {
            fetchWeather(serachVal).then((res) => {
                console.log(res)
                updateCity('data', res)
                setCity('')
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    return <div className="Search">
        <input className="search--input" onKeyDown={(e) => (e.key === 'Enter') && addCity()} value={city} onChange={onChangeVal} placeholder="Enter a City..." />
        <button className="search--btn" onClick={addCity}>Search</button>
    </div>
}

export default Search;