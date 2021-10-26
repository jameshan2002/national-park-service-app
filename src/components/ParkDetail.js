//Gives deep view of all the parks releated to the selected activity by user.

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ParkDetail({ match }) {
  const [park, setPark] = useState({ parks: [] });

  useEffect(() => {
    fetchItem();
  }, []);

  // Returns the API of /activities/parks, which is all the parks releated to activity user selected.
  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://developer.nps.gov/api/v1/activities/parks?id=${match.params.id}&api_key=Dte9gvfWpb7italce4QVy54ICLbGKHU1v0P48y2o`
    );
    const item = await fetchItem.json();
    setPark(item.data[0]);
  };

  return (
    <div className="ParkDetail">
      {/* Title */}
      <h1>{park.name}</h1>
      <p className="found">Total {park.parks.length} parks found</p>
      {/* Finds all parks related to the activity */}
      <div className="Container">
        {park.parks.map((item) => (
          <div className="parkEach" key={item.parkCode}>
            <h4>{item.designation}</h4>
            <Link
              to={`/national-park-service-app/park/parkCode=${item.parkCode}`}
              style={{ textDecoration: "none" }}
            >
              <h3 key={item.parkCode}>{item.name}</h3>
            </Link>
            <p key={item.states}>State: {item.states.slice(0, 39)}</p>
            <hr></hr>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ParkDetail;
