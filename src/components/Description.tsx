import React from 'react';
import Button from './Button';

function Description() {
  return (
    <div className='flex flex-col lg:w-max-[130px] lg:h-[600px] lg:py-36 py-16 px-8'>
        <div className='text-green-950 lg:text-4xl text-3xl'>Soft Toy Workshop</div>
        <div className='text-light-brown-green text-sm'>by EnROOT Group7</div>
        <p className="text-base lg:text-lg sm:text-xs max-w-xl mt-4">
            Who does not love cute plushies?? Join us as we make adorable cats, snowmen, and koalas out of socks!! 
        </p>
        <Button
          type="button"
          title="Sign Up Now"
          icon="/add-user.png"
          variant="btn_white shadow-lg shadow-teal-900/40 lg:my-4 mt-16 bottom-0 text-4xl"
          link = "https://forms.office.com/r/hegwefLT3F"
          linkNewTab={true}
        />
    </div>
  )
}

export default Description;
