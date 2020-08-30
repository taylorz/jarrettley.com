import React from 'react';
import './POD.scss';
import PageContainer from '../../components/PageContainer/PageContainer'
import Reel from '../../components/Reel/Reel'

import PROJECTS from '../../constants/projects'

const POD = () => (
    <PageContainer className="pod-page">
        <Reel text project={PROJECTS.slice(1, 2)}/>
        <Reel image project={PROJECTS.slice(1, 2)}/>
    </PageContainer>
)

export default POD