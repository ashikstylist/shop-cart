import React from 'react'
import {AppBar ,Toolbar,Button , makeStyles} from '@material-ui/core'
import {
    Link,
  } from "react-router-dom";
import {useAuth} from '../context/AuthContext'
import {  useHistory } from "react-router-dom"


const useStyles = makeStyles((theme) => ({

    
    header: {
        background : 'white',
        boxShadow : 'none',
        paddingTop: "15px"
    },

    button: {
        fontSize : '15px',
        textAlign : 'center',
        textTransform: 'capitalize',
        fontFamily: 'Roboto Condensed',
        margin: '5px'
    },

    toolbar :{
        margin: 'auto',
    },

    link :{
        textDecoration : 'none',
        color: 'inherit'
    }

}))

export default function Header(){
        const classes = useStyles()
        const history = useHistory()
        const {currentUser, logout} = useAuth()
        const [error, setError] = React.useState('')
        const [button, setButton] = React.useState('');

        
        React.useEffect(() => {
            if (currentUser){
                setButton(
                    <Link className={classes.link} to='/authentication'><Button variant='contained' className={classes.button}  onClick={handleLogout} color="secondary">Logout</Button></Link>
                )
            }
            else{
                setButton(
                    <Link className={classes.link} to='/authentication'><Button className={classes.button} color="dark">Register/Login</Button></Link>
                )
            }
          }, [currentUser])

           
        

        async function handleLogout() {
            setError("")
        
            try {
              await logout()
              history.push("/authentication")
            } catch {
              setError("Failed to log out")
            }
          }

        return (

           
            <div>
              <AppBar className={classes.header} position="static">
                <Toolbar className={classes.toolbar}>
                    <Link className={classes.link} to='/'><Button className={classes.button} >Home</Button></Link> 
                    <Link className={classes.link} to='/about'><Button className={classes.button} color="dark">About</Button></Link> 
                    <Link className={classes.link} to='/contact'><Button className={classes.button} color="dark">Contact Us</Button></Link> 
                    {button}
                </Toolbar>
              </AppBar>
           
            </div>
            
        )
    }

