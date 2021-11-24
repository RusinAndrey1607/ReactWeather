import React from "react";
import { Grid, Box, Avatar } from '@mui/material'
import logo from './../../assets/logo.png'
import { Link } from 'react-router-dom'

export const ErrorPage = () => {
    return (
        <Grid>
            <Box style={{ display: "flex", justifyContent: "center", marginTop: "70px" }}>
                <Avatar src={logo} style={{ width: "200px", height: "200px" }} />
            </Box>
            <Box style={{
                textAlign: "center",
                color: "rgb(40, 30, 50)",
            }}>
                <h1>Oops!</h1>
                <h2>Please check the spelling of the location and try <Link to="/search" style={{
                    color: "blue",
                    textDecoration: "none",
                    fontWeight:"500"
                }} >again</Link></h2>
            </Box>
        </Grid>
    )
}