import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './ExtraSection.css';
import imgOne from '../../../images/section-one.png';
import imgTwo from '../../../images/section-two.png';

const ExtraSection = () => {
    return (
        <>
            <div className="bg-img-two">
            </div>
            <Container sx={{ mt: 4 }}>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={6}>
                        <img width="100%" src={imgOne} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img width="100%" src={imgTwo} alt="" />
                    </Grid>
                    <Grid sx={{ marginTop: '-110px', marginBottom: '80px' }} item xs={12} md={6}>
                        <Paper sx={{ marginLeft: '25px', width: '90%' }}>
                            <Typography variant="h4" gutterBottom >
                                <Box sx={{ typography: 'h2', fontSize: '40px', fontWeight: '500' }}>CoolCare </Box>

                                It’s a 5-year AC warranty and it’s free.
                                Pretty cool, eh? <br />
                                <Button>Learn More</Button>
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid sx={{ marginTop: '-110px', marginBottom: '40px' }} item xs={12} md={6}>
                        <Paper sx={{ marginLeft: '25px', width: '90%' }}>
                            <Typography variant="h4" gutterBottom >
                                <Box sx={{ typography: 'h2', fontSize: '40px', fontWeight: '500' }}>CoolProtect </Box>

                                An AC maintenance plan that does the work for you. <br />
                                <Button>Learn More</Button>
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default ExtraSection;