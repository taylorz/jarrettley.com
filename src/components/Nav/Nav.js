import React from 'react';
import './Nav.scss';
import { NavLink, useLocation } from "react-router-dom";
import Grid from '@material-ui/core/Grid'

const Nav = () => (
    <Grid container className="nav-container">
        <Grid item xs={12} className="nav-wrapper">
            <ul className="nav-links">
                <Grid container justify="space-between">
                    <Grid item><li className="nav-name"><NavLink exact to="/">JARRETT LEY</NavLink></li></Grid>
                    <Grid item><li className="nav-name"><NavLink exact to="/about">INFORMATION</NavLink></li></Grid>
                </Grid>
                <li>THE NEAR DEATH OF ZAOURA, </li>
                <li>A POLITICS OF DISSASSEMBLY, </li>
                <li>EVIDENCING LIFE, </li>
                <li>JUST CITIZENSHIP</li>
            </ul>
        </Grid>
    </Grid>
)

export default Nav