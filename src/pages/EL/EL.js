import React from 'react';
import './EL.scss';
import PageContainer from '../../components/PageContainer/PageContainer'
import Reel from '../../components/Reel/Reel'

import PROJECTS from '../../constants/projects'

const EL = () => (
    <PageContainer className="el-page">
        <Reel text project={PROJECTS.slice(2, 3)}/>
        <Reel image project={PROJECTS.slice(2, 3)}/>
    </PageContainer>
)

export default EL