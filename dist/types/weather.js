"use strict";
// ----------------------------------------------------------------------
const weatherData = "sunny";
const AlertData = "severe";
const moonData = "Full Moon";
const time = {
    start: "2025-06-01T08:00:00Z",
    end: "2025-06-01T20:00:00Z"
};
const windDataExample = {
    speed: 8,
    directionInDegrees: 90,
    gustSpeed: 20
};
const locationExample = {
    cityName: "Kathmandu",
    country: "Nepal",
    latitude: 27.7172,
    longitude: 85.3240,
    timeZone: "Asia/Kathmandu",
};
const weatherAlertExample = {
    type: weatherData,
    severity: AlertData,
    description: "A bit cloudy and Going to Rain",
    validTimeRange: time
};
const weatherDataExample = {
    temperature: 26,
    feelsLike: 28,
    minTemperature: 21,
    maxTemperature: 30,
    humidity: 67,
    pressure: 1005,
    wind: windDataExample,
    visibility: 16,
    uvIndex: 0.2
};
const foreCastDayExample = {
    ...weatherDataExample,
    sunrise: "2025-06-01T05:15:00Z",
    sunset: "2025-06-01T19:45:00Z",
    moonphase: moonData,
    chanceOfPrecipitation: 0
};
const WeatherResponseExample = {
    location: locationExample,
    current: weatherDataExample,
    forecast: [foreCastDayExample],
    alerts: [weatherAlertExample]
};
console.log(WeatherResponseExample.forecast);
//------------------------validate---------------------------------------------
