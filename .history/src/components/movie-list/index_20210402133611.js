import { setState } from "expect";
import React, { useState } from "react";
import "./index.css";

function MovieList() {

  const [year, setYear] = useState('');

  console.log(year)

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <input type="number" className="large" placeholder="Enter Year eg 2015" data-testid="app-input" value={year} onChange={(e) => { setYear(e.target.value) }} />
        <button className="" data-testid="submit-button">Search</button>
      </section>

      <ul className="mt-50 styled" data-testid="movieList">
        <li className="slide-up-fade-in py-10"></li>
      </ul>

      <div className="mt-50 slide-up-fade-in" data-testid="no-result"></div>
    </div>
  );
}

export default MovieList