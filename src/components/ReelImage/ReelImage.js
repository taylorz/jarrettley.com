import React from 'react';
import './ReelImage.scss';
import Grid from '@material-ui/core/Grid'

const ReelImage = ({ image }) => (
    <Grid container className="reel-image-container" justify="flex-end">
        <Grid item xs={10} className="reel-image">
            <img src={image}/>
        </Grid>
    </Grid>
)

export default ReelImage