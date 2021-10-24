import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Fade from "react-reveal/Fade";

// Main front of the website, searches the park by using the activity category from API.
function Search() {
  const [items, setItems] = useState([]);
  let history = useHistory();

  useEffect(() => {
    async function fetchItem() {
      const data = await fetch(
        "https://developer.nps.gov/api/v1/activities/parks?&api_key=Dte9gvfWpb7italce4QVy54ICLbGKHU1v0P48y2o"
      );
      const items = await data.json();
      setItems(items.data);
    }
    fetchItem();
  }, []);

  // If the dropdown category is selected, this will lead the website to that category parks
  function handleCategories(value) {
    history.push(`/national-park-service-app/search/${value}`);
  }

  return (
    <body className="back">
      <div className="Search">
        <Fade top cascade>
          <h1>Search the park by finding your activities!</h1>
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
    </body>
  );
}

export default Search;
