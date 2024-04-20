import React, { useState, useEffect } from 'react';
import Button from './Button';

const colors = ['#f30a0a', '#0611f2', '#00fbfe', '#fef500', '#072401'];

// Function to shuffle an array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Homepage = () => {
  const [colorMapping, setColorMapping] = useState([]);

  useEffect(() => {
    const updateColors = () => {
      const shuffledColors = shuffleArray([...colors]); // Shuffle colors array
      setColorMapping(shuffledColors);
      setTimeout(updateColors,3000); // Update colors every 3 seconds
    };

    updateColors(); // Initial call to updateColors

    return () => {
      // Cleanup function
    };
  }, []); // Empty dependency array to run effect only once on component mount

  return (
    <div className='w-full flex lg:flex-row flex-col-reverse lg:mt-4 mt-8 min-h-[40vh] justify-between items-center '>
      <div className="leftside lg:w-[45%] w-full flex flex-col justify-center items-center gap-3 lg:mt-0 mt-8">
        <h1 className='font-bold lg:text-[4vw] text-[10vw] lg:leading-[4.5vw] leading-[11vw] text-center'>The <span className='text-[#f30a0a]'>Superfast</span>, <span className='text-[#0611f2]'>Easy to Use</span>, <span className='text-[#00fbfe]'>Lightweight</span> and <span className='text-[#fef500]'>Minimal</span> Color Picker</h1>
        <p className='lg:text-[1.4vw] text-[6vw] text-center'>Create the color you like, pick it and use it on your CSS</p>
        <Button className='lg:w-2/3 w-[85%] bg-[#0611f2] border-[#0611f2] font-bold uppercase hover:bg-white hover:text-[#0611f2] transition-all duration-300'>Color Picker</Button>
        <Button className='lg:w-2/3 w-[85%] bg-[#0611f2] border-[#0611f2] font-bold uppercase hover:bg-white hover:text-[#0611f2] transition-all duration-300'>Gradient Picker</Button>
      </div>
      <div className="rightside lg:w-[50%] w-full lg:h-[60vh] h-[30vh] flex rounded-2xl overflow-hidden">
        {colorMapping.map((color, index) => (
          <div key={index} className='w-[20%] transition-all duration-500' style={{ backgroundColor: color }}></div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;