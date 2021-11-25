import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TitleCard from '../TitleCard/TitleCard';

import bananaComic from '../common/images/banana_comic.jpg'
import venmoComic from '../common/images/venmo.jpeg'


const useStyles = makeStyles(theme => ({
  root: {
    overflow: 'hidden',
    backgroundColor: 'black',
  },
  mainPhoto: {
    width: '80%',
    height: '80%',
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className="Home">
        <br />
        <TitleCard/>
        <br />
        <img src={venmoComic} className={classes.mainPhoto} alt="Ryan Kirkpatrick" />
      
    </div>
  );
}

export default Home;
