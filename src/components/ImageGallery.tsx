"use client";

import React, { useState, useEffect, useRef } from "react";

const ImageGallery = () => {
  const [images, setImages] = useState([
    "https://sutdapac-my.sharepoint.com/personal/jiahao_yao_mymail_sutd_edu_sg/Documents/Term%201/vs%20code/media/1F289604-1385-47AE-AFCC-4E642D71F7DA.jpeg",
    "https://sutdapac-my.sharepoint.com/personal/jiahao_yao_mymail_sutd_edu_sg/Documents/Term%201/vs%20code/media/AFCC88EF-C84A-4E8D-8ACB-6A8DC0B060ED_1_102_o.jpeg",
    "https://sutdapac-my.sharepoint.com/personal/jiahao_yao_mymail_sutd_edu_sg/Documents/Term%201/vs%20code/media/A9DF1EED-0BFC-464E-BEB8-A41A699E4D6F_1_102_o.jpeg",
    "https://sutdapac-my.sharepoint.com/personal/jiahao_yao_mymail_sutd_edu_sg/Documents/Term%201/vs%20code/media/E2176622-4550-4721-BF9E-D0F6409B7168_4_5005_c.jpeg",
    "https://sutdapac-my.sharepoint.com/personal/jiahao_yao_mymail_sutd_edu_sg/Documents/Term%201/vs%20code/media/IMG20241120204913.jpg",
    "https://sutdapac-my.sharepoint.com/personal/jiahao_yao_mymail_sutd_edu_sg/Documents/Term%201/vs%20code/media/FA2CA769-5356-4BCF-89F2-B943E0AE2A4A_4_5005_c.jpeg",
    "https://sutdapac-my.sharepoint.com/personal/jiahao_yao_mymail_sutd_edu_sg/Documents/Term%201/vs%20code/media/IMG20241120195130.jpg",
    "https://sutdapac-my.sharepoint.com/personal/jiahao_yao_mymail_sutd_edu_sg/Documents/Term%201/vs%20code/media/IMG20241120195835.jpg",
    "https://sutdapac-my.sharepoint.com/personal/jiahao_yao_mymail_sutd_edu_sg/Documents/Term%201/vs%20code/media/7C0F05A7-BE75-495C-B90E-3B95E34CA345_1_102_o.jpeg",
    "https://sutdapac-my.sharepoint.com/personal/jiahao_yao_mymail_sutd_edu_sg/Documents/Term%201/vs%20code/media/IMG20241120205032.jpg",
    "https://sutdapac-my.sharepoint.com/personal/jiahao_yao_mymail_sutd_edu_sg/Documents/Term%201/vs%20code/media/IMG20241120195130.jpg",
    "https://sutdapac-my.sharepoint.com/personal/jiahao_yao_mymail_sutd_edu_sg/Documents/Term%201/vs%20code/media/42BA0EE4-20CF-4DF5-B5CF-B307D5C1B1EB_1_102_o.jpeg",
    "https://sutdapac-my.sharepoint.com/personal/jiahao_yao_mymail_sutd_edu_sg/Documents/Term%201/vs%20code/media/467C6E42-CCB3-4C9F-A0D9-555C597B7A1A_1_102_o.jpeg",
    "https://sutdapac-my.sharepoint.com/personal/jiahao_yao_mymail_sutd_edu_sg/Documents/Term%201/vs%20code/media/4F723D49-5F38-4F96-BCE8-67D4B0AC36CF_1_102_o.jpeg",
    

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
