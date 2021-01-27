import React, { useState, useEffect } from 'react';

const moviesData = require("./movies.json");

// Lets do some movie sorting!
const Practice4 = () => {

  const [allmovies, setAllMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const items_per_page = 10;

  const SetAll = async () => {
    var paginatedMovies = moviesData.slice(0, items_per_page);
    setMovies(paginatedMovies);
    setAllMovies(moviesData);
  }

  const ChangePage = (num) => {
    console.log(num);
    setMovies(
      allmovies.slice(items_per_page * (num - 1), items_per_page * num)
    )
  }

  const FilterPage = (text) => {
    setMovies(
      allmovies.filter((o) => {
        return o.title.includes(text);
      })
    )
  }

  const SortMovies = (checked) => {
    if (checked) {
      setMovies(
        allmovies.sort(sortByMovieTitle)
        )
        SetAll();
    } else {
      setMovies(
        allmovies
        )
        SetAll();
    }
}

  useEffect(() => {
    SetAll();
  }, []);

  return <div>
    <b>Array Page</b>
    {movies.map(o => {
      return <div>Movie : {o.title}</div>
    })}
    <input type="number" defaultValue={1} onChange={(e) => {
      ChangePage(e.target.value);
    }} />
    <input type="text" onChange={(e) => {
      FilterPage(e.target.value);
    }} />

    <input type="checkbox" onChange={(e) => {
      SortMovies(e.target.checked);
    }} />


  </div>
}

export default Practice4;

function sortByMovieTitle(a, b) {
  if (a.title > b.title) {
    return 1;
  } else if (a.title < b.title) {
    return -1;
  } else {
    return 0;
  }
}