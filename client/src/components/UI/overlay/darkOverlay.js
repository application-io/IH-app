import React from 'react'
import './darkOverlay.css'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    overlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#00000061'
    },
}))

const DarkOverlay = (props) => {

    const classes = useStyles();

    return(
        <div className={classes.overlay} onClick={props.close}>
        </div>
    )
}

export default DarkOverlay