import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Genoa" />
        <footer>
          Coded by{" "}
          <a
            href="https://leafy-begonia-db17ce.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Rebecca Brodie
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/brodie96/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
