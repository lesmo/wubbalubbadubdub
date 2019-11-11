import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import { ThemeProvider } from '@material-ui/core/styles';

// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';

import s from './Layout.css';
import Header from '../Header';

import { theme } from '../Theme';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div>
        <video loop autoPlay poster="/bg.png" className={s.bgVideo}>
          <source src="/bg.mp4" type="video/mp4" />
          <source src="/bg.webm" type="video/webm" />
        </video>
        <div className={`${s.bgVideoOverlay}`} />

        <ThemeProvider theme={theme}>
          <Header />
          {this.props.children}
        </ThemeProvider>
      </div>
    );
  }
}

export default withStyles(normalizeCss, s)(Layout);
