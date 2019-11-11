import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import Grid from '@material-ui/core/Grid';

import Search from '../Search';
import LanguageSwitcher from '../LanguageSwitcher';

import s from './Header.css';
import logo from './logo.png';

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12} className={s.logoContainer}>
            <img src={logo} />
          </Grid>
          <Grid item>
            <Search />
          </Grid>
        </Grid>
        <LanguageSwitcher />
      </React.Fragment>
    );
  }
}

export default withStyles(s)(Header);
