import React from 'react'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({

    HeadTitle : {
        backgroundColor: theme.palette.primary.main,
        height: '90px',
        width: '300px',
        position: 'relative',
        margin: 'auto',
        top: '20px',
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: 5,
        color: 'white',
        textAlign: 'center',
        padding: '10px 0'
    }

}))



export default function HeadTitle() {
    const classes = useStyles()
        return (
            
            <div>
                <div className={classes.HeadTitle}>
                    <h1 style={{fontWeight: 'lighter'}}>Tycoon Cart</h1>
                </div>
                
            </div>
            
        )
    
}
