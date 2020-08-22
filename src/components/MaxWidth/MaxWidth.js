import React from 'react';
import './MaxWidth.scss';
import Grid from '@material-ui/core/Grid'

const MaxWidth= ({ children }) => (
    <div className="max-width-container">
        {children}
    </div>
)

export default MaxWidth