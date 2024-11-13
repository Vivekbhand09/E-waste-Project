import React from 'react';

function Homepage() {
  return (
    <div>
      <h1 style={{ fontWeight: 'bold', fontSize: '3em', textAlign: 'center' }}>Welcome to E-Waste Management</h1>
      <p style={{ fontSize: '1.5em', fontWeight: 'bold', textAlign: 'center' }}>Your contribution can help to control e-waste for a cleaner environment.</p>
      <img
        src="./images/home3.jpg"
        alt=""
        style={{
          width: '80%',
          height: '100vh',
          margin: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      />

      {/* E-Waste Awareness Section */}
      <section style={{ padding: '30px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
        <h2>The E-Waste Problem</h2>
        <p>Did you know that over 50 million tons of e-waste is generated globally every year? E-waste is one of the fastest-growing waste streams worldwide.</p>
        <img src="https://media.istockphoto.com/id/1031730794/vector/modern-green-industrial-recycle-process-infographic-illustration.jpg?s=612x612&w=0&k=20&c=IpJpzpCkGKx57QHCWojFL_mLrbOu8CO7T_isc0YtUXE=" alt=""  style={{ maxWidth: '100%', height: 'auto' }} />
      </section>

      {/* Call to Action Buttons */}
      <section style={{ textAlign: 'center', margin: '30px 0' }}>
        <h2>Ready to Make a Difference?</h2>
        <button style={{ padding: '10px 20px', fontSize: '1.2em', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={() => window.location.href='/donate'}>Donate E-Waste</button>
        <button style={{ padding: '10px 20px', fontSize: '1.2em', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginLeft: '20px' }} onClick={() => window.location.href='/volunteer'}>Become a Volunteer</button>
      </section>

      {/* Success Stories */}
      <section style={{ textwei:'',backgroundColor: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
        <h2>Success Stories</h2>
        <p>"We recycled over 500 electronic devices last month. Our efforts are making a difference!" - Local Community Group</p>
      </section>

      <section style={{ padding: '30px', textAlign: 'center' }}>
  <h2>Find a Collection Center Near You</h2>

  {/* E-Waste Image */}
  <img 
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrElfDy39b7p3g8dS_9TRtXSA4M7e_KjEeng&s" 
  alt=""
    style={{ maxWidth: '100%', height: '50vh', marginTop: '15px' }}
  />
</section>


      {/* E-Waste Recycling Process */}
      <section style={{ backgroundColor: '#e0ffe0', padding: '30px', textAlign: 'center' }}>
        <h2>How E-Waste Gets Recycled</h2>
        <ul>
          <li>Collection and Sorting</li>
          <li>Shredding and Separation</li>
          <li>Refining Materials</li>
          <li>Manufacturing New Products</li>
        </ul>
      </section>

      {/* Tips for Reducing E-Waste */}
      <section style={{ backgroundColor: '#f0f0f0', padding: '30px', textAlign: 'center' }}>
        <h2>Simple Ways to Reduce E-Waste</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>Donate old devices instead of discarding them.</li>
          <li>Repurpose old electronics for new uses.</li>
          <li>Buy refurbished or second-hand gadgets.</li>
        </ul>
      </section>

      {/* Footer Section */}
      <footer style={footerStyle}>
        <div>
          <h3>Get Involved</h3>
          <p>Learn how you can contribute to reducing e-waste.</p>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/donate">Donate</a></li>
            <li><a href="/volunteer">Volunteer</a></li>
          </ul>
        </div>

        {/* Middle Section with E-Waste Message */}
        <div style={messageStyle}>
          <h3>Every Piece Matters!</h3>
          <p>
            E-Waste is one of the fastest-growing waste streams in the world. Every year, millions of electronic devices end up in landfills,
            causing harm to our environment. Recycling and proper disposal of electronics can save precious resources and reduce hazardous waste. 
            Join us in creating a cleaner and greener planet—one device at a time.
          </p>
          <p><strong>Let’s make recycling a habit, not a choice.</strong></p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/e-waste-facts">E-Waste Facts</a></li>
            <li><a href="/disposal-guidelines">Disposal Guidelines</a></li>
            <li><a href="/recycling-program">Recycling Program</a></li>
          </ul>
        </div>

        <div style={copyrightStyle}>
          <p>Made by Vivek & Rohit ❤️</p>
        </div>
      </footer>
    </div>
  );
}

// Styling for Footer
const footerStyle = {
  backgroundColor: '#333',
  color: 'white',
  padding: '20px',
  marginTop: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
};

const messageStyle = {
  flex: 1,
  textAlign: 'center',
  padding: '20px',
  backgroundColor: '#444',
  margin: '0 20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

const copyrightStyle = {
  textAlign: 'center',
  width: '100%',
  marginTop: '10px',
};

export default Homepage;
