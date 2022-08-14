import { useState } from "react";
import Header from "./components/header/header";
import WeatherDetails from "./page/weather-details";
import WeatherSearchList from "./page/weather-search-list";

function App() {
  const [selectedCity, setSelectCity] = useState<any>(null)
  return (
    <div className="App">
      <Header title={selectedCity ? `${selectedCity?.name}, ${selectedCity?.sys?.country} - Weather Information` : 'Weather Application'} />
      {selectedCity ? <WeatherDetails weather={selectedCity} setSelectCity={setSelectCity} /> : <WeatherSearchList setSelectCity={setSelectCity} />}
    </div>
  );
}

export default App;
