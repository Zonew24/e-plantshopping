import React, { useState } from 'react';
import ProductList from './Plants';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div className="content">
          <div className="landing_content">
             <h1>Welcome To Paradise Nursery</h1>
             <div className="divider"></div>
             <p>Where Green Meets Serenity</p>
             <button className="get-started-button" onClick={handleGetStartedClick}>
                Get Started
             </button>
          </div>
          <div className="aboutus_container">
            <div className="aboutus_text_container">
                <p className="aboutus_text">
                    At Paradise Nursery, we are passionate about bringing nature closer to you. Our mission is to provide a wide range of high-quality plants that not only enhance the beauty of your surroundings but also contribute to a healthier and more sustainable lifestyle.
                </p>
                <p className="aboutus_text">
                    Our team of experts is dedicated to ensuring that every plant meets our strict standards of quality and care. 
                </p>
                <p className="aboutus_text">
                    Join us in our mission to create a greener, healthier world. Visit Paradise Nursery today and experience the beauty of nature right at your doorstep.
                </p>
            </div>
           </div>
        </div>
      </div>
      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        <ProductList />
      </div>
    </div>
  );
}

export default App;