import React from "react";
import zodiacs from "./zodiacs";

function App() {
  return (
    <div>
      <h1>Daftar Zodiak</h1>
      <ul>
        {zodiacs.map((zodiac, index) => (
          <li key={index}>
            <h2>{zodiac.name}</h2>
            <p>{zodiac.description}</p>
            <p>
              {zodiac.start_date} - {zodiac.end_date}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


