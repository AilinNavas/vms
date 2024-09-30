'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const MasonryGrid = ({ images = [] }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className='columns-1 md:columns-3 py-10 gap-4'>
      {images.map((image, index) => {
        return (
          <div key={index} className='break-inside-avoid '>
            <Image 
              src={image.src} 
              alt={image.alt} 
              className='w-full object-cover rounded-lg cursor-pointer mb-4'
              onClick={() => handleImageClick(image)}
            />
          </div>
        );
      })}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className='fixed inset-0 flex items-center justify-center bg-black/70 z-50'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className='relative'>
              <Image 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className='rounded-lg max-w-full max-h-full lg:max-w-lg object-cover'
              />
              <button 
                onClick={handleClose} 
                className='absolute top-4 right-4 text-secondary text-xl bg-primary/50 rounded-full py-2 px-3 hover:bg-primary'
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MasonryGrid;
