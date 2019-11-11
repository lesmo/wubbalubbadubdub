import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { injectIntl, defineMessages } from 'react-intl';

import ItemCard from '../../components/ItemCard';
import ResultsList from '../../components/ResultsList/ResultsList';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
});

const messages = defineMessages({
  episode: {
    id: 'episode.episode',
    defaultMessage: 'Episode',
  },
  airDate: {
    id: 'episode.airDate',
    defaultMessage: 'Air Date',
  },
  characters: {
    id: 'episode.characters',
    defaultMessage: 'Characters'
  }
});

function Episode({ intl, data }) {
  const classes = useStyles();
  const { episode, characters } = data;
  const { formatMessage } = intl;

  return (
    <React.Fragment>
      <ItemCard img={episode.image}>
        <Typography component="h5" variant="h5">
          {episode.name}
        </Typography>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell align="right">{formatMessage(messages.episode)}</TableCell>
              <TableCell>{episode.episode}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">{formatMessage(messages.characters)}</TableCell>
              <TableCell>{episode.characters && episode.characters.length}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">{formatMessage(messages.airDate)}</TableCell>
              <TableCell>{episode.air_date}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ItemCard>
      <ResultsList items={characters} />
    </React.Fragment>
  );
}

export default injectIntl(Episode);