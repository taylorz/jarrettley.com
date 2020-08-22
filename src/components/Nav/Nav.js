import React from 'react';
import './Nav.scss';
import Grid from '@material-ui/core/Grid'

const Nav = () => (
    <Grid container className="nav-container">
        <Grid item xs={12} className="nav-wrapper">
            <ul className="nav-links">
                <li className="nav-name">JARRETT LEY</li><br/>
                <li>A POLITICS OF DISSASSEMBLY, </li>
                <li>EVIDENCING LIFE, </li>
                <li>JUST CITIZENSHIP, </li>
                <li>THE NEAR DEATH OF ZAOURA</li>
            </ul>
        </Grid>
    </Grid>
)

export default Nav