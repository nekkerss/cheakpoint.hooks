import React from 'react'
import { Moviecard } from './Moviecard'
import { Link } from 'react-router-dom'
export const Movielist = ({movies,filterbyname,typeby}) => {
return (<div className='listt'>
    {
        movies.filter(movie => movie.name.toLowerCase().trim().includes(filterbyname.toLowerCase().trim())
        && ( typeby ? movie.type === typeby : movie.type !== undefined)).map((movies,index) => {
            return (<Link to={movies.name}  key={index}>
             <Moviecard movies={movies} key={index}/></Link>)
        })
    }
    
    </div>
)
}
