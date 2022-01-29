import React from 'react';
import classes from './Logo.module.scss'
import {Link} from 'react-router-dom'

const Logo:React.FC = () => {
    return (
        <div className={classes.logoWrap}>
            <Link to={'/arts'} className={classes.logo}>
            <a href={'#'} data-text='Mutant Shiba Club' className={classes.glitch}>Mutant Shiba Club</a>
            </Link>
        </div>
    );
};

export default Logo;