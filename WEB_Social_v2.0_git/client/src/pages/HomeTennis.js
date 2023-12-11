import React from 'react';
import './style.css'; // Assuming you have a CSS file for styling

function HomeTennis() {
  return (
    <div className="home-tennis-container">
      <div className="iframe-container">
        {/* Example iframe. Replace 'src' with your desired URL */}
        <iframe
          title="Tennis Content"
          src="http://127.0.0.1:5500/index.html"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      {/* Additional content can be added here */}
    </div>
  );
}

export default HomeTennis;
