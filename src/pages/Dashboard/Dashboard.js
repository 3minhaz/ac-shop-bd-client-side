import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { positions } from '@mui/system';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import MakeAdmin from './MakeAdmin/MakeAdmin';
import useAuth from '../../hooks/useAuth';
import AddProduct from './AddProduct/AddProduct';
import { Button } from '@mui/material';
import MyOrders from './MyOrders/MyOrders';
import ReviewOrder from './ReviewOrder/ReviewOrder';
import ManageAllOrders from './ManageAllOrders/ManageAllOrders';
import ManageProducts from './ManageProducts/ManageProducts';

const drawerWidth = 180;

function ResponsiveDrawer(props) {
    let { path, url } = useRouteMatch();
    const { isAdmin, logout } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            {isAdmin && <Box>
                <Link style={{ textDecoration: 'none' }} to={`${url}/makeAdmin`}>Make admin</Link> <br />
                <Link style={{ textDecoration: 'none' }} to={`${url}/addProduct`}>Add Product</Link> <br />
                <Link style={{ textDecoration: 'none' }} to={`${url}/manageAllOrders`}>Manage All Orders</Link> <br />
                <Link style={{ textDecoration: 'none' }} to={`${url}/manageProducts`}>Manage Products</Link> <br />
                <Button onClick={logout}>logout</Button>
            </Box>}
            {!isAdmin && <Box>
                <Link style={{ textDecoration: 'none' }} to={`${url}/pay`}>pay</Link> <br />
                <Link style={{ textDecoration: 'none' }} to={`${url}/myOrders`}>My Orders</Link><br />
                <Link style={{ textDecoration: 'none' }} to={`${url}/review`}>Review</Link><br />
                <Button onClick={logout}>logout</Button>
            </Box>}

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    backgroundColor: 'indigo',
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
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
                    <Typography sx={{ margin: '0 auto' }} variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                {/* <Typography paragraph>
                    sapien faucibus et molestie ac.
                </Typography> */}
                <Switch>
                    {/* <Route exact path={path}>
                        <h3>Please select a topic.</h3>
                    </Route> */}
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </Route>
                    <Route path={`${path}/manageAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </Route>
                    <Route path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <h2>Payment Coming soon</h2>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/review`}>
                        <ReviewOrder></ReviewOrder>
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer;
