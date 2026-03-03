import React from 'react';
import NavigationBar from "./Navbar";

export default function Contact() {
  return (
    <div>
    <div
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
          backgroundColor: "#f8f9fa", // Same as the default Bootstrap navbar color
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)", // Optional: subtle shadow for better visibility
        }}
      >
        <NavigationBar />
      </div>

    <div 
      style={{
        background: "linear-gradient(to right, #e0f7fa, #80deea)", // Soft gradient background

        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#f7f7f7', 
        overflow: 'hidden', // Prevents scrolling
        padding: '0 20px' // Adds some padding on sides if necessary
      }}
    >
      

      <h1 
        style={{
          textAlign: 'center', 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          color: '#333', 
          margin: 0, 
          padding: '20px', // Adds padding around the text for better readability
          backgroundColor: '#e3f2fd', // Light blue background
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Slight shadow for depth
          width: '100%',
          maxWidth: '600px' // Limits the text width to look better on large screens
        }}
      >
        For any queries, contact: <a href="mailto:swapna@gmail.com" style={{ color: '#1e88e5' }}>swapna@gmail.com</a>
      </h1>
      </div>
    </div>
  );
}