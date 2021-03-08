import React from 'react'
import './darkModal.css'
// import { makeStyles } from '@material-ui/core/styles'
import CancelIcon from '@material-ui/icons/Cancel';

// const useStyles = makeStyles((theme) => ({
//     modal: {
//         position: 'relative',
//         width: '50%',
//         height: '50%'
//     },
//     content: {
//         position: 'absolute',
//         zIdex: '2000',
//         transform: 'translate(200%, 200%)',
//         backgroundColor: '#00000081'
//     }
// }))

const DarkModal = (props) => {

    // const classes = useStyles();

    return(
        <div className='modal'>
                <CancelIcon className="modalIcon" onClick={props.close} />
                <div className="content">
                    { props.children }
                </div>
        </div>
    )
}

export default DarkModal