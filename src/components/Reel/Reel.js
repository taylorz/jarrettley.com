import React from 'react';
import './Reel.scss';
import Grid from '@material-ui/core/Grid'
import MaxWidth from '../MaxWidth/MaxWidth'
import ReelText from '../ReelText/ReelText'
import ReelImage from '../ReelImage/ReelImage'

const Reel = ({ text, image, project }) => (
    <Grid container className="reel-container">
        <MaxWidth>
            <Grid container>
                <Grid item className="reel-text-wrapper">
                    {text &&
                        project.map((p) =>
                            <ReelText
                                title={p.title}
                                text={p.text}
                                year={p.year}
                            />
                        )
                    }
                </Grid>
                <Grid item className="reel-image-wrapper">
                    {image && 
                        project.map((p) => 
                            p.images.map((image) =>
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