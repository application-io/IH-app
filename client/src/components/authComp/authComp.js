import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import DarkModal from '../UI/modal/darkModal'
import './authComp.css'

const useStyles = makeStyles((theme) => ({
    container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    backgroundColor: 'transparent',
  },
}))

const AuthComp = (props) => {
    const classes = useStyles();

    return(
        <DarkModal close={props.close}>
            <Container maxWidth="md" className={classes.container}> 
                    <div className="containerCenter"><h4 className="h4">Sign in with</h4></div>
                    <div><a href="/auth/google">Gmail</a></div>
                    <div><a href="/fb-auth">Facebook</a></div>
                    <div><a href="/signin">Sign in</a></div>
            </Container>
        </DarkModal>
    )
}

export default AuthComp;