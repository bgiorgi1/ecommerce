import React from 'react';

import './menu-item.styles.scss';

//instead of passing down props, we're destructruing the component and passing down specifics 
const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className='background-image' //setting background image to image URL, passed down through destructuring in our directory
      style={{
        backgroundImage: `url(${imageUrl})` //JS template strings which allows us to dynamically create styles on compnents
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;