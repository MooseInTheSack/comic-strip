import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import mascot from '../common/images/mascot.png'

const useStyles = makeStyles(theme => ({
  root: {
    overflow: 'hidden',
    backgroundColor: 'black',
  },
  self_p: {
    width: '50%',
    height: '50%',
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className="Home">
        <h2>Morbid Beans</h2>
        <p>A comic page about... uh... well, beans...</p>
        <img src={mascot} className={classes.self_p} alt="Ryan Kirkpatrick" />
      
    </div>
  );
}

export default Home;
