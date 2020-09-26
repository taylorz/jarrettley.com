import React from 'react';
import './Reel.scss';
import Grid from '@material-ui/core/Grid'
import MaxWidth from '../MaxWidth/MaxWidth'
import ReelText from '../ReelText/ReelText'
import ReelImage from '../ReelImage/ReelImage'
import ReelVideo from '../ReelVideo/ReelVideo'

const Reel = ({ text, image, project, video }) => (
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
                    {video && 
                        project.map((p) => 
                            p.videos.map((video) =>
                                <ReelVideo
                                    video={video}
                                />
                            )
                        )
                    }
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