import React, {useState} from 'react';
import './PageContainer.scss';
import Grid from '@material-ui/core/Grid'

const PageContainer = ({ children, className }) => {
    const [isPaused, setIsPaused] = useState(false)
    return (
        <>
            <Grid container className={`${className && className} ${isPaused && "is-paused"} page-container`} justify="center">
                {children}
            </Grid>
            <div className="pause-toggler" onClick={() => setIsPaused(!isPaused)}>
                {isPaused ? "START" : "PAUSE"}
            </div>
        </>
    )
}

export default PageContainer