import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './About.css'

import ryanBean from '../common/ryan_avatar.png'
import tylerBean from '../common/tyler_avatar.png'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    avatarIcon: {
        maxWidth: '250px',
        maxHeight: '250px',
    },
})

export default function Carousel() {
    const classes = useStyles();

  return (
    <div className="Carousel">
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h2" component="h2">
                    WHO ARE YOU PEOPLE?
                </Typography>
            </CardContent>
        </Card>
        <br />
        <img className={classes.avatarIcon} src={ryanBean} alt="cartoon drawing of the artist holding an axe"/>
        <img className={classes.avatarIcon} src={tylerBean} alt="cartoon drawing of the artist holding an axe"/>
        <p>We are two brothers who have too much free time on our hands so we decided to make a web comic series.</p>
        <p>Both Tyler and Ryan come up with the ideas, writing, and rough sketches.</p>
        <p>Ryan, the only artistically talented of the bunch, draws and colors the comic.</p>
        <p>And finally, Tyler posts the masterpiece across different mediums like Instagram, Facebook, and Reddit.</p>
        <hr/>
        <p>If you have $3 then donate to our <a href="https://www.patreon.com/alliseeisbeans" target="_blank" rel="noreferrer">Patron.</a></p>
        <p>Now.</p>
        <p>We also have an <a href="https://instagram.com/alliseeisbeans" target="blank" rel="noreferrer">Instagram</a>, <a href="https://www.facebook.com/profile.php?id=100074053327356" target="blank" rel="noreferrer">Facebook Page</a>, and a <a href="https://reddit.com/r/alliseeisbeans" target="blank" rel="noreferrer">Subreddit!</a></p>
        <br />
    </div>
  );
}