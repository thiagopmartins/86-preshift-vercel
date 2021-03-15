import React, { ReactNode } from 'react';
import Head from 'next/head';
import TopBar from '../../TopBar';
import NavMenu from '../../NavMenu';
import { makeStyles } from '@material-ui/core';

type Props = {
  children?: ReactNode
  title: string
}

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100vw',
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    justifyContent: 'center',
    alignItems: 'center',   
    paddingTop: 64,
  },
  contentContainer: {
    textAlign: 'center',
    flex: 'auto'
  },
}));

export default function MainLayout ({ children, title }: Props) {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>{title}</title>^
        <meta charSet="utf-8" />
      </Head>
      <div className={classes.root}>
        <TopBar title={title} />
        <div className={classes.wrapper}>
          <div className={classes.contentContainer}>
            <div>{children}</div>
          </div>
        </div>
        <NavMenu />
      </div>
    </>
  );
}