import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Icon from './Icon/Icon';

const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 4}}>
          <AppBar position="static">
            <Toolbar sx={{ backgroundColor: 'black', color:'white' }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Icon />
            
            </Toolbar>
          </AppBar>
        </Box>
      );
}

export default Navbar;