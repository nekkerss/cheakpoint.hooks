import './App.css';
import { useState } from 'react';
import { Movielist } from './companet/Movielist';
import { moviedata } from './companet/Moviedata';
import Addmovie from './companet/Addmovie';
import Filter from './companet/Filter'
import Footer from './companet/footer';
import { Routes, Route } from "react-router-dom"
import Movieinfo from './companet/Movieinfo';

function App() {
  const [movies, setmovies] = useState(moviedata)
  const [filterbyname, setFilterbyname] = useState("")
  const [typeby, setTypeby] = useState("")
  console.log("aaaa", filterbyname);
  console.log("zzzzz", typeby);

  return (
    <div className='App'>
      <Filter
        typeby={typeby}
        setTypeby={setTypeby}
        setFilterbyname={setFilterbyname} />
      <br />
      <Routes>
        <Route path="/" element={<Movielist movies={movies} key={Math.floor}
          filterbyname={filterbyname} typeby={typeby}
        />} />
        <Route path='/add' element={<Addmovie setmovies={setmovies} movies={movies} />} />
        <Route path='/:name' element={<Movieinfo movies={movies} />}/>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
