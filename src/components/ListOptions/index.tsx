import React from "react";
import { createStyles, Divider, ListItem, ListItemSecondaryAction, ListItemText, makeStyles, Typography } from "@material-ui/core";
import ShareIcon from '@material-ui/icons/Share';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

type Props = {
  title: string,
  isPublic: Boolean
}

const useStyles = makeStyles(() =>
  createStyles({
    subTitle: {
      display: 'flex',
      alignItems: 'center',
    },
    icon: {
      fontSize: 16,
      marginRight: 6
    }
  })
);

function getSubtitle(isPublic: Boolean): string {
  return isPublic ? 'Public' : 'All Staff'; 
}

export default function ListOptions({ title, isPublic }: Props) {
  const classes = useStyles();
  
  return (
    <>
      <Divider />
      <ListItem button>
        <ListItemText
          primary={
            <Typography variant="h6" color="inherit">
              {title}
            </Typography>
          }
          secondary={
            <Typography
              variant="body2"
              color="inherit"
              className={classes.subTitle}
            >
              <ShareIcon className={classes.icon} /> {getSubtitle(isPublic)}
            </Typography>
          }
        />
        <ListItemSecondaryAction>
          <MoreHorizIcon />
        </ListItemSecondaryAction>
      </ListItem>
    </>
  );
}