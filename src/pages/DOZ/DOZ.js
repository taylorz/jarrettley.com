import React from 'react';
import './DOZ.scss';
import PageContainer from '../../components/PageContainer/PageContainer'
import Reel from '../../components/Reel/Reel'

import PROJECTS from '../../constants/projects'

const DOZ = () => (
    <PageContainer className="doz-page">
        <Reel text project={PROJECTS.slice(0, 1)}/>
        <Reel image video project={PROJECTS.slice(0, 1)}/>
    </PageContainer>
)

export default DOZ