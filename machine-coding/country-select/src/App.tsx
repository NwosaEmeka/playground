import { useState } from "react";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("");

  const countries = [
    {
      name: "Nigeria",
      value: "NG",
      cities: ["Lagos", "Abuja", "Kano"],
    },
    {
      name: "Ghana",
      value: "GH",
      cities: ["Accra", "Kumasi", "Tamale"],
    },
    {
      name: "Kenya",
      value: "KE",
      cities: ["Nairobi", "Mombasa"],
    },
  ];

  return (
    <div>
      <h1>Select county and city</h1>

      <div>
        <select onChange={(e) => setSelectedCountry(e.target.value)}>
          <option value="">Select Country</option>
          {countries.map((country) => (
            <option key={country.name} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>

        <select>
          <option value="">Seect city</option>
          {countries
            .find((country) => country.name === selectedCountry)
            ?.cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}

export default App;
