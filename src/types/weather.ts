// WeatherCondition
/**
 * Describes possible weather conditions.
 * Used in forecast or hourly data to indicate the current weather.
 */
type WeatherCondition = "sunny" | "cloudy" | "rainy" | "stormy" | "snowy" | "foggy";

// AlertSeverity
/**
 * Defines the severity level of a weather alert.
 */
type AlertSeverity = "minor" | "moderate" | "severe" | "extreme";

/**
 * Represents a valid time range with start and end in ISO string format.
 */
type timeRange = {
    start: string,
    end: string
}

/**
 * Describes different phases of the moon.
 */
type MoonPhase = 
  "New Moon" | 
  "Waxing Crescent" | 
  "First Quarter" | 
  "Waxing Gibbous" | 
  "Full Moon" | 
  "Waning Gibbous" | 
  "Last Quarter" | 
  "Waning Crescent";

// interface

/**
 * Represents wind-related data such as speed, direction, and gusts.
 */
interface WindData {
    speed: number, // Wind speed in km/h or m/s
    directionInDegrees: number, // Direction the wind is coming from, in degrees
    gustSpeed: number // Gust speed in km/h or m/s
}

/**
 * Represents geographic location details.
 */
interface WeatherLocation {
    cityName: string, // Name of the city
    country: string, // Country name
    latitude: number, // Latitude coordinate
    longitude: number, // Longitude coordinate
    timeZone: string // Timezone identifier (e.g., "Asia/Kathmandu")
}

/**
 * Represents a weather alert with type, severity, description, and valid time.
 */
interface WeatherAlert {
    type: string, // Type of alert (e.g., "Thunderstorm", "Flood")
    severity: AlertSeverity, // Severity of the alert
    description: string, // Description of the alert
    validTimeRange: timeRange // Start and end times for the alert validity
}

/**
 * Represents general weather conditions and metrics.
 */
interface WeatherData {
    temperature: number, // Current temperature in Celsius or Fahrenheit
    feelsLike: number, // Perceived temperature
    minTemperature: number, // Daily minimum temperature
    maxTemperature: number, // Daily maximum temperature
    humidity: number, // Humidity percentage
    pressure: number, // Atmospheric pressure in hPa
    wind: WindData, // Wind data (nested object)
    visibility?: number, // Visibility in kilometers (optional)
    uvIndex?: number // UV index value (optional)
}

/**
 * Represents a forecasted weather day with extended properties.
 * Inherits from WeatherData and adds sunrise/sunset, moon phase, and precipitation chance.
 */
interface ForeCastDay extends WeatherData {
    sunrise: string, // Sunrise time (ISO format)
    sunset: string, // Sunset time (ISO format)
    moonphase: MoonPhase, // Moon phase for the day
    chanceOfPrecipitation: number // Probability of precipitation in percentage
}

/**
 * Represents the complete weather API response structure.
 * Includes location, current weather, an array of forecast days, and  alerts.
 */
interface WeatherResponse {
    location: WeatherLocation, // Geographic location
    current: WeatherData, // Current weather data
    forecast: ForeCastDay[], // Array of daily forecast data
    alerts: WeatherAlert[] // array of weather alerts
}
