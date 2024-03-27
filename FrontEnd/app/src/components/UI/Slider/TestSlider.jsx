import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { Button, Stack } from '@mui/material';

const TestSlider = () => {
	return (
		<div>
			 <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={10}
        totalSlides={3}
      >

        <Slider style={{
                width: '50%', 
                margin: '0 auto',
                background: "indigo",
                color: "white"
                      }}>
            
          <Slide index={0} style={{textAlign: 'center'}}>
          <div style={{ fontSize: '24px', fontFamily: 'Arial Black, sans-serif', textTransform: 'lowercase' }}>
          I am the first Slide.
          </div>
          </Slide>

          <Slide index={1} style={{textAlign: 'center'}}>
          <div style={{ fontSize: '24px', fontFamily: 'Arial Black, sans-serif', textTransform: 'lowercase' }}>
          I am the second Slide.
          </div>
          </Slide>

          <Slide index={2} style={{textAlign: 'center'}}>
          <div style={{ fontSize: '24px', fontFamily: 'Arial Black, sans-serif', textTransform: 'lowercase' }}>
          I am the third Slide.
          </div>
          </Slide>

        </Slider>

        <div className="slider-buttons">
            <Stack direction = "row" spacing = {2} justifyContent="center">
              <ButtonBack style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignContent: 'center',
                          margin: '5px',
                          border: '0px',
                }}>
                <Button variant="contained" color="secondary" size = "large" >Back</Button>
              </ButtonBack>

              <ButtonNext style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignContent: 'center',
                          margin: '5px',
                          border: '0px',}}>
                <Button variant="contained" color="secondary" size = "large">Next</Button>
              </ButtonNext>
            </Stack>
          </div>
      </CarouselProvider>
		</div>
	);
};

export default TestSlider;