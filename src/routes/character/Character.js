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
  status: {
    id: 'character.status',
    defaultMessage: 'Status',
  },
  species: {
    id: 'character.species',
    defaultMessage: 'Species',
  },
  gender: {
    id: 'character.gender',
    defaultMessage: 'Gender',
  },
  origin: {
    id: 'character.origin',
    defaultMessage: 'Origin',
  },
  location: {
    id: 'character.location',
    defaultMessage: 'Location',
  },
  episodes: {
    id: 'character.episodes',
    defaultMessage: 'Episodes',
  },
});

function Character({ intl, data }) {
  const classes = useStyles();
  const { character, episodes } = data;
  const { formatMessage } = intl;

  return (
    <React.Fragment>
      <ItemCard img={character.image}>
        <Typography component="h5" variant="h5">
          {character.name}
        </Typography>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell align="right">{formatMessage(messages.status)}</TableCell>
              <TableCell>{character.status}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">{formatMessage(messages.species)}</TableCell>
              <TableCell>{character.species}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">{formatMessage(messages.gender)}</TableCell>
              <TableCell>{character.gender}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">{formatMessage(messages.origin)}</TableCell>
              <TableCell>{character.origin && character.origin.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">{formatMessage(messages.location)}</TableCell>
              <TableCell>{character.location && character.location.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">{formatMessage(messages.episodes)}</TableCell>
              <TableCell>{character.episodes && character.episodes.length}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ItemCard>
      <ResultsList items={episodes} />
    </React.Fragment>
  );
}

export default injectIntl(Character);
