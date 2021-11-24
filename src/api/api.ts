import axios from "axios"

const API_KEY = "67310b22c553467287a145649210911"


type locationType = {
    "name": string
    "region": string
    "country": string
    "lat": number
    "lon": number
    "tz_id": string
    "localtime_epoch": number
    "localtime": string
}

type currentType = {
    "temp_c": number
    "temp_f": number
    "is_day": number
    "condition": {
        "text": string
        "icon": string
        "code": number
    },
    "wind_kph": number
    "pressure_mb": number
    "precip_mm": number
    "humidity": number
    "cloud": number
    "uv": number
}

type conditionType = {
    condition:{}
}
export type forecastDayType = {
    "date": string
    "day": {
        "maxtemp_c": number
        "maxtemp_f": number
        "mintemp_c": number
        "mintemp_f": number
        "maxwind_kph": number
        "totalprecip_mm": number
        "avghumidity": number
        "daily_will_it_rain": number
        "daily_will_it_snow": number
        "condition": {
            "text": string
            "icon": string
            "code": number
        }
    }
    "astro": {}
    "hour": Array<conditionType>
}

type forecastType = {
    forecastday: Array<forecastDayType>
}

export type weatherDataType = {
    location: locationType
    current: currentType
    forecast: forecastType
}

export const getWeatherData = (city: string | null) =>{
    return axios.get<weatherDataType>(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=3&aqi=no&alerts=no`).then(res => res)
}