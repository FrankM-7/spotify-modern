import React from "react";
import PropTypes from "prop-types";

const ResultsItem = ({ title, img, handleClick }) => {
  return (
    <div className="result-item">
      {img ? (
        <img
          className="result-item-img"
          src={img.url}
          alt={title}
          onClick={handleClick}
        />
      ) : (
        <div
          onClick={handleClick}
        />
      )}
      <div className="result-song-info" onClick={handleClick}>
        <div className="result-song-title" onClick={handleClick}>
          {title}
        </div>
        <div className="result-song-artist" onClick={handleClick}>
          Post Malone
        </div>
      </div>
    </div>
  );
};

ResultsItem.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.shape({
    url: PropTypes.string,
  }),
  handleClick: PropTypes.func.isRequired,
};

export default ResultsItem;
