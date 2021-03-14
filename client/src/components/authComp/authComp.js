import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import DarkModal from '../UI/modal/darkModal'
import './authComp.css'
import googleImage from '../../assets/googleImage.jpg'

const useStyles = makeStyles((theme) => ({
    container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    backgroundColor: 'transparent',
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6)
  },
}))

const AuthComp = (props) => {
    const classes = useStyles();

    return(
        <div className="modalCenter">
        <DarkModal close={props.close}>
            <Container maxWidth="md" className={classes.container}> 
                <div className="containerCenter"><h4 className="h4">Sign in with</h4></div>
                    <div className="containerCenter">
                    <div>
                        <a className="authItem" href="/auth/google">
                            <img src={googleImage}  alt="google login icon"/>
                            <i>Gmail</i>
                        </a>
                    </div>
                    <div><i className="or">OR</i></div>
                    <div>
                        <a className="authItem" href="/signin">
                            <img src={googleImage} alt="google login icon"/>
                            <i>Sign In</i>
                        </a>
                        
                    </div>
                </div>
            </Container>
        </DarkModal>
        </div>
    )
}

export default AuthComp;