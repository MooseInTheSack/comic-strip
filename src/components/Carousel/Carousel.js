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
        <br />
        <ImageGallery items={images} />;
      
    </div>
  );
}

export default Carousel;