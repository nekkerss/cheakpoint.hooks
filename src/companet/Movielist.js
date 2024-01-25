import React from 'react'
import { Moviecard } from './Moviecard'
export const Movielist = ({movies,filterbyname,typeby}) => {
return (<div className='listt'>
    {
        movies.filter(movie => movie.name.toLowerCase().trim().includes(filterbyname.toLowerCase().trim())
        && ( typeby ? movie.type === typeby : movie.type !== undefined)).map((movies,index) => {
            return <Moviecard movies={movies} key={index}/>
        })
    }
    
    </div>
)
}
