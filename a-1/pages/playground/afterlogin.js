import React, { useState, useEffect } from 'react'

export const config = {amp:true}
const AL= () => {
    useEffect(() => {
      const handleShadow = () => {
        if (window.scrollY >= 90) {
          setShadow(true);
        } else {
          setShadow(false);
        }
      };
      window.addEventListener('scroll', handleShadow);
    }, []);
    return(

 <div > CONTENNNT  </div>

    )
};
export default AL
