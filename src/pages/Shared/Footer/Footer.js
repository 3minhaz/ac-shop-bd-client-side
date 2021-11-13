import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#f8f8f8' }}>
            <Container>
                <Grid container spacing={2} className="footer">
                    <Grid className="col-md-4" md={4} >
                        <h2>AC SHOP BD</h2>
                        <p>To work at their best, ACs need to be looked after. With regular cleaning and sanitation you’ll not only keep your unit’s efficiency high and its running costs low, but also improve the air quality around you. </p>
                        <li></li>
                        <li></li>
                    </Grid>
                    <Grid className="col-md-4" md={4}>
                        <h2>NEED TO REACH US</h2>
                        <li>Contact: T : 123 456 789 0 ,(+321) 123 456 7890</li>
                        <li>A : 80 PINE ST, 10TH FLOOR
                            NEW YORK, NY 10005, USA</li>
                        <li>acshopbd@gmail.com</li>

                    </Grid>
                    <Grid className="col-md-4" md={4}>
                        <h2>QUICK LINKS</h2>
                        <li>ABOUT</li>
                        <li>CONTACT</li>
                        <li>GALLERY</li>
                        <li>FAQS</li>
                    </Grid>
                </Grid>
                <hr />
                <h3 className="text-center">Copyright © 2021 AC SHOP BD</h3>
            </Container>
        </div>
    );
};

export default Footer;