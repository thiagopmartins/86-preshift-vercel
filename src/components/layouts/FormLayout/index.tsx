import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Button, ButtonGroup, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import { NextRouter, useRouter } from 'next/router';

type Props = {
  children?: ReactNode
  title: string,
  buttonSubmitText: string,
  buttonCancelText?: string,
  formIsValid?: Boolean
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      overflowX: 'hidden',
      height: "100vh",  
      width: "100vw"
    },
    wrapper: {
      display: "flex",
      flex: "1 1 auto",
      justifyContent: "center",
      overflowX: 'hidden',
      paddingTop: 48,
    },
    contentContainer: {
      textAlign: "center",
      flex: "auto"
    },
    buttonGroup: {
      display: "flex",
      flexWrap: "wrap",
      position: 'fixed',
      bottom: 0,
      width: '100%'
    },
    button: {
      flex: 1,
      borderRadius: 0,
      height: 50
    },
    subTitle: {
      fontWeight: 400,
      color: theme.palette.primary.light
    },
  })
);

function getPreviusPage(router: NextRouter): string {
  return router.route.substring(0, router.route.lastIndexOf('/'));
}

export default function FormLayout ({ children, title, buttonSubmitText, buttonCancelText, formIsValid }: Props) {
  const classes = useStyles();

  const router = useRouter();
  
  const previusPage = getPreviusPage(router);
  
  return (
    <>
      <Head>
        <title>{title}</title>^
        <meta charSet="utf-8" />
      </Head>
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <div className={classes.contentContainer}>
            <Typography variant="h4" color="primary">
              {title}
            </Typography>
            <Typography variant="body1" className={classes.subTitle}>
              Your menus, your move
            </Typography>
            <div>{children}</div>
          </div>
        </div>
        <ButtonGroup
          disableElevation
          variant="contained"
          color="primary"
          className={classes.buttonGroup}
        >
          <Button
            className={classes.button}
            style={{ display: !!buttonCancelText ? "" : "none" }}
            onClick={() => router.push(previusPage)}
          >
            {buttonCancelText}
          </Button>
          <Button className={classes.button} type="submit">{buttonSubmitText}</Button>
        </ButtonGroup>
      </div>
    </>
  );
}