import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import '../App.css';
import { Link } from 'react-router-dom';

const Movieinfo = ({ movies }) => {
    const { name } = useParams()
    const movie = movies.find((object) => object.name === name)
    console.log(movie);
    return (
        <div className='cardd'>
            <Card sx={{ Width: 10, }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="400"
                        image={movie.pic}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">

                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            type movie :{movie.type}<br />
                            time line :{movie.time}<br />
                            directed by: {movie.directedby}<br />
                            produced by :{movie.producedby}<br />
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <div >
                <iframe width={500} height={400} src={movie.trailer}></iframe>
            </div>
            <Link to="/" >
                <Button sx={{ position: "absolute", bottom: 0, right: 0 }} variant="contained">Go Back Home</Button>
            </Link>
        </div>
    )
}

export default Movieinfo