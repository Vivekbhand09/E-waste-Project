import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ContributionForm() {
  const [contributionData, setContributionData] = useState({
    productName: '',
    productId: '',
    manufacturingDate: '',
    emailId: '',
    address: ''
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setContributionData({ ...contributionData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/thank-you', { state: contributionData });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contribution Form</h2>
      <label>Product Name:</label>
      <input type="text" name="productName" value={contributionData.productName} onChange={handleChange} required />
      
      <label>Product ID:</label>
      <input type="text" name="productId" value={contributionData.productId} onChange={handleChange} required />
      
      <label>Manufacturing Date:</label>
      <input type="date" name="manufacturingDate" value={contributionData.manufacturingDate} onChange={handleChange} required />
      
      <label>Email ID:</label>
      <input type="email" name="emailId" value={contributionData.emailId} onChange={handleChange} required />
      
      <label>Address:</label>
      <input type="text" name="address" value={contributionData.address} onChange={handleChange} required />
      
      <button type="submit">Submit Contribution</button>
    </form>
  );
}

export default ContributionForm;
