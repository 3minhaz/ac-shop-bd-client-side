import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom"
import useAuth from '../../../hooks/useAuth';

const drawerWidth = 180;

const Navigation = (props) => {
    const { user, logout } = useAuth();
    const { window } = props;
    const container = window !== undefined ? () => window().document.body : undefined;

    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const nav = (
        <div>
            <Link style={{ textDecoration: 'none', color: 'white', margin: 8 }}>Dashboard</Link>
            <Link style={{ textDecoration: 'none', color: 'white' }}>Login</Link>
        </div>
    )

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    {/* <Drawer
                        variant="permanent"
                        container={container}
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', },
                        }}
                </Drawer>
                    > */}
                    {
                        user.email ? <Box>
                            <Link to='/dashboard' style={{ textDecoration: 'none', color: 'white', margin: 8 }}>Dashboard</Link> <br />
                            <p>{user.displayName}</p>
                            <Button onClick={logout} variant="contained">logout</Button>
                        </Box> :
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
                                {/* <Link style={{ textDecoration: 'none', color: 'black' }}>Dashboard</Link> <br />
                                <Link style={{ textDecoration: 'none', color: 'black' }}>Login</Link> */}
                            </Box>
                        }
                    </Drawer>

                </Toolbar>

            </AppBar>

        </Box >
    );
};

export default Navigation;