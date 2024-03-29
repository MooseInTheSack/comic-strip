import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

import TitleCard from '../TitleCard/TitleCard';

import venmoHoboComic from '../common/images/venmo_hobo.jpeg'
import { Button, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    overflow: 'hidden',
    backgroundColor: 'black',
  },
  mainPhoto: {
    width: '50%',
    height: '50%',
  },
}));

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blue[500]),
  backgroundColor: blue[500],
  '&:hover': {
    backgroundColor: blue[700],
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className="Home">

        <TitleCard/>
        <br />
        <img src={venmoHoboComic} className={classes.mainPhoto} alt="Ryan Kirkpatrick" />
        <br />
        <br />
        <br />
        <br />
        <Typography variant="h5" component="h5">Want to see more?</Typography>
        <br />
        <ColorButton variant="contained" href="/carousel">View Comics</ColorButton>


    </div>
  );
}

export default Home;
