import React from "react";
import { Grid, Box, Avatar } from '@mui/material'
import logo from './../../assets/logo.png'
import styles from './search.module.css'
import { SearchBar } from "../SearchBar";

export const SearchPage = () => {

    return (
        <Grid>
            <Box style={{ display: "flex", justifyContent: "center", marginTop: "70px" }}>
                <Avatar src={logo} style={{ width: "200px", height: "200px" }} />
            </Box>
            <Box style={{
                textAlign: "center",
                color: "rgb(40, 30, 50)",
                marginBottom: "30px",
            }}>
                <h2 className={styles.search_title}>The Weaher App</h2>
                <h3 className={styles.search_subtitle}>Get weather data from all over the world</h3>

                <Box style={{
                    display: "flex", justifyContent: "center", marginTop: "20px"}}>
                    <SearchBar />
                </Box>
            </Box>
        </Grid>
    )
}