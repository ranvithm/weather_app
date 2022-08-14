import { useState } from "react";
import "./search.css";

interface Props {
    updateCity: Function
}

const Search = ({ updateCity }: Props) => {
    const [city, setCity] = useState('');

    const addCity = () => {
        updateCity(city)
        setCity('')
    }

    return <div className="Search">
        <input className="search--input" onKeyDown={(e) => (e.key === 'Enter') && addCity()} value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter a City..." />
        <button className="search--btn" onClick={addCity}>Search</button>
    </div>
}

export default Search;