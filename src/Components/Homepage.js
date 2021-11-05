import React from 'react'
import {makeStyles, Container, Grid , Paper, Divider } from '@material-ui/core'
import Particles from './Particle';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import shoeImage from './img/shoe.jpg';
import bagImage from './img/bag.jpg';
import teesImage from './img/tees.webp';
import pantImage from './img/pant.jpg';
import Wave from './Wave';
import {
    Link,
  } from "react-router-dom";


const useStyles = makeStyles({
    container : {
        fontFamily: 'Roboto Condensed',
        "@media (max-width: 900px)": {
            padding : '0px'
        },
    },

    banner : {
       position : 'relative',
       top: '-30px',
       
    },

    

    image1 : {
        backgroundImage: 'url("https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/03/11/12/best-mens-running-shoes-2020-indybest.jpg")',
        height:'600px',
        width : '100%',
        backgroundRepeat : 'no-repeat',
        backgroundPosition : 'center',
        backgroundSize : 'cover',
        
    },
    image2 : {
        backgroundImage: 'url("https://s3.amazonaws.com/pas-wordpress-media/content/uploads/2018/04/19150705/clothing-line.jpg")',
        height:'600px',
        width : '100%',
        backgroundRepeat : 'no-repeat',
        backgroundPosition : 'center',
        backgroundSize : 'cover'
    },
    image3 : {
        backgroundImage: 'url("https://images.unsplash.com/photo-1508057198894-247b23fe5ade?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80")',
        height:'600px',
        width : '100%',
        backgroundRepeat : 'no-repeat',
        backgroundPosition : 'center',
        backgroundSize : 'cover'
    },

    paper: {
        padding: '20px',
        textAlign: 'center',
      },
    
    gridContainer: {
        "@media (max-width: 900px)": {
            display : 'block',
            maxWidth: '100%',
            margin: 'auto'
        },
      },

    gridItems: {
        "@media (max-width: 900px)": {
            maxWidth: '100%'
        },
      },

    shoeImg: {
        maxWidth : '15rem',
        "@media (max-width: 900px)": {
            maxWidth: '8rem'
        },
    },

    bagImg: {
        maxWidth : '14.1rem',
        "@media (max-width: 900px)": {
            maxWidth : '7.5rem',
        },
    },

    teesImg: {
        maxWidth : '10.6rem',
        "@media (max-width: 900px)": {
            maxWidth : '6rem',
        },
    },

    pantImg: {
        maxWidth : '8.6rem',
        "@media (max-width: 900px)": {
            maxWidth : '4.8rem',
        },
    },

    LookForGridcontainer: {
        width: 'auto',
        margin: 0
    }
    

})



export default function Homepage() {
    const classes = useStyles()
        return (
            
            <div>
                <Container className={classes.container}>

                    <div className={classes.banner}>
                        <Carousel>
                            <div className={classes.image1}>
                                <p className="legend">Shoes</p>
                            </div>
                            <div className={classes.image2}>
                                <p className="legend">Clothes</p>
                            </div>
                            <div className={classes.image3}>
                                <p className="legend">Watches</p>
                            </div>
                        </Carousel>
                    </div>
               
                
                <h2 style={{textAlign: 'center', marginTop: '-30px', fontWeight: 'lighter', padding: '0px 30px 0px 30px'}}>
                    <span style={{fontSize: '50px' , color:'#651fff' }} className="material-icons">format_quote</span>
                    <br />
                    It started with a simple idea: Create quality, well-designed products that I wanted myself.
                </h2>
                <br />
                <br />
                <Grid className={classes.gridContainer} container spacing={3}>
                    <Grid className={classes.gridItems} item xs={3}>
                        <Paper className={classes.paper} elevation={3}  >
                            <span style={{fontSize: '60px', color:'#651fff' }} class="material-icons">speed</span>
                            <br />
                            <div style={{ color:'#222' }} >Free Delivery<br />
                            For all oders over $99 </div>
                        </Paper>
                    </Grid>
                    <Grid className={classes.gridItems}  item xs={3}>
                        <Paper className={classes.paper} elevation={3}  >
                            <span style={{fontSize: '60px', color:'#651fff' }} class="material-icons">refresh</span>
                            <br />
                            <div style={{ color:'#222' }} >Free Returns<br />
                            If our product is damaged </div>
                        </Paper>
                    </Grid>
                    <Grid className={classes.gridItems}  item xs={3}>
                        <Paper className={classes.paper} elevation={3} >
                            <span style={{fontSize: '60px', color:'#651fff' }} class="material-icons">credit_card</span>
                            <br />
                            <div style={{ color:'#222' }} > Secure Payment<br />
                            Encrypted peer-to-peer </div>
                        </Paper>
                    </Grid>
                    <Grid className={classes.gridItems}  item xs={3}>
                        <Paper className={classes.paper} elevation={3} >
                            <span style={{fontSize: '60px', color:'#651fff' }} class="material-icons">support_agent</span>
                            <br />
                            <div style={{ color:'#222' }} >24/7 Support<br />
                             Dedicated support</div>
                        </Paper>
                    </Grid>
                </Grid>

                <br />
                <br />
                </Container>
                <Wave />
                <Divider light />
                <Particles />
                <Container className={classes.container}>
                    <br/>
                    <h1 style={{textAlign: 'center'}}>Looking for</h1>
                    <br />
                    <Grid className={classes.LookForGridcontainer} container spacing={2}>
                        <Grid  item  xs={6} lg={3}>
                            <Link style={{textDecoration :'none'}} to='/shoes'>
                                <Paper className={classes.paper} elevation={3} >
                                    <img className={classes.shoeImg} src={shoeImage}  alt="..." />

                                    <br />
                                    <h3 style={{ color:'#222', fontWeight: 'lighter' }} >Shoes</h3>
                                </Paper>
                            </Link>
                        </Grid>
                        <Grid  item xs={6} lg={3}>
                            <Paper className={classes.paper} elevation={3} >
                                <img className={classes.bagImg} src={bagImage}  alt="..." />

                                <br />
                                <h3 style={{ color:'#222', fontWeight: 'lighter' }} >Bags</h3>
                            </Paper>
                        </Grid>
                        <Grid  item xs={6} lg={3}>
                            <Paper className={classes.paper} elevation={3} >
                                <img className={classes.teesImg} src={teesImage}  alt="..." />

                                <br />
                                <h3 style={{ color:'#222', fontWeight: 'lighter' }} >Tees</h3>
                            </Paper>
                        </Grid>
                        <Grid  item xs={6} lg={3}>
                            <Paper className={classes.paper} elevation={3} >
                                <img className={classes.pantImg} src={pantImage}  alt="..." />

                                <br />
                                <h3 style={{ color:'#222', fontWeight: 'lighter' }} >Pant</h3>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </div> 
        )
    
    
}
