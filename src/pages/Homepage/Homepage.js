import React from 'react';
import './Homepage.scss';
import PageContainer from '../../components/PageContainer/PageContainer'
import Reel from '../../components/Reel/Reel'

const Homepage = () => (
    <PageContainer>
        <Reel text/>
        <Reel image />
    </PageContainer>
)

export default Homepage