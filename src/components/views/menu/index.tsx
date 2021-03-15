import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListOptions from 'components/ListOptions';

const options = [
  {
    title: 'Dinner',
    isPublic: true
  },
  {
    title: 'Sample Food',
    isPublic: false
  },
  {
    title: 'Sample Drink',
    isPublic: false
  },
  {
    title: 'Archives',
    isPublic: false
  },
]

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: 1,
      position: 'absolute',
      width: '100%',
      bottom: 47,
      color: theme.palette.primary.main,
      fontSize: '1.4rem',
    }
  })
);

export default function Menu () {
  const classes = useStyles();
  
  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      {options.map(({ title, isPublic }, index) => (
        <ListOptions key={index} title={title} isPublic={isPublic} />
      ))}  
    </List>
  );
}