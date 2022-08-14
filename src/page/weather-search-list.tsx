import { useState } from "react";
import Search from "../components/search/search";
import WeatherItem from "../components/weather-item/weather-item";

const DEFAULT_CITIES = ['New York', 'London', 'Paris']

interface Props {
  setSelectCity: Function
}

const WeatherSearchList = ({ setSelectCity }: Props) => {
  const [cityLists, setCityList] = useState([...DEFAULT_CITIES])

  const updateCity = (city: string) => {
    let _cities = [...cityLists]
    _cities.push(city)
    setCityList(_cities)
  }

  return <div className="WeatherSearchList">
    <Search updateCity={updateCity} />
    <div className="weather--list">
      {cityLists.map((city, i) => {
        return <WeatherItem key={`weather-item-${i}`} setSelectCity={setSelectCity} city={city} />
      })}
    </div>
  </div>
}

export default WeatherSearchList;