import React from 'react'
import {makeStyles, } from '@material-ui/core'
import {Link} from "react-router-dom"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import HomeIcon  from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Sidebar from './Sidebar';






const useStyles = makeStyles((theme) => ({
 
    
    appBar: {
        display : 'none',
        "@media (max-width: 900px)": {  
            display : 'block',       
            top: 'auto',
            bottom: 0,
            background : '#262626',
        },
    },

    fabButton: {
      position: 'absolute',
      zIndex: 1,
      top: -30,
      left: 0,
      right: 0,
      margin: '0 auto',
      color : '#fff'
    },

    toolbar: {
        justifyContent: 'space-around',
      },

  }))


export default function FooterAppbar() {
    const classes = useStyles();
    return (
            
            <div>
                
              
                 <AppBar position="fixed" color="primary" className={classes.appBar}>
                    <Toolbar className={classes.toolbar}>
                    <IconButton color="inherit">
                        <Sidebar />
                    </IconButton>
                    <IconButton color="inherit">
                        <SearchIcon />
                    </IconButton>
                    <div></div>
                    <div></div>
                    <IconButton color="inherit">
                        <ShoppingCartIcon />
                    </IconButton>
                    <IconButton color="inherit">
                        <PersonIcon />
                    </IconButton>
                    </Toolbar>
                    <Link to='/'><Fab size="secondary" color='primary'   aria-label="add" className={classes.fabButton}>
                        <HomeIcon  />
                    </Fab></Link>
                    
                </AppBar>

                
                
            </div> 
        )
    
    
}
