import React from 'react'
import {Container, Paper, makeStyles, Button, Box} from '@material-ui/core'
import { useLocation } from "react-router-dom"
import Header from '../Components/Header'
import HeadTitle from '../Components/HeadTitle'
import FooterAppbar from '../Components/FooterAppbar'
import Footer from '../Components/Footer'
import Grid from '@material-ui/core/Grid';
import { Carousel } from "react-responsive-carousel";
import Rating from '@material-ui/lab/Rating'
import '../Components/css/color_radio.css'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
bg : {
    background : 'rgba(55,33,90,1) url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTI3OXB4IiBoZWlnaHQ9IjY2M3B4IiB2aWV3Qm94PSIwIDAgMTI3OSA2NjMiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5jb21iaW5lZEJHZHJvcHM8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9Ijk5LjAwMzU0MDQlIiB5MT0iNDguODc5NjkyNiUiIHgyPSIxMS4zNzY2MTAxJSIgeTI9IjU5Ljk3OTc4NDYlIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNFRDIzODciIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzM3MjE1QSIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjEyNS43MjEyODklIiB5MT0iMzYuODYxMjc4OSUiIHgyPSItNi40MTk1NDUyOCUiIHkyPSI2OS42NTY4NTc5JSIgaWQ9ImxpbmVhckdyYWRpZW50LTIiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRUQyMzg3IiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzNzIxNUEiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iRHJvcGxldC1TUFAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yLjAwMDAwMCwgLTMzMDQuMDAwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9InVybCgjbGluZWFyR3JhZGllbnQtMikiPgogICAgICAgICAgICA8ZyBpZD0idnMtTUZzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMzEzNi4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJjb21iaW5lZEJHZHJvcHMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LjU2ODU0MiwgMTg0LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNjcuNTk2OTM0LDMyMy41IEMyMDUuNzA0NTgxLDMyMy41IDIzNi41OTY5MzQsMjkyLjYwNzY0OCAyMzYuNTk2OTM0LDI1NC41IEMyMzYuNTk2OTM0LDI0MS43NDgwOTcgMjM2LjU5NjkzNCwyMTguNzQ4MDk3IDIzNi41OTY5MzQsMTg1LjUgQzIwMy4yNTAxMjksMTg1LjUgMTgwLjI1MDEyOSwxODUuNSAxNjcuNTk2OTM0LDE4NS41IEMxMjkuNDg5Mjg2LDE4NS41IDk4LjU5NjkzMzcsMjE2LjM5MjM1MiA5OC41OTY5MzM3LDI1NC41IEM5OC41OTY5MzM3LDI5Mi42MDc2NDggMTI5LjQ4OTI4NiwzMjMuNSAxNjcuNTk2OTM0LDMyMy41IFoiIGlkPSJPdmFsLTUtQ29weS0yIiBzdHJva2Utd2lkdGg9IjMzIiBvcGFjaXR5PSIwLjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2Ny41OTY5MzQsIDI1NC41MDAwMDApIHJvdGF0ZSgtNDUuMDAwMDAwKSB0cmFuc2xhdGUoLTE2Ny41OTY5MzQsIC0yNTQuNTAwMDAwKSAiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTAwNi45MzE0NiwzMDAgQzEwMzIuMDYwNDEsMzAwIDEwNTIuNDMxNDYsMjc5LjYyODk1NiAxMDUyLjQzMTQ2LDI1NC41IEMxMDUyLjQzMTQ2LDI0Ni4wOTExMzYgMTA1Mi40MzE0NiwyMzAuOTI0NDcgMTA1Mi40MzE0NiwyMDkgQzEwMzAuNDQxOSwyMDkgMTAxNS4yNzUyMywyMDkgMTAwNi45MzE0NiwyMDkgQzk4MS44MDI1MDEsMjA5IDk2MS40MzE0NTgsMjI5LjM3MTA0NCA5NjEuNDMxNDU4LDI1NC41IEM5NjEuNDMxNDU4LDI3OS42Mjg5NTYgOTgxLjgwMjUwMSwzMDAgMTAwNi45MzE0NiwzMDAgWiIgaWQ9Ik92YWwtNS1Db3B5LTExIiBzdHJva2Utd2lkdGg9IjIyIiBvcGFjaXR5PSIwLjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMDYuOTMxNDU4LCAyNTQuNTAwMDAwKSByb3RhdGUoLTQ1LjAwMDAwMCkgdHJhbnNsYXRlKC0xMDA2LjkzMTQ1OCwgLTI1NC41MDAwMDApICI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01Nyw2MTUuMzQ2NzE3IEM3OS4wOTEzOSw2MTUuMzQ2NzE3IDk3LDU5Ny40MzgxMDcgOTcsNTc1LjM0NjcxNyBDOTcsNTY3Ljk1NDMwOSA5Nyw1NTQuNjIwOTc2IDk3LDUzNS4zNDY3MTcgQzc3LjY2ODUxODksNTM1LjM0NjcxNyA2NC4zMzUxODU2LDUzNS4zNDY3MTcgNTcsNTM1LjM0NjcxNyBDMzQuOTA4NjEsNTM1LjM0NjcxNyAxNyw1NTMuMjU1MzI3IDE3LDU3NS4zNDY3MTcgQzE3LDU5Ny40MzgxMDcgMzQuOTA4NjEsNjE1LjM0NjcxNyA1Nyw2MTUuMzQ2NzE3IFoiIGlkPSJPdmFsLTUtQ29weS0xNSIgc3Ryb2tlLXdpZHRoPSIyMCIgb3BhY2l0eT0iMC4wNzc4NDU5ODIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1Ny4wMDAwMDAsIDU3NS4zNDY3MTcpIHJvdGF0ZSgtNDUuMDAwMDAwKSB0cmFuc2xhdGUoLTU3LjAwMDAwMCwgLTU3NS4zNDY3MTcpICI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMjY2LjkzMTQ2LDExMCBDMTI5Mi4wNjA0MSwxMTAgMTMxMi40MzE0Niw4OS42Mjg5NTYxIDEzMTIuNDMxNDYsNjQuNSBDMTMxMi40MzE0Niw1Ni4wOTExMzYyIDEzMTIuNDMxNDYsNDAuOTI0NDY5NSAxMzEyLjQzMTQ2LDE5IEMxMjkwLjQ0MTksMTkgMTI3NS4yNzUyMywxOSAxMjY2LjkzMTQ2LDE5IEMxMjQxLjgwMjUsMTkgMTIyMS40MzE0NiwzOS4zNzEwNDM5IDEyMjEuNDMxNDYsNjQuNSBDMTIyMS40MzE0Niw4OS42Mjg5NTYxIDEyNDEuODAyNSwxMTAgMTI2Ni45MzE0NiwxMTAgWiIgaWQ9Ik92YWwtNS1Db3B5LTE0IiBzdHJva2Utd2lkdGg9IjIyIiBvcGFjaXR5PSIwLjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyNjYuOTMxNDU4LCA2NC41MDAwMDApIHJvdGF0ZSgtNDUuMDAwMDAwKSB0cmFuc2xhdGUoLTEyNjYuOTMxNDU4LCAtNjQuNTAwMDAwKSAiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTE4Ni45MzE0Niw1ODAgQzEyMTIuMDYwNDEsNTgwIDEyMzIuNDMxNDYsNTU5LjYyODk1NiAxMjMyLjQzMTQ2LDUzNC41IEMxMjMyLjQzMTQ2LDUyNi4wOTExMzYgMTIzMi40MzE0Niw1MTAuOTI0NDcgMTIzMi40MzE0Niw0ODkgQzEyMTAuNDQxOSw0ODkgMTE5NS4yNzUyMyw0ODkgMTE4Ni45MzE0Niw0ODkgQzExNjEuODAyNSw0ODkgMTE0MS40MzE0Niw1MDkuMzcxMDQ0IDExNDEuNDMxNDYsNTM0LjUgQzExNDEuNDMxNDYsNTU5LjYyODk1NiAxMTYxLjgwMjUsNTgwIDExODYuOTMxNDYsNTgwIFoiIGlkPSJPdmFsLTUtQ29weS0xMiIgc3Ryb2tlLXdpZHRoPSIyMiIgb3BhY2l0eT0iMC4yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTg2LjkzMTQ1OCwgNTM0LjUwMDAwMCkgcm90YXRlKC00NS4wMDAwMDApIHRyYW5zbGF0ZSgtMTE4Ni45MzE0NTgsIC01MzQuNTAwMDAwKSAiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+) repeat center',
    backgroundAttachment: 'fixed',
    height : '100%',
    width: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat : 'no-repeat',
    position : 'relative',
    top : '-40px',
    "@media (max-width: 900px)": {
     background : 'white',
     },

 },

 container : {
     padding : '0'
 },

 productdesc : {
   paddingLeft : '90px',
   "@media (max-width: 1200px)": {
    paddingLeft : '0',
    },
 },

 paper : {
     background : 'white',
     height : 'auto',
     borderRadius :  '0',
     boxShadow: 'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em',
     padding : '100px 20px 20px 20px '
 },

 shoeBg : {
    maxWidth : '20rem'
    },

  carousel : {
    height : '50vh',
    width : '100%',
    
  },

  button : {
    textTransform : 'capitalize'
  },

  list : {
    height: '300px',
    overflow : 'auto'
  }
})

function ShoeDetail() {
    const classes = useStyles()
    const { state } = useLocation()
    const [value, setValue] = React.useState(0);


    

    return (
          <div>  
            <Header />
            <HeadTitle />
            <div className={classes.bg}>
            <Container className={classes.container} maxWidth="lg">
                <Paper className={classes.paper}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6} lg={6}>
                    <Carousel showStatus={false} autoPlay>
                      <div>
                        <img className={classes.shoeBg} alt="" src={state.shoeInfo.img_main} />
                      </div>
                      <div>
                        <img className={classes.shoeBg} alt="" src={state.shoeInfo.img_1} />
                      </div>
                      <div>
                        <img className={classes.shoeBg} alt="" src={state.shoeInfo.img_2} />
                      </div>
                      <div>
                        <img className={classes.shoeBg} alt="" src={state.shoeInfo.img_3} />
                      </div>
                      <div>
                        <img className={classes.shoeBg} alt="" src={state.shoeInfo.img_4} />
                      </div>
                  </Carousel>
                  </Grid>
                  <Grid item  xs={12} md={6} lg={6}>
                  <h1>{state.shoeInfo.title}</h1>
                    <Rating name="read-only" value={4} readOnly />
                    <h4 style={{color: 'red'}}>Price : ₹{state.shoeInfo.price}</h4>
                    <p class="card-text mt-2">Available Colours</p>
                    <div>
                        <input class="color-box" type="radio" name="color" id="red" value="red" />
                          <label class="color-label" for="red"><span class="red"></span></label>

                          <input class="color-box" type="radio" name="color" id="green" />
                          <label class="color-label"  for="green"><span class="green"></span></label>

                          <input class="color-box" type="radio" name="color" id="yellow" />
                          <label class="color-label"  for="yellow"><span class="yellow"></span></label>

                          <input class="color-box" type="radio" name="color" id="blue" />
                          <label class="color-label"  for="blue"><span class="blue"></span></label>

                          <input class="color-box" type="radio" name="color" id="purple" />
                          <label class="color-label"  for="purple"><span class="purple"></span></label>
                    </div>
                    <br/>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Size</InputLabel>
                        <Select
                          labelId="demo-simple-select-outlined-label"
                          id="demo-simple-select-outlined"
                          label="Size"
                          style={{width: "100px"}}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={6}>6</MenuItem>
                          <MenuItem value={7}>7</MenuItem>
                          <MenuItem value={8}>8</MenuItem>
                          <MenuItem value={9}>9</MenuItem>
                          <MenuItem value={10}>10</MenuItem>
                        </Select>
                        <br/>
                      <div>
                          <Button variant="contained" size="large" color="primary" className={classes.button} >
                            Add to cart
                            <AddShoppingCartIcon  style={{marginLeft: '10px'}} />
                          </Button>
                      </div>
                      </FormControl>
                      
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6} lg={6}>
                      <div className={classes.productdesc}>
                        <h1>Product Description</h1>
                        <p style={{lineHeight: '25px'}}>
                          {state.shoeInfo.description}
                        </p>
                      </div>
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                  <Box style={{textAlign : 'center', background : '#fafafa'}} component="fieldset" mb={1} borderColor="transparent">
                      <p>Rate it</p>
                      <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                      />
                    </Box>
                    <List className={classes.list}>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <ImageIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Bob" secondary="The product is really great" />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <WorkIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Alice" secondary="This is amazing" />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                      
                    </List>
                  </Grid>
                </Grid>
                </Paper>
            </Container>   
            </div> 
            <FooterAppbar/>
            <Footer />
          </div>
    )
}

export default ShoeDetail
