import React, { useContext, useState, useEffect } from "react";
import { Grid, Box, Avatar, Typography } from '@mui/material'
import { SearchBar } from "../SearchBar";
import styles from './forecast.module.css'
import { Context } from './../../App'
import { getWeatherData, weatherDataType, forecastDayType } from "../../api/api";
import { useHistory, useLocation } from 'react-router-dom'
import { Loader } from "../Loader";


export const ForecastPage = React.memo(() => {
    const [weatherData, setWeatherData] = useState({} as weatherDataType)
    const [loading, setLoading] = useState(false)
    // @ts-ignore
    const { city } = useContext(Context)
    const history = useHistory()
    const queryParams = new URLSearchParams(useLocation().search)
    const setData = (city: string | null) => {
        setLoading(true)
        getWeatherData(city)
            .then(response => {
                setWeatherData(response.data)
                setLoading(false)

            } )
            .catch(response => {
                history.push("/error")
                setLoading(false)
            })
            
    }

    useEffect(() => {
        if (!city) {
            setData(queryParams.get('city'))
        } else {
            setData(city)
        }

    }, [city])
    if(loading){
        return <Loader />
    }
    return (
        <Grid>
            <SearchBar />
            <h2 className={styles.location} > Location : {weatherData.location?.name} / {weatherData?.location?.country} </h2>
            <Box style={{
                color: "rgb(40, 30, 50)",
                padding: "30px 20px",
                background: "rgb(233, 236, 239)",
                borderRadius: "10px",
                marginBottom: "20px"
            }}>
                <h1 className={styles.weather_title}>Today's Weather</h1>
                <Box>
                    <h3 className={styles.option}> Current Temperature : <span className={styles.option_value}> {weatherData.current?.temp_c} °C / {weatherData.current?.temp_f}  °F</span> </h3>
                    <h3 className={styles.option + " " + styles.status}>  Status : <span className={styles.option_value + " " + styles.status_value}> {weatherData.current?.condition.text}</span> <Avatar style={{ width: "40px", height: "40px", marginLeft: "3px" }} src={weatherData.current?.condition.icon} /> </h3>
                    <h3 className={styles.option}>  Humidity : <span className={styles.option_value}> {weatherData.current?.humidity} %</span> </h3>
                    <h3 className={styles.option}>  Wind speed :  <span className={styles.option_value}> {weatherData.current?.wind_kph}  km/h</span> </h3>
                    <h3 className={styles.option}>  Precipitation :  <span className={styles.option_value}> {weatherData.current?.precip_mm} mm</span> </h3>

                </Box>
            </Box>
            <h1 className={styles.forecast_title}>Forecast</h1>

            <Grid container justifyContent="space-between" style={{
                flexBasis: "220px",
                flexGrow: '1',
            }}>
                {weatherData.forecast?.forecastday.map((day: forecastDayType) => <ForecastItem key={day.date} forecast={day} />)}
            </Grid>
        </Grid>
    )


})

const ForecastItem: React.FC<{ forecast: forecastDayType }> = ({ forecast }) => {
    return (
        <Box style={{
            maxWidth: "300px",
            margin: "15px",
            border: "1px solid rgb(0, 0, 0)",
            boxSizing: "border-box",
            padding: "16px"
        }}>
            <Typography align="center" style={{ fontSize: "1.5rem" }}>
                {forecast.date}
            </Typography>
            <Box style={{ display: "flex", justifyContent: "center" }}>
                <Avatar src={forecast.day.condition.icon} style={{ width: "100px", height: "100px" }} />
            </Box>
            <h6 className={styles.parametr}> Status : {forecast.day.condition.text} </h6>
            <h6 className={styles.parametr}> Temperature °C : {forecast.day.mintemp_c} / {forecast.day.maxtemp_c} </h6>
            <h6 className={styles.parametr}> Temperature °F : {forecast.day.mintemp_f} / {forecast.day.maxtemp_f}</h6>
            <h6 className={styles.parametr}> Will rain : {forecast.day.daily_will_it_rain ? "Yes" : "No"} </h6>
            <h6 className={styles.parametr}> Will snow : {forecast.day.daily_will_it_snow ? "Yes" : "No"} </h6>
            <h6 className={styles.parametr}> Precipitation  :  {forecast.day.totalprecip_mm} mm </h6>

        </Box>
    )
}