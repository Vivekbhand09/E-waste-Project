import React from 'react';
import { useLocation } from 'react-router-dom';
import './ThankYou.css'; // Import the CSS file for styling

function ThankYou() {
  const { state } = useLocation();
  
  // Default values for e-waste components
  const plasticContent = '20% (outer casing)';
  const leadContent = '5% (internal solder)';
  const mercuryContent = '1% (screen backlight)';
  const cadmiumContent = '2% (battery)';
  
  return (
    <div className="thank-you-container">
      <h2 className="thank-you-title">Thanks for your Contribution!</h2>
      <p className="thank-you-description">We will soon contact you to collect your E-waste.</p>
      
      <h3 className="review-title">Review of Your Contribution:</h3>
      <ul className="contribution-list">
        <li>Product Name: {state.productName}</li>
        <li>Product ID: {state.productId}</li>
        <li>Manufacturing Date: {state.manufacturingDate}</li>
        <li>Email ID: {state.emailId}</li>
        <li>Address: {state.address}</li>
        <li>Plastic Content: {plasticContent}</li>
        <li>Lead Content: {leadContent}</li>
        <li>Mercury Content: {mercuryContent}</li>
        <li>Cadmium Content: {cadmiumContent}</li>
      </ul>
    </div>
  );
}

export default ThankYou;
