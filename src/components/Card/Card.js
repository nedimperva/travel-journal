import React from "react";
import "./Card.css";
import locationIcon from "../../images/location.png";
function Card({
  title,
  location,
  googleMapsUrl,
  startDate,
  endDate,
  description,
  imageUrl,
}) {
  return (
    <div className="card">
      <div className="card__image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="card__content">
        <div className="content--location">
          <img src={locationIcon} alt="Location Icon" width={15} height={20} />
          <p>{location}</p>
          <a href={googleMapsUrl} target="_blank">
            View on Google Maps
          </a>
        </div>
        <h1 className="content--title">{title}</h1>
        <div className="content--date">
          <span>{startDate}</span>
          <span> - </span>
          <span>{endDate}</span>
        </div>
        <span className="content--description">{description}</span>
      </div>
    </div>
  );
}

export default Card;
