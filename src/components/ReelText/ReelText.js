import React from 'react';
import './ReelText.scss';
import Grid from '@material-ui/core/Grid'

const ReelText = ({ text, title, year }) => (
    <Grid container className="reel-text-container" justify="flex-start">
        <Grid item xs={10} className="text-title">
            <Grid container>
                <Grid item xs={10}>{title}</Grid>
                <Grid item container xs={2} justify="flex-end">{year}</Grid>
            </Grid>
        </Grid>
        <Grid item xs={10} className="text-body">{text}</Grid>
    </Grid>
)

export default ReelText