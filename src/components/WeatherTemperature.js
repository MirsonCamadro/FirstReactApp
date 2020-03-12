import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTipes from 'prop-types';
import {
    CLOUD,
    CLOUDY, 
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../constants/weathers';

const icons = {
    [CLOUDY]: "cloudy",
    [CLOUD]: "cloud",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy",
};

const getWeatherIcon = (weatherState) => {
    const icon = icons[weatherState];
    if (icon)
        return <WeatherIcons name={icon} size="2x" />
    else
        return <WeatherIcons name={"day-sunny"} size="2x" />
};

const WeatherTemperature = ({temperature, weatherState}) => (
    <div>
        {
            getWeatherIcon(weatherState)
        }
        <span>{`${temperature} Cº`}</span>
    </div>
);

WeatherTemperature.propTypes  = {
    temperature: PropTypes.number,
    weatherState:PropTipes.string,
};

export default WeatherTemperature;
