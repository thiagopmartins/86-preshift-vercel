import { AppBar, createStyles, Fab, makeStyles, Theme, Toolbar, Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchButton: {
      left: 5,
      background: theme.palette.secondary.main,
      color: theme.palette.primary.main,
      width: 40,
      height: 40,
      '&:hover': {
        background: theme.palette.primary.light
      }
    },
    fabButton: {
      position: 'absolute',
      zIndex: 1,  
      top: 40,
      right: 50,
      margin: '0 auto',
      color: theme.palette.primary.main,
      [theme.breakpoints.down('xs')]: {
        top: 32,
      },      
      '&:hover': {
        background: theme.palette.primary.light,
      }
    },
    title: {
      fontWeight: 300,
      position: 'absolute', 
      left: '50%', 
      top: '50%',
      transform: 'translate(-50%, -50%)'
    },
  })
);

export default function TopBar ({ title }: { title: string }) {
  const classes = useStyles();

  const router = useRouter();

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <IconButton size="medium" className={classes.searchButton}>
          <SearchIcon />
        </IconButton>
        <NextLink href={`${router.route}/create`} passHref>
          <Fab
            size="small"
            color="secondary"
            aria-label="add"
            className={classes.fabButton}
          >
            <AddIcon />
          </Fab>
        </NextLink>

        <Typography variant="h6" color="inherit" className={classes.title}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}