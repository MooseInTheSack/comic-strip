import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import RedditIcon from '@material-ui/icons/Reddit';

import avatar from '../common/avatar_transparent.png'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  alignMiddle: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  avatarIcon: {
    maxWidth: '100px',
    maxHeight: '100px',
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  //const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        
        <img className={classes.avatarIcon} src={avatar} />

        <Typography variant="h2" component="h2">
          All I See is Beans
        </Typography>
        
        <Typography variant="body2" component="p">
          A Comic Series about Beans and Whatnot...
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="instagram" className={classes.alignMiddle} href="https://www.instagram.com/alliseeisbeans/" target="_blank">
          <InstagramIcon fontSize="medium" />
        </IconButton>

        <IconButton aria-label="twitter" className={classes.alignMiddle} href="https://www.patreon.com/alliseeisbeans" target="_blank">
          <span class="iconify" data-icon="mdi:patreon"></span>
        </IconButton>

        <IconButton aria-label="reddit" className={classes.alignMiddle} href="https://reddit.com/r/alliseeisbeans" target="_blank">
          <RedditIcon fontSize="medium" />
        </IconButton>

        <IconButton aria-label="facebook" className={classes.alignMiddle} href="https://www.facebook.com/profile.php?id=100074053327356" target="_blank">
          <FacebookIcon fontSize="medium" />
        </IconButton>

      </CardActions>
    </Card>
  );
}
