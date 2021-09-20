import { Card, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyle = makeStyles({
    image:{
        width: '100%',
        height: 300,
        objectFit : 'cover'
    }
})

function Image({ image }) {
    const classes =  useStyle();
    return (
        <Card>
          <img src={image.largeImageURL} alt="imges" className={classes.image}/>
        </Card>
    )
}

export default Image
