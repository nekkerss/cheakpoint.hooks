// import React from 'react'
// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
import { CardActionArea, Card, CardMedia, CardContent, Typography } from '@mui/material';
import '../App.css';

export const Moviecard = ({ movies: { name, time, directedby, producedby, pic, type } }) => {
    return (
        <div>
            <Card sx={{ Width: 300 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="450"
                        image={pic}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            type movie :{type}<br />
                            time line :{time}<br />
                            directed by: {directedby}<br />
                            produced by :{producedby}<br />
                            {/* <div className='rzerez'>

                            </div> */}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>

    )
}
