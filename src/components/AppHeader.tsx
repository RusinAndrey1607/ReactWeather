import React from "react";
import { AppBar, Avatar, Toolbar, Grid } from '@mui/material'
import logo from './../assets/logo.png'
import { Link } from 'react-router-dom'


export const AppHeader = () => {
    return (
        <AppBar position="static">
            <Toolbar style={{
                padding: "0 24px"
            }}>
                <Grid container alignItems="center">
                    <Grid style={{
                        marginRight: "15px",
                    }}>
                        <Link to="/search"><Avatar src={logo} /></Link>
                    </Grid>
                    <Grid style={{
                        marginRight: "15px",
                    }} >
                        <Link to="/search" style={{
                            color: "inherit",
                            textDecoration: "none",
                            fontWeight: "500",
                        }}> Search </Link>

                    </Grid>
                    <Grid style={{
                        marginRight: "15px",
                    }}>
                        <Link to="/about" style={{
                            color: "inherit",
                            textDecoration: "none",
                            fontWeight: "500",

                        }}> About </Link>

                    </Grid>


                </Grid>
            </Toolbar>
        </AppBar>
    )
}