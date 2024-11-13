import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    city: '',
    address: '',
    pincode: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration Successful!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <label>Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      <label>Mobile:</label>
      <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} required />
      <label>City:</label>
      <input type="text" name="city" value={formData.city} onChange={handleChange} required />
      <label>Address:</label>
      <input type="text" name="address" value={formData.address} onChange={handleChange} required />
      <label>Pin Code:</label>
      <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} required />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
