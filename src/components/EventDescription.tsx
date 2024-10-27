import React from 'react';
import Carousel from './Carousel';
import Description from './Description';

function EventDescription() {
  return (
      <div className="flex lg:flex-row flex-col items-center lg:w-11/12 sm:w-full">
        <Carousel/>
        <Description />
    </div>
  )
}

export default EventDescription