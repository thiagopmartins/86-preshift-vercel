import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import BuildIcon from '@material-ui/icons/Build';
import TabLink from 'components/TabLink';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      justifyContent: 'space-beetween',
      borderTop: `1px solid ${theme.palette.divider}`,
    },
    selected: {
      borderTop: `2px solid ${theme.palette.primary.main} !important`,
      color: theme.palette.primary.main
    },
    tab: {
      maxWidth: 'none',
      '&:hover': {
        borderTop: `2px solid ${theme.palette.primary.main}`,
        color: theme.palette.primary.main
      }
    }
  })
);

const tabs = [
  {
    name: 'Home',
    pathname: '/',
    icon: <HomeIcon />
  },
  {
    name: 'Menu',
    pathname: '/menu',
    icon: <RoomServiceIcon />
  },
  {
    name: 'person',
    pathname: '/',
    icon: <PersonIcon />
  },
  {
    name: 'build',
    pathname: '/',
    icon: <BuildIcon />
  },
]

export default function NavMenu () {
  const classes = useStyles();

  const { pathname } = useRouter();

  const valueDefault = tabs.findIndex(t => t.pathname === pathname);

  const [value, setValue] = useState(valueDefault);

  return (
    <BottomNavigation
      value={value}
      className={classes.root}
    >
      {tabs.map(({ name, pathname, icon }, index) => (
        <TabLink href={pathname} key={index}>
          <BottomNavigationAction value={name} icon={icon} onClick={() => setValue(index)}
            className={`${value === index ? classes.selected : ''} ${classes.tab}`} />
        </TabLink>
      ))}      
    </BottomNavigation>
  );
}