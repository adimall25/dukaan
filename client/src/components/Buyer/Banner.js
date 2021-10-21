import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { makeStyles } from '@mui/styles';

const upStyles = makeStyles({
  image: {
    width: '100%',
    height: 280,
  },
  carousel: {
    marginTop: 10,
  },
});

export function Banner(props) {
  const classes = upStyles();
  const items = [
    'https://rukminim1.flixcart.com/flap/3376/560/image/d117a62eb5fbb8e1.jpg?q=50',
    'https://rukminim1.flixcart.com/flap/3376/560/image/57267a180af306fe.jpg?q=50',
    'https://rukminim1.flixcart.com/flap/3376/560/image/ae9966569097a8b7.jpg?q=50',
    'https://rukminim1.flixcart.com/flap/3376/560/image/f6202f13b6f89b03.jpg?q=50',
  ];

  return (
    <div>
      <Carousel
        animation="slide"
        navButtonsAlwaysVisible={true}
        autoPlay={true}
        cycleNavigation={true}
        indicators={false}
        navButtonsProps={{
          style: {
            background: '#FFFFFF',
            color: '#494949',
            borderRadius: 0,
            margin: 0,
          },
        }}
        className={classes.carousel}>
        {items.map((image) => (
          <img className={classes.image} src={image} />
        ))}
      </Carousel>
    </div>
  );
}
