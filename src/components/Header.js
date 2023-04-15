import { AppBar, Icon, IconButton, Toolbar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import React from 'react';
import { Link } from 'react-router-dom';


export const Header = () =>{
   return(
    <div>
        <AppBar sx={{bgcolor:"darkcyan"}}><Toolbar><Link to='/'><IconButton><Icon><HomeIcon /></Icon></IconButton></Link>Covid19 Tracker</Toolbar></AppBar>
    </div>
   )
}