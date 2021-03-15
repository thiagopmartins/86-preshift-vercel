import { Box, createStyles, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      paddingInline: 20
    },
  })
);

export default function Home () {
  const classes = useStyles();
  
  return (
    <>
      <Box className={classes.root}>
        <Typography variant="h5" color="primary">
          Welcome to 86 PreShift.
        </Typography>
        <Typography variant="body1" color="inherit">
          You don't have anything in your feed yet. The first thing that you
          need to do is add some menus or add some staff
          <br />
          (who could help you add your menus)
          <br />
          <br />
          <br />
          Check out our sample menus for examples.
        </Typography>
      </Box>
    </>
  );
}