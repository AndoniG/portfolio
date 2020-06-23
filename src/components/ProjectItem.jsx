import React from "react";
import PropTypes from "prop-types";
import "../assets/styles/components/projectItem.css";

export default ({ title, description, image, url, last }) => {
  return (
    <div className="project__item">
      <img className="project__item__image" src={image} alt={title} />
      <div className="project__item__content">
        <div className="project__item__description">{description}</div>
        {url && (
          <div className="project__item__action">
            <a href={url} target="_blank">
              {last ? <span>Contact &gt;</span> : <span>Visit site &gt;</span>}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
