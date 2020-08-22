import React from 'react';
import './Reel.scss';
import Grid from '@material-ui/core/Grid'
import MaxWidth from '../MaxWidth/MaxWidth'
import ReelText from '../ReelText/ReelText'

import projectText from '../../constants/projectsText'

const Reel = ({ text, image, }) => (
    <Grid container className="reel-container">
        <MaxWidth>
            <Grid container>
                {text &&
                    projectText.map((project) => 
                        <ReelText
                            title={project.title}
                            text={project.text}
                            year={project.year}
                        />
                    )
                }
                {image && 
                    <Grid item xs={12}>image</Grid>
                }
            </Grid>
        </MaxWidth>
    </Grid>
)

export default Reel