import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="bg-img" >
            <Typography sx={{ p: 1, }} variant="body2">
                <Box className="custom-color" sx={{ typography: 'body1', textAlign: 'left', marginLeft: 5, color: 'rgb(50 106 109)' }}> Buy your AC </Box>
                <Box className="custom-color" sx={{ typography: 'body1', textAlign: 'left', marginLeft: 5, color: 'rgb(40 106 109)' }}>  Enjoy next day delivery </Box>
                <Box className="custom-color" sx={{ typography: 'body1', textAlign: 'left', marginLeft: 5, color: 'rgb(50 106 109)' }}> Maximum warranty of five years </Box>
                <Box className="custom-color2" sx={{ typography: 'body1', textAlign: 'left', marginLeft: 5, color: 'black' }}> Keeping Cool <br />reality is easy </Box>
            </Typography>
        </div>
    );
};

export default Banner;