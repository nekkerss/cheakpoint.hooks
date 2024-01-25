import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import '../App.css';
const Addmovie = ({ setmovies, movies }) => {
  const [name, setname] = useState("")
  const [directedby, setdirectedby] = useState("")
  const [producedby, setproducedby] = useState("")
  const [type, settype] = useState("")
  const [time, settime] = useState("")
  const [pic, setpic] = useState("")

  const Addmovie = () => {
    setmovies([
      ...movies,
      {
        name,
        time,
        directedby,
        producedby,
        pic,
        type,
      }]
    )
    setname("")
    setdirectedby("")
    setproducedby("")
    settype("")
    setpic("")
    settime("")

  }
  return (
    <FormControl className='control' sx={{ margin: 20, width: 600 }} >
      <TextField label="Movie-name" variant="outlined" fullWidth onChange={(e) => setname(e.target.value)} value={name} /><br />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="type"
          onChange={(e) => settype(e.target.value)}
        >
          <MenuItem value={"action"}>action</MenuItem>
          <MenuItem value={"comedy"}>comedy</MenuItem>
          <MenuItem value={"romance"}>romance</MenuItem>
          <MenuItem value={"kids"}>kids</MenuItem>
          <MenuItem value={"highschool"}>highschool</MenuItem>
        </Select><br />
      </FormControl>
      <TextField label="timeline" variant="outlined" onChange={(e) => settime(e.target.value)} value={time}/> <br />
      <TextField label="directed by" variant="outlined" onChange={(e) => setdirectedby(e.target.value)} value={directedby}/><br />
      <TextField label="produced by" variant="outlined" onChange={(e) => setproducedby(e.target.value)} value={producedby}/><br />
      <TextField label="pic" variant="outlined" onChange={(e) => setpic(e.target.value)} value={pic}/><br />
      <Button variant="contained" onClick={Addmovie}>add movie</Button>
    </FormControl>
  )
}
export default Addmovie