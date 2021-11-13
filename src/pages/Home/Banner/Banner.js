import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import img from '../../../images/realistic-living-room-interior-light-tones_98292-7170.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className="bg-img" >
            <Typography sx={{ p: 3, margin: '0 auto' }} variant="body2">
                <Box sx={{ typography: 'body1', textAlign: 'left', marginLeft: 5, fontSize: 40, color: 'rgb(50 106 109)' }}> Buy your AC </Box>
                <Box sx={{ typography: 'body1', textAlign: 'left', marginLeft: 5, fontSize: 40, color: 'rgb(40 106 109)' }}>  Enjoy next day delivery </Box>
                <Box sx={{ typography: 'body1', textAlign: 'left', marginLeft: 5, fontSize: 40, color: 'rgb(50 106 109)' }}> Maximum warranty of five years </Box>
                <Box sx={{ typography: 'body1', textAlign: 'left', marginLeft: 5, fontSize: 80, color: 'black' }}> Keeping Cool <br />reality is easy </Box>


            </Typography>
        </div>
    );
};

export default Banner;