import React from 'react';
import Typography from '@material-ui/core/Typography';

import ImageGallery from 'react-image-gallery';
import {imagesObjects} from '../../imagePathsObject'

function Carousel() {
    const images = imagesObjects
    
  return (
    <div className="Carousel">
        <br />
        <Typography variant="h2" component="h2">
            Our Comics
        </Typography>

        <ImageGallery 
          items={images} 
          onClick={(param)=> {
            console.log("param: ", param?.target?.currentSrc)
            if(param?.target?.currentSrc) {
              window.open(param?.target?.currentSrc, "_blank")
            } else {
              console.error("Cannot open new tab of image... try right clicking the image and opening a new tab from there. But if you're looking at the console output, you probably already knew that tbh...")
            }
          }}
        />
      
    </div>
  );
}

export default Carousel;