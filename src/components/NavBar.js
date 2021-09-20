import { AppBar, Toolbar, Typography , makeStyles } from '@material-ui/core'
import CollectionsIcon from '@material-ui/icons/Collections';
import React from 'react'

const useStyle = makeStyles({
    component:{
        background :'#445A6F'
    }
})

function NavBar() {
    const classes = useStyle();
    return (
       <AppBar className={classes.component} position="static">
           <Toolbar>
                <CollectionsIcon/>
                <Typography variant="h5" style={{marginLeft:10}}>image-Finder</Typography>
           </Toolbar>
       </AppBar>
    )
}

export default NavBar
