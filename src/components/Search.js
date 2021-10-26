//Mainpage, makes user select an activity to continue on with their selection.
//Three recommended parks displayed below the search bar.

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

// Main front of the website, searches the park by using the activity category from API.
function Search() {
  const [items, setItems] = useState([]);
  const [parks, setParks] = useState([]);
  let history = useHistory();

  useEffect(() => {
    //Fetches all the activities for the dropdown menu
    async function fetchItem() {
      const data = await fetch(
        "https://developer.nps.gov/api/v1/activities/parks?&api_key=Dte9gvfWpb7italce4QVy54ICLbGKHU1v0P48y2o"
      );
      const items = await data.json();
      setItems(items.data);
    }
    //Fetches all parks from the API to display recommended parks.
    async function fetchPark() {
      const data = await fetch(
        "https://developer.nps.gov/api/v1/parks?stateCode=&limit=465&api_key=Dte9gvfWpb7italce4QVy54ICLbGKHU1v0P48y2o"
      );
      const parks = await data.json();
      setParks(parks.data);
    }

    fetchItem();
    fetchPark();
  }, []);

  // If the dropdown category is selected, this will lead the website to that category parks
  function handleCategories(value) {
    history.push(`/national-park-service-app/search/${value}`);
  }

  //Gives random integer.
  function getRandomInt(max) {
    return Math.floor(Math.random() * (max - 4));
  }

  //Finds three recommended park from the park API, /park.
  function parkRecommender() {
    return (
      <div className="RecommendPark">
        {parkFinder()}
        {parkFinder()}
        {parkFinder()}
      </div>
    );
  }

  //Recommends parks from the array.
  const parkFinder = () => {
    let randomNum1 = getRandomInt(parks.length);

    return (
      <div className="RecommendParkEach">
        {parks.slice(randomNum1, randomNum1 + 1).map((item) => (
          <div key={item.parkCode}>
            <Link
              to={`/national-park-service-app/park/parkCode=${item.parkCode}`}
              style={{ textDecoration: "none" }}
            >
              {imageFinder(item)}
              <h4>{item.designation}</h4>
              <h3 key={item.parkCode}>{item.name}</h3>
            </Link>
            <p className="RecommendParkState" key={item.states}>
              State: {item.states.slice(0, 39)}
            </p>
            <p>{item.description.slice(0, 160)}..</p>
          </div>
        ))}
      </div>
    );
  };

  //Reads the image from the API
  const imageFinder = (park) => {
    return (
      <div>
        {park.images.slice(0, 1).map((item) => (
          <img
            className="RecommendImage"
            src={item.url}
            alt={"sceneary"}
            key={item.url}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="back">
      <div className="Search">
        <Fade top cascade>
          <h1>Explore America's National Parks.</h1>
        </Fade>
        <select onChange={(event) => handleCategories(event.target.value)}>
          <option value="default" hidden>
            Choose your activities!
          </option>
          {items.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="Recommended">
        <div className="RecommendedTitle">
          <h2>Recommended Parks</h2>
          <h4>These are the recommended popular National Parks in US.</h4>
        </div>
        {parkRecommender()}
      </div>
    </div>
  );
}

export default Search;
