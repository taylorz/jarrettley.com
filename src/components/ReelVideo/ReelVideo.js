import React from 'react';
import './ReelVideo.scss';
import Grid from '@material-ui/core/Grid'

const ReelVideo = ({ video }) => (
    <Grid container className="reel-video-container" justify="flex-end">
        <Grid item xs={10} className="reel-video">
            <iframe
                className="iframe-element"
                src={video}
                frameborder='0'
                allow='autoplay; encrypted-media'
                title='video'
            />
        </Grid>
    </Grid>
)

export default ReelVideo