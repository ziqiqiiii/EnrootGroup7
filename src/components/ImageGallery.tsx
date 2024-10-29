"use client";

import React, { useState, useEffect, useRef } from "react";

const ImageGallery = () => {
  const [images, setImages] = useState([
    "https://plus.unsplash.com/premium_photo-1727895552599-fcd861505235?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
    "https://images.unsplash.com/photo-1729731321920-294d9e7b88af?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ]);
  const [columns, setColumns] = useState(3);
  const imagesFetched = useRef(false);

  // Fetch the images from the API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/gallery');
        if (!response.ok)
            throw new Error('error: failed to fetch all the images');
        const imageUrls = await response.json();

        // Append new images from API
        setImages((prevImages) => [...prevImages, ...imageUrls]);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    if (!imagesFetched.current) {
      fetchImages();
      imagesFetched.current = true; // Mark images as fetched
    }
  }, []);

  // Adjust columns dynamically based on window size
  const handleResize = () => {
    const width = window.innerWidth;
    if (width < 600) {
      setColumns(2); // Small screens
    } else if (width < 900) {
      setColumns(3); // Medium screens
    } else {
      setColumns(4); // Large screens
    }
  };

  useEffect(() => {
    // Run on mount and when window resizes
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // Clean up
  }, []);

  // Distribute images across columns dynamically
  const distributeImages = (images: string[], columns: number) => {
    const columnsArray: string[][] = Array.from({ length: columns }, () => []);
    images.forEach((image, index) => {
      columnsArray[index % columns].push(image);
    });
    return columnsArray;
  };

  const columnImages = distributeImages(images, columns); // Get the images per column

  return (
    <div className="flex gap-4 p-4">
      {columnImages.map((column, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-4" style={{ width: `${100 / columns}%` }}>
          {column.map((image, imgIndex) => (
            <img
              key={imgIndex}
              src={image}
              alt={`Gallery image ${imgIndex}`}
              width={400}
              height={300}
              className="w-full h-auto rounded-lg object-cover"
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
