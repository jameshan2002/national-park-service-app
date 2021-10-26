//All information about the selected park from ParkDetail.java

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

function ParkInfo({ match }) {
  const [info, setInfo] = useState({
    addresses: [],
    entranceFees: [],
    entrancePasses: [],
    images: [],
    contacts: { emailAddresses: [], phoneNumbers: [] },
    operatingHours: [],
  });
  const [webcam, setWebcam] = useState({
    data: [{ images: [], description: "" }],
  });

  useEffect(() => {
    fetchItem();
    fetchWebcam();
  }, []);

  // Fetching /park API from the park
  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://developer.nps.gov/api/v1/parks?${match.params.id}&api_key=Dte9gvfWpb7italce4QVy54ICLbGKHU1v0P48y2o`
    );
    const item = await fetchItem.json();

    setInfo(item.data[0]);
  };

  // Fetching /webcam API from the park
  const fetchWebcam = async () => {
    const fetchWebcam = await fetch(
      `https://developer.nps.gov/api/v1/webcams?${match.params.id}&api_key=Dte9gvfWpb7italce4QVy54ICLbGKHU1v0P48y2o`
    );
    const cams = await fetchWebcam.json();
    setWebcam(cams);
  };

  //Reads the image from the API
  const imageReader = () => {
    return (
      <div>
        {info.images.slice(0, 1).map((item) => (
          <img
            className="ImageBack"
            src={item.url}
            alt={"sceneary"}
            key={item.url}
          />
        ))}
      </div>
    );
  };

  //Reads the address from the API
  const addressReader = () => {
    return (
      <div>
        <h3>Address</h3>
        {info.addresses.slice(0, 1).map((item) => (
          <p className="Desc" key={item.line1}>
            {item.line1}
            <br />
            {item.line2} {item.line3} {item.city}, {item.stateCode}{" "}
            {item.postalCode}
          </p>
        ))}
      </div>
    );
  };

  //Reads the open time for park from the API
  const openTimeReader = () => {
    return (
      <div>
        <h3>Open Time</h3>
        {info.operatingHours.slice(0, 1).map((item) => (
          <div className="Desc" key={item.standardHours.monday}>
            <p>Monday: {item.standardHours.monday}</p>
            <p>Tuesday: {item.standardHours.tuesday}</p>
            <p>Wednesday: {item.standardHours.wednesday}</p>
            <p>Thursday: {item.standardHours.thursday}</p>
            <p>Friday: {item.standardHours.friday}</p>
            <p>Saturday: {item.standardHours.saturday}</p>
            <p>Sunday: {item.standardHours.sunday}</p>
          </div>
        ))}
      </div>
    );
  };

  //Reads the contact from the API
  const contactReader = () => {
    return (
      <div>
        <h3>Contact</h3>
        <div className="Desc">
          {info.contacts.emailAddresses.map((item) => (
            <p key={item.emailAddress}>Email: {item.emailAddress}</p>
          ))}
          {info.contacts.phoneNumbers.map((item) => (
            <p key={item.phoneNumber}>
              {item.type}: {item.phoneNumber}
            </p>
          ))}
        </div>
      </div>
    );
  };

  //Reads the entrance fee from the API
  const entranceFeeReader = () => {
    if (info.entrancePasses.length !== 0) {
      return (
        <div>
          <h3>Enterance Fees</h3>
          <div className="Desc">
            {info.entranceFees.map((item) => (
              <p key={item.title}>
                {item.title} : ${item.cost}
                {/* <br /> {item.description} */}
              </p>
            ))}
          </div>
        </div>
      );
    }
  };

  //Reads the enterance pass from the API
  const entrancePassReader = () => {
    if (info.entrancePasses.length !== 0) {
      return (
        <div>
          <h3>Enterance Passes</h3>
          <div className="Desc">
            {info.entrancePasses.map((item) => (
              <p key={item.title}>
                {item.title} : ${item.cost}
                {/* <br /> {item.description} */}
              </p>
            ))}
          </div>
        </div>
      );
    }
  };

  //Checking if webcam exists on this park, if it does, return all webcams link on park page.
  const checkWebcam = () => {
    if (webcam.data.length === 0) {
      return <h3>No webcam available</h3>;
    } else {
      return (
        <div>
          <h3>Total of {webcam.data.length} webcams available</h3>
          <div className="webcamAll">
            {webcam.data.map((item) => (
              <div className="webcams" key={item.title}>
                {checkPictures(item)}
                <a href={item.url} target="_blank" rel="noreferrer">
                  {item.title}
                </a>
                <h4>Status: {item.status}</h4>
                <p>{item.description.slice(0, 150)}...</p>
              </div>
            ))}
          </div>
        </div>
      );
    }
  };

  //Finds pictures for webcam POV.
  const checkPictures = (item) => {
    if (item.images.length === 0) {
      return <h3 className="noPicture">No picture available</h3>;
    } else {
      return (
        <div>
          {item.images.map((imgs) => (
            <div className="pictureContainer" key={imgs.url}>
              <img src={imgs.url} alt="landscape" className="webPictures" />
            </div>
          ))}
        </div>
      );
    }
  };
  return (
    <div className="ParkInfo">
      {imageReader()}

      <div className="BasicInfo">
        <h1 className="ParkName">{info.fullName}</h1>
        <p className="Desc">{info.description}</p>

        {addressReader()}
        {openTimeReader()}
        {contactReader()}

        {entranceFeeReader()}
        {entrancePassReader()}
      </div>

      <div className="WebcamInfo">
        <h1>Webcams</h1>
        {checkWebcam()}
      </div>
    </div>
  );
}

export default ParkInfo;
