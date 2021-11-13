import { Container, Grid, Paper, Rating, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';


const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews);
    return (
        <Container>
            <h2>review</h2>
            <Grid container spacing={2}>
                {reviews.map(review => <Grid key={review._id} item xs={12} md={4}>
                    <Paper elevation={3}>
                        <Typography component="legend">{review.userName}</Typography>
                        <Rating name="read-only" value={review.rating} readOnly />
                    </Paper>
                </Grid>)}
            </Grid>
        </Container>
    );
};

export default Review;