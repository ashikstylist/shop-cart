
import Particles from 'react-particles-js';
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles({

    particles : {
        position: "absolute",
        height: "60vh",
        width:"100%",
        zIndex:-1, 
        "@media (max-width: 900px)": {
            height: "620px",
        },
    }

})

export default function Particle(){
  
    const classes = useStyles()
   
        return (
            <Particles
                className={classes.particles}
                
                params={{
                    particles: {
                    color: {
                        value: "#651fff"
                    },
                    line_linked: {
                        color: {
                        value: "#222"
                        },
                        opacity :{
                            value : 0.9
                        }
                    },
                    number: {
                        value: 30
                    },
                    size: {
                        value: 4
                    },
                    opacity :{
                        value : 0.9
                    }
                    }
                }}
                />
        );
  

}