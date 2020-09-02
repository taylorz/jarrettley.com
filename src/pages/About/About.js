import React from 'react';
import './About.scss';
import Grid from '@material-ui/core/Grid'
import PageContainer from '../../components/PageContainer/PageContainer'
import MaxWidth from '../../components/MaxWidth/MaxWidth'

const About = () => (
    <PageContainer className="about-page">
        <MaxWidth>
            <Grid container justify="flex-start" className="about-page-wrapper">
                <Grid item xs={12}>
                    <div className="bio-statement">
                        Jarrett Ley is an architectural designer and researcher whose work investigates architecture's entanglements with violence, war, and power. Situated within the expanded discourse of architecture, these inquires probe built/unbuilt environments, media, and technology as agents and artifacts of politics. This work exists across multiple modes of inquiry and dissemination- including drawing, animation, text, book, audio, and exhibition.
                    </div>
                    <p>CONTACT<br/>jarrett.ley@gmail.com</p>
                    <p>TEACHING<br/>Associate of Architecture, Planning, and Preservation at Columbia University GSAPP</p>
                    <p>EDUCATION<br/>Columbia University GSAPP:<br/>M.S. Critical, Curatorial, and Conceptual Practices in Architecture<br/>Master of Architecture</p>
                </Grid>
                <Grid item container alignItems="flex-end" xs={12}>
                    <div className="copyright">
                        All work ©2016–2020 by Jarrett Ley unless otherwise stated. Any redistribution or reproduction of part or all of the contents in any form is prohibited. You may not transmit it or store it in any other website or other form of electronic retrieval system without the prior written permission of Jarrett Ley.
                    </div>
                </Grid>
            </Grid>
        </MaxWidth>
    </PageContainer>
)

export default About