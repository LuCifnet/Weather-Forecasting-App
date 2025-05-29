// Task 1: Project Setup and Basic Types

type TemperatureUnit = "Celsius" | "Fahrenheit" | "Kelvin";

const API_BASE_URL: string = "https://api.openweathermap.org";
const DEFAULT_TIMEOUT: number = 5000;
const ENABLE_CACHING: boolean = true;
const DEFAULT_UNIT: TemperatureUnit = "Celsius";

console.log("Weather App Config:");
console.log({
    API_BASE_URL,
    DEFAULT_TIMEOUT,
    ENABLE_CACHING,
    DEFAULT_UNIT
});

