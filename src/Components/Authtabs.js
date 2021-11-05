import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Tabs, TextField, Divider, Button } from '@material-ui/core';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {useAuth} from '../context/AuthContext'
import Alert from '@material-ui/lab/Alert';
import {  useHistory } from "react-router-dom"





function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '75px',
    
  },
  tab :{
      background: '#ffffff',
      boxShadow: 'none',
  },
  textField:{
      width:'80%',
  }
}));

export default function CenteredTabs()  {
  const classes = useStyles();
  const theme = useTheme();
  const [regError, setRegError] = React.useState('');
  const [logError, setLogError] = React.useState('');
  const [emailField, setEmailField] = React.useState(false);
  const [passField, setPassField] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const {signup,login, currentUser } = useAuth()
  const emailregRef = React.useRef();
  const passregRef = React.useRef();
  const emaillogRef = React.useRef();
  const passlogRef = React.useRef();
  const confirmpassRef = React.useRef();
  const history = useHistory()

  const handleLogSubmit = (e) => {
    e.preventDefault()
   
      setLogError('')
      
     if( emaillogRef.current.value === ''  ||  passlogRef.current.value === ''){
        setLogError('All fields are required')
        setEmailField(false)
        setPassField(false)
        setEmailField(true)
        setPassField(true)
      }
      else{
        login(emaillogRef.current.value, passlogRef.current.value)
        .catch(function(error) {
          
          var errorCode = error.code;
          var errorMessage = error.message;
         
          if(errorCode === 'auth/user-not-found'){
            errorMessage = 'User account not found'
          }
          if(errorCode === 'auth/wrong-password'){
            errorMessage = 'Invalid password'
          }
          if(errorMessage){
            console.log(errorCode)
            setEmailField(true)
            setPassField(true)
            setLogError(errorMessage)
          }
        });
      }
        
  }


  const handleRegSubmit = (e) => {
    e.preventDefault()

      
      setRegError('')
          
      
      if(passregRef.current.value === confirmpassRef.current.value ){

        if( emailregRef.current.value === ''  ||  passregRef.current.value === '' ||  confirmpassRef.current.value === ''){
          setRegError('All fields are required')
          setEmailField(false)
          setPassField(false)
          setEmailField(true)
          setPassField(true)
        }
        else{

                signup(emailregRef.current.value, passregRef.current.value)
                .catch(function(error) {
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  
                  
                  if (errorCode === 'auth/email-already-in-use' || errorCode === 'auth/invalid-email' ) {
                    setEmailField(true)
                  }
                  else{
                    setEmailField(false)
                  }
                  
                  if ( errorCode === 'auth/weak-password') {
                    setPassField(true)
                  }
                  else{
                    setPassField(false)
                  }
                  
                  if(errorMessage) {
                    setRegError(errorMessage)
                  }
                })

          }
       
        }
        else{
            
          setRegError('Password do not match')
          setPassField(true)
        }
    
  }

  React.useEffect(() => {
    if(currentUser){
      history.push("/")
    }
  },[currentUser])

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setRegError('')
    setLogError('')
    setEmailField(false)
    setPassField(false)
        
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
        <Tabs
          className = {classes.tab}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered

        >
          <Tab style={{textTransform: 'capitalize'}}  label="Login" {...a11yProps(0)} />
          <Tab style={{textTransform: 'capitalize'}}  label="Register" {...a11yProps(1)} />
        </Tabs>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {currentUser && currentUser.email}
          
        {logError && <Alert style={{margin: '20px'}} severity="error">{logError}</Alert>}
            <form  onSubmit={handleLogSubmit}  noValidate autoComplete="off">
            
            <Box textAlign='center'>
                <img style={{maxWidth: '3rem'}} src='https://www.clipartmax.com/png/full/22-224447_neukundengewinnung-kundenbindung-icono-login.png' alt='login' />
                <br />
                <span>Login</span>
                <br /><br />
                <TextField inputRef={emaillogRef} error={emailField}   className={classes.textField} type='email' id="outlined-basic" label="Email" variant="outlined" required='true'/>
                <br /><br />
                <TextField inputRef={passlogRef} error={passField}   className={classes.textField} type='password' id="outlined-basic" label="Password" variant="outlined" required='true'/>
                <br /><br />
                    <Button type='submit' style={{textTransform: 'capitalize'}} size="large" variant="contained" color="secondary">
                        Submit
                    </Button>
                    
                    <br /><br />
                </Box>
            </form>
        </TabPanel>
        <TabPanel  value={value} index={1} dir={theme.direction}>
          
        {regError && <Alert style={{margin: '20px'}} severity="error">{regError}</Alert>}
         
        <form onSubmit={handleRegSubmit}   noValidate autoComplete="off">
          
            <Box textAlign='center'>
                    <img style={{maxWidth: '3rem'}} src='https://www.pngkey.com/png/full/359-3595673_email-and-social-login-system-login-icon-for.png' alt='login' />
                        <br />
                        <span>Register</span>
                        <br /><br />
                    <TextField inputRef={emailregRef} error={emailField} className={classes.textField} type='email' id="outlined-basic" label="Email" variant="outlined" required='true'/>

                    <br /><br />
                    <Divider />
                    <br />
                    <TextField inputRef={passregRef} error={passField}  className={classes.textField} type='password'  label="Password" variant="outlined" required='true' />

                    <br /><br />
                    <TextField  inputRef={confirmpassRef} error={passField}  className={classes.textField} type='password' label="Confirm Password" variant="outlined" required='true' />
                    <br /><br />
                        <Button type='submit'  style={{textTransform: 'capitalize'}}  size="large" variant="contained" color="secondary" >
                            Submit
                        </Button>
                        <br /><br />
                    </Box>
            </form>
        </TabPanel>
        
      </SwipeableViews>
    </div>
  );
}