import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { Button, Stack} from '@mui/material';
import './TestSlider.css';
const TestSlider = () => {
	return (
		<div>
			 <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={10}
        totalSlides={3}
      >
        <Slider className='slider'>     
          <Slide index={0} className='slide'>
          <div >
          I am the first Slide.
          </div>
          </Slide>

          <Slide index={1} className='slide'>
          <div>
          I am the second Slide.
          </div>
          </Slide>

          <Slide index={2} className='slide'>
          <div>
          I am the third Slide.
          </div>
          </Slide>
        </Slider>

        <div className="slider-buttons">
            <Stack direction = "row" spacing = {2} justifyContent="center" alignItems="center" className='stack-style'
              >
              <ButtonBack style = {{border: '0px'}}>
                <Button variant= "contained" color= "secondary" size = 'large' >Back</Button>
              </ButtonBack>

              <ButtonNext style = {{border: '0px'}}>
                <Button variant= "contained" color= "secondary" size= "large" >Next</Button>
              </ButtonNext>
            </Stack>
          </div>
      </CarouselProvider>
		</div>
	);
};

export default TestSlider;