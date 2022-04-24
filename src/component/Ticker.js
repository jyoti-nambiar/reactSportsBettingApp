import React, { useState, useEffect } from "react";

const Ticker = (props) => {
  const baseUrl = "https://www.unibet.com/betting#/event/live/";
  const dateTime = props.dateTime.split("T");
  const date = dateTime[0];
  const time = dateTime[1];
  const [eventDate, setEventDate] = useState();

  useEffect(() => {
    const matchDate = () => {
      let today = new Date();
      let currentdate =
        today.getFullYear() +
        "-" +
        String(today.getMonth() + 1).padStart(2, "0") +
        "-" +
        String(today.getDate()).padStart(2, "0");

      if (currentdate == date) {
        setEventDate("today");
      } else {
        setEventDate(date);
      }
    };

    matchDate();
  }, []);

  return (
    <div className="ticker_container">
      <div className="ticker_container">
        <h2 className="ticker__score">
          {props.score && `${props.score.home} - ${props.score.away}`}
        </h2>
        <img
          src={process.env.PUBLIC_URL + "/assets/images/icons/default.png"}
          alt="sport-icon"
        />
        <span className="ticker__teams">{`${props.homeTeam}-${props.awayTeam}`}</span>

        <p className="ticker__timer">
          {eventDate} <span>, {time}</span>
        </p>
        <a
          href={`${baseUrl}.${props.eventId}`}
          target="_blank"
          rel="noreferrer"
        >
          Place a bet
        </a>
      </div>
    </div>
  );
};
export default Ticker;
