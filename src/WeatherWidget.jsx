import React, { useState } from "react";

const cities = [
  { name: "Москва", temp: 15 },
  { name: "Санкт-Петербург", temp: 12 },
  { name: "Новосибирск", temp: 5 },
  { name: "Екатеринбург", temp: 8 },
  { name: "Казань", temp: 14 }
];

export default function WeatherWidget() {
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [showTemp, setShowTemp] = useState(false);

  return (
    <div style={{
      width: 300,
      padding: 20,
      background: "#f2f2f2",
      borderRadius: 12
    }}>
      <h2>Погодный виджет</h2>

      <select
        onChange={e => {
          setSelectedCity(cities.find(c => c.name === e.target.value));
          setShowTemp(false);
        }}
        value={selectedCity.name}
      >
        {cities.map(c => (
          <option key={c.name}>{c.name}</option>
        ))}
      </select>

      <button onClick={() => setShowTemp(true)}>
        Показать температуру
      </button>

      {showTemp && <p>Температура: {selectedCity.temp}°C</p>}
    </div>
  );
}
