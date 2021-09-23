import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    }
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
        <p>We are three brothers who have too much free time on our hands so we decided to make a web comic series.</p>
        <p>Both Tyler and Ryan come up with the ideas, writing, and rough sketches.</p>
        <p>Ryan, the only artistically talented of the bunch, creates the finished product.</p>
        <p>And finally, Nathan posts the masterpiece across different mediums like Instagram and Facebook.</p>
    </div>
  );
}