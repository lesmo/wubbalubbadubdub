import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import Link from '../../components/Link';

import noimg from './noimg.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: theme.spacing(2),
  },
  gridList: {
    maxWidth: 600,
    width: '100%',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

export default function ResultsList(props) {
  const classes = useStyles();
  const { items } = props;

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={3} spacing={16}>
        {items.map(tile => (
          <GridListTile key={tile.title} component={Link} to={tile.link}>
            <img src={tile.img || noimg} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>{tile.subtitle}</span>}
              className={classes.titleBar}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
