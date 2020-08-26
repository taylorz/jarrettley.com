import React from 'react';
import './Reel.scss';
import Grid from '@material-ui/core/Grid'
import MaxWidth from '../MaxWidth/MaxWidth'
import ReelText from '../ReelText/ReelText'
import ReelImage from '../ReelImage/ReelImage'

import projects from '../../constants/projects'

const Reel = ({ text, image }) => (
    <Grid container className="reel-container">
        <MaxWidth>
            <Grid container>
                <Grid item className="reel-text-wrapper">
                    {text &&
                        projects.map((project) =>
                            <ReelText
                                title={project.title}
                                text={project.text}
                                year={project.year}
                            />
                        )
                    }
                </Grid>
                <Grid item className="reel-image-wrapper">
                    {image && 
                        projects.map((project) => 
                            project.images.map((image) =>
                                <ReelImage
                                    image={image}
                                />
                            )
                        )
                    }
                </Grid>
            </Grid>
        </MaxWidth>
    </Grid>
)

export default Reel