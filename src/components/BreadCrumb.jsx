import { Box, TextField , makeStyles} from '@material-ui/core'
import React from 'react'

const useStyle = makeStyles(theme => ({
    component:{
        background: '#F6F6F6',
        '& > *' : {
            margin : theme.spacing(1)
        }
    }
}))

function BreadCrumb({ onTextChange , onCountChange}) {
    const classes = useStyle();
    return (
        <Box m={1} className={classes.component}>
            <TextField label="Search images" onChange={(e)=> onTextChange(e.target.value)}/>
            <TextField label="Number of images" onChange={(e)=> onCountChange(e.target.value)}/>
        </Box>
    )
}

export default BreadCrumb
