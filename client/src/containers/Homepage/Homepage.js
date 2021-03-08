import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import AuthComp from '../../components/authComp/authComp'
import DarkOverlay from '../../components/UI/overlay/darkOverlay'
import './style.css'


class Homepage extends Component {

  state ={
    modal: false
  }
  accountToggle = () => {
      this.setState((prevState) => {
        return { modal: !prevState.modal }
      }) 
    }

  render() {
    const { modal } = this.state;

    return(
      <div>
        { modal ? <DarkOverlay close ={this.accountToggle} /> : null }
        {modal ? <AuthComp close ={this.accountToggle} /> : null }

        <div className='home'>
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className='button'
            onClick={this.accountToggle}
            // href="/signin"
          >
            Get Started
          </Button>
        </div>
      </div>
    )
  }
}

export default Homepage