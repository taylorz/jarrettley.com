import React from 'react';
import './ReelImage.scss';
import Grid from '@material-ui/core/Grid'

const ReelImage = ({ image }) => (
    <Grid container className="reel-image-container" justify="center">
        <Grid item xs={12} className="reel-image">
            <img src={image}/>
        </Grid>
    </Grid>
)

export default ReelImage