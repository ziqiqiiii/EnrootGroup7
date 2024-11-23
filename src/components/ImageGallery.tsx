"use client";

import React, { useState, useEffect, useRef } from "react";

const ImageGallery = () => {
  const [images, setImages] = useState([


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
