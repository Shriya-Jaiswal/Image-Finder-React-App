import { Snackbar, makeStyles } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'
import React from 'react'

const useStyles = makeStyles({
    snac: {
        '& > *':{
            color: '#fff',
            backgroundColor: '#000000'
        }
    }
})

function SnackBar({open , toggleSnack}) {

    const classes = useStyles();

    const handleClose =()=>{
        toggleSnack(false);
    }
    return (
        <Snackbar className={classes.snac} open={open} autoHideDuration={6000} onClose={handleClose}>
            <MuiAlert severity="info" onClose={handleClose}>
                Number of Images should be between 3 and 200
            </MuiAlert>
        </Snackbar>
    )
}

export default SnackBar
