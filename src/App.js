import './App.css';
import { useState } from 'react';
import { Movielist } from './companet/Movielist';
import { moviedata } from './companet/Moviedata';
import Addmovie from './companet/Addmovie';
import Filter from './companet/Filter'

function App(){
  const [movies, setmovies]= useState(moviedata)
  const[filterbyname,setFilterbyname]= useState("")
  const[typeby,setTypeby]= useState("")
  console.log("aaaa",filterbyname);
  console.log("zzzzz",typeby);

  return (
    <div className='App'>
      <Filter 
      typeby={typeby} 
      setTypeby={setTypeby} 
      setFilterbyname={setFilterbyname} 
      
      />
      <br/>
    <Movielist  movies={movies}  key={Math.floor} 
    filterbyname={filterbyname} typeby={typeby}
    />
    <Addmovie setmovies={setmovies} movies={movies}/>
    </div>
  );
}
export default App;
