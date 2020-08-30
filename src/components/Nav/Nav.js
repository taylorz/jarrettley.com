import React from 'react';
import './Nav.scss';
import { NavLink, useLocation } from "react-router-dom";
import Grid from '@material-ui/core/Grid'

const Nav = () => (
    <Grid container className="nav-container">
        <Grid item xs={12} className="nav-wrapper">
            <ul className="nav-links">
                <Grid container justify="space-between">
                    <Grid item><li className="nav-name"><NavLink exact to="/" is-active="active">JARRETT LEY</NavLink></li></Grid>
                    <Grid item><li className="nav-name"><NavLink exact to="/about" is-active="active">INFORMATION</NavLink></li></Grid>
                </Grid>
                <li><NavLink exact to="/the-near-death-of-zaoura" is-active="active">THE NEAR DEATH OF ZAOURA, </NavLink></li>
                <li><NavLink exact to="/a-politics-of-dissassembly" is-active="active">A POLITICS OF DISSASSEMBLY, </NavLink> </li>
                <li><NavLink exact to="/evidencing-life" is-active="active">EVIDENCING LIFE </NavLink></li>
                {/* <li>JUST CITIZENSHIP</li> */}
            </ul>
        </Grid>
    </Grid>
)

export default Nav