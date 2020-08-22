import React from 'react';
import './PageContainer.scss';
import Grid from '@material-ui/core/Grid'

const PageContainer = ({ children }) => (
    <Grid container className="page-container" justify="center">
        {children}
    </Grid>
)

export default PageContainer