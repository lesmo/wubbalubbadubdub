import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import Grid from '@material-ui/core/Grid';
import { injectIntl, defineMessages } from 'react-intl';

import HomeCard from '../../components/HomeCard';

import s from './Home.css';
import locationsIcon from './locations.svg';
import episodesIcon from './episodes.svg';
import charactersIcon from './characters.svg';

const messages = defineMessages({
  characters: {
    id: 'home.characters.title',
    defaultMessage: 'Characters',
  },
  charactersDescription: {
    id: 'home.characters.description',
    defaultMessage: 'Everyone who appeared in any of the dimensions, for short or long, alive or death.',
  },
  episodes: {
    id: 'home.episodes.title',
    defaultMessage: 'Episodes',
  },
  episodesDescription: {
    id: 'home.episodes.description',
    defaultMessage: 'All episodes already aired, but not necessarily available in your streaming service.',
  },
  locations: {
    id: 'home.locations.title',
    defaultMessage: 'Locations',
  },
  locationsDescription: {
    id: 'home.locations.description',
    defaultMessage: 'Every location where these crazy adventures take place.',
  },
});

class Home extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const { formatMessage } = this.props.intl;

    return (
      <React.Fragment>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            <HomeCard
              image={charactersIcon}
              title={formatMessage(messages.characters)}
              description={formatMessage(messages.charactersDescription)}
            />
          </Grid>
          <Grid item>
            <HomeCard
              image={episodesIcon}
              title={formatMessage(messages.episodes)}
              description={formatMessage(messages.episodesDescription)}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default injectIntl(withStyles(s)(Home));
