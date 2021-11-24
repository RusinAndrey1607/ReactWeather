import React, { useState, useContext } from "react";
import { Box, TextField, Button } from '@mui/material';
import { Context } from '../App'
import { useHistory} from 'react-router-dom'


export const SearchBar = () => {
  const [value, setValue] = useState('')
  //@ts-ignore
  const { setCity } = useContext(Context)
  const history = useHistory()
  const OnClick = () => {
    setCity(value)
    history.push(`/forecast?city=${value}`)
    setValue('')
  }
  return (
    <Box
      component="form"
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom:"20px",
      }}
    >
      <TextField value={value} id="outlined-basic" onChange={(e) => setValue(e.target.value)} variant="outlined" placeholder="Please enter the city" />
    
      <Button onClick={OnClick} variant="contained" style={{ height: "55px", marginLeft: "10px" }}> Get Weather</Button>

    </Box>
  )
}