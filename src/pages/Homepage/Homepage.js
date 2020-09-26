import React from 'react';
import './Homepage.scss';
import PageContainer from '../../components/PageContainer/PageContainer'
import Reel from '../../components/Reel/Reel'

import PROJECTS from '../../constants/projects'

const Homepage = () => (
    <PageContainer className="home-page">
        <Reel text project={PROJECTS}/>
        <Reel image video project={PROJECTS}/>
    </PageContainer>
)

export default Homepage