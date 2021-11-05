import React from 'react'
import {Grid,Card, makeStyles} from '@material-ui/core'
import Particles from './Particle'
import AuthTabs from './Authtabs'

const useStyles = makeStyles({
    background: {
        marginTop : '-40px',
        "@media (max-width: 900px)" : {
            marginTop : '-100px'
        },
    },
    card :{
        maxWidth: '30rem',
        margin: 'auto',
        minHeight: '60vh',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        "@media (max-width: 900px)" : {
            height: 'auto',
            marginTop : '50px',
            paddingBottom : '50px'
        },
    },

    tab : {
        marginTop: '100px'
    }

  });

  
function AuthPanel() {
    const classes = useStyles()
    return (
        <div className={classes.background}>
                <Particles />
                <Grid container >
                    <Grid item xs={12} >
                        <Card className={classes.card}>
                            <AuthTabs/>
                        </Card>
                    </Grid>
                </Grid>
        </div>
    )
}

export default AuthPanel
