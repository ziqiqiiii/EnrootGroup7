import React from 'react';

const ImageGallery = () => {
  const images = [
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {Array(4).fill(0).map((_, colIndex) => (
        <div key={colIndex} className="grid gap-4">
          {images.slice(colIndex * 3, colIndex * 3 + 3).map((image, index) => (
            <div key={index}>
              <img className="h-auto max-w-full rounded-lg" src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
