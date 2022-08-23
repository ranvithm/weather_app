import { useState } from "react";
import Search from "../components/search/search";
import WeatherItem from "../components/weather-item/weather-item";

const DEFAULT_CITIES = [{ type: 'string', name: 'New York' }, { type: 'string', name: 'London' }, { type: 'string', name: 'Paris' }]

interface Props {
  setSelectCity: Function
}

const WeatherSearchList = ({ setSelectCity }: Props) => {
  const [cityLists, setCityList] = useState([...DEFAULT_CITIES])

  const updateCity = (val: string, data: any) => {
    let _cities = [...cityLists]
    if (val === 'data') {
      _cities.push({ type: 'data', name: data })
    } else {
      _cities.push({ type: 'string', name: val })
    }
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