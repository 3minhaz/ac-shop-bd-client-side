import { CircularProgress, Container, Grid, Paper, Rating, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';


const Review = () => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch('https://aqueous-citadel-84780.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                setIsLoading(false)
            })
    }, [])
    console.log(reviews);
    return (
        <Container sx={{ mb: 6 }}>
            <h2 style={{ color: 'orange', marginBottom: 30, fontSize: 35 }}>Product Review</h2>
            {isLoading && <CircularProgress />}
            <Grid container spacing={2}>
                {reviews.map(review => <Grid key={review._id} item xs={12} md={4}>
                    <Paper elevation={3}>
                        <Typography component="legend">{review.userName}</Typography>
                        <Typography component="legend">{review.details}</Typography>
                        <Rating name="read-only" value={review.rating} readOnly />
                    </Paper>
                </Grid>)}
            </Grid>
        </Container>
    );
};

export default Review;