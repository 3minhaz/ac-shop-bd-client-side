import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import { Link } from "react-router-dom"
import useAuth from '../../../hooks/useAuth';

const drawerWidth = 180;

const Navigation = (props) => {
    const { user, logout, isAdmin } = useAuth();
    const { window } = props;
    const container = window !== undefined ? () => window().document.body : undefined;

    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{ backgroundColor: 'darkCyan', }} position="static">
                <Toolbar>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        AC SHOP BD
                    </Typography>
                    <Link to='/home' style={{ textDecoration: 'none', color: 'white', margin: 5 }}>Home</Link> <br />
                    <Link to='/explore' style={{ textDecoration: 'none', color: 'white', margin: 5 }}>Explore</Link>
                    {
                        user.email ? <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Link to='/dashboard' style={{ textDecoration: 'none', color: 'white', margin: 8 }}>Dashboard</Link> <br />
                            <Button onClick={logout} variant="contained">logout</Button>
                        </div> :
                            <Link to='/login' style={{ textDecoration: 'none', color: 'white' }}>Login</Link>
                    }
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            // backgroundColor: 'black',
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {
                            <Box sx={{ m: 2 }}>
                            </Box>
                        }
                    </Drawer>

                </Toolbar>

            </AppBar>

        </Box >
    );
};

export default Navigation;