import React from 'react'
import {makeStyles,  Container, Grid, Divider } from '@material-ui/core'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';




const useStyles = makeStyles((theme) => ({

    footer : {
        fontFamily: 'Roboto Condensed',
        marginTop : '100px',
        background: theme.palette.secondary.main,
        width: '100%',
        color: 'white'
       
    },

    footerCredits : {
        textAlign: 'center',
        padding: '25px',
        "@media (max-width: 900px)": {
            marginBottom : '50px',
            padding: '25px 0px 50px 0px',
        },
    }

    
}))

function Footer() {
    const classes = useStyles()
    return (
        <div className={classes.footer}>
        <Container>
            <Grid container spacing={2}>
                    <Grid  item  xs={12} md={4} lg={4}>
                        <br/>
                        <h1 style={{fontWeight:'lighter'}}>Contact Us</h1>
                        <span class="iconify" data-icon="mdi:whatsapp" data-inline="false"></span> Whatsapp us 24/7 
                        <h2 >+1 (123)-124-1234</h2>
                        <br/>
                        <span class="iconify" data-icon="mdi:email" data-inline="false"></span> Support mail
                        <h2 >support@website.com</h2>
                        <FacebookIcon />
                        <InstagramIcon />
                    </Grid>
                    <Grid  item  xs={12} md={4} lg={4}>
                        <br/>
                        <h1> Quick Links</h1>
                        <ul style={{listStyleType:'none' , lineHeight: '30px'}}>
                        <li>FAQ</li>
                        <li>Privacy policy</li>
                        <li>Refunds</li>
                        <li>Returns &amp; Cancellations</li>
                        <li>Shipping &amp; Delivery</li>
                        </ul>
                    </Grid>
                    <Grid  item  xs={12} md={4} lg={4}>
                        <br/>
                        <h1> News Letter</h1>
                        Subcribe to get information about products &amp; coupons
                        <form className={classes.root} noValidate autoComplete="off">
                            <br />
                            <TextField size="small" style={{background: '#424242 '}} id="filled-basic" label="Email" variant="filled" color='primary' />               
                            <Button color='primary' style={{height: '48px' }} variant="contained">
                            Submit
                            </Button>
                        </form>
                        
                    </Grid>
            </Grid>
        </Container>
        <br />
        
        <Divider light />
        <div className={classes.footerCredits}>
             © 2020. All Rights Reserved
        </div>
        </div>
    )
}

export default Footer
