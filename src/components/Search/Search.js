import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { injectIntl, defineMessages } from 'react-intl';

import history from '../../history';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 300,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const messages = defineMessages({
  search: {
    id: 'header.search',
    defaultMessage: 'Search the Universe',
  },
});

function Search({ intl }) {
  const classes = useStyles();
  const [query, setQuery] = React.useState('');

  const handleSearchChange = e => setQuery(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    history.push(`/search/${query}`);
  };

  const { formatMessage } = intl;

  return (
    <form method="get" onSubmit={handleSubmit}>
      <Paper className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder={formatMessage(messages.search)}
          onChange={handleSearchChange}
        />
        <IconButton className={classes.iconButton} type="submit">
          <SearchIcon />
        </IconButton>
      </Paper>
    </form>
  );
}

export default injectIntl(Search);