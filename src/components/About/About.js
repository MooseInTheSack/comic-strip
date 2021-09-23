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

            <Card>
                <Typography variant="h4" component="h2">
                    Ryan Kirkpatrick
                </Typography>
            </Card>
            <Card>
                <Typography variant="h4" component="h2">
                    Tyler Kirkpatrick
                </Typography>
            </Card>
            <Card>
                <Typography variant="h4" component="h2">
                    Nathan Kirkpatrick
                </Typography>
            </Card>
    </div>
  );
}