import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const WeatherExtraInfo = ({humidity, wind}) => (
    <div className="weatherExtraInfoCont">
        <span className="extraInfoText">{`Humedad: ${humidity} %`}</span>
        <br></br>
        <span className="extraInfoText">{`Vientos: ${wind} `}</span>
    </div>
);

WeatherExtraInfo.prototype = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}

export default WeatherExtraInfo;