/* eslint-disable no-shadow */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Link from '@material-ui/core/Link';

import { setLocale } from '../../actions/intl';
import s from './LanguageSwitcher.css';

const localeDict = {
  /* @intl-code-template '${lang}-${COUNTRY}': '${Name}', */
  'en-US': 'EN',
  'es-MX': 'ES',
  /* @intl-code-template-end */
};

class LanguageSwitcher extends React.Component {
  static propTypes = {
    currentLocale: PropTypes.string.isRequired,
    availableLocales: PropTypes.arrayOf(PropTypes.string).isRequired,
    setLocale: PropTypes.func.isRequired,
  };

  render() {
    const { currentLocale, availableLocales, setLocale } = this.props;
    const localeName = locale => localeDict[locale] || locale;

    return (
      <div className={s.root}>
        <ButtonGroup size="small">
          {availableLocales.map(locale => (
            <Button key={locale} component={Link} href={`?lang=${locale}`}>
              {localeName(locale)}
            </Button>
          ))}
        </ButtonGroup>
      </div>
    );
  }
}

const mapState = state => ({
  availableLocales: state.runtime.availableLocales,
  currentLocale: state.intl.locale,
});

const mapDispatch = {
  setLocale,
};

export default connect(
  mapState,
  mapDispatch,
)(withStyles(s)(LanguageSwitcher));
