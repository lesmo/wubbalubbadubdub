import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import noimg from './noimg.jpg';

const useStyles = makeStyles(theme => ({
  cardWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    display: 'flex',
    margin: theme.spacing(2),
    width: '100%',
    maxWidth: 600,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '70%',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '30%',
  },
}));

export default function ItemCard({ img, children }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.cardWrapper}>
      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            {children}
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          image={img || noimg}
        />
      </Card>
    </div>
  );
}
