import React from "react";
import "./heroi.css";
const Heroi = () => {
  return (
    <div className="container">
      <div className="heroi">    
      <div className="TryNow">
        <div className="fx">
          <div className="fx-img">
            <img
              src="https://cdn.shopify.com/app-store/listing_images/7cd2f69048a97092d60b5f6b3be10699/icon/CL2BhLSltPgCEAE=.png"
              alt=""
            />
          </div>
          <p>TryNow: Try Before You Buy</p>
        </div>
        <p>Free to install. Additional charges may apply.</p>
        <div className="ratings-style">
          <div className="ratings">
            <p className="heroi-heading">Rating (4)</p>
            <img src="../../../ratings.svg" alt="" srcset="" />
          </div>
          <div className="reviews">
            <p className="heroi-heading">Reviews</p>
            <p>7</p>
          </div>
          <div className="Developer">
            <p className="heroi-heading">Developer</p>
            {/* <p> */}
              <a>TryNow: Try Before You Buy</a>
            {/* </p> */}
            </div>
        </div>
        <div className="add-appp">
          <span>Add app</span>
        </div>
      </div>
      <div className="pro-ppl">
        <img src="https://cdn.shopify.com/app-store/listing_images/7cd2f69048a97092d60b5f6b3be10699/promotional_image/CKn6u6WQv_gCEAE=.png?height=720&width=1280" alt="" srcset="" />
      </div>
      <div className="imag-grid">
      <div className="imag-grid1">
        <img src="https://cdn.shopify.com/app-store/listing_images/7cd2f69048a97092d60b5f6b3be10699/desktop_screenshot/CPPM1JahtfgCEAE=.png?height=360&width=640" alt="" srcset="" />
      </div>
      <div className="imag-grid2">
        <img src="https://cdn.shopify.com/app-store/listing_images/7cd2f69048a97092d60b5f6b3be10699/desktop_screenshot/CMKkyrC5tfgCEAE=.png?height=360&width=640" alt="" srcset="" />
      </div>
      <div className="imag-grid3">
        <img src="https://cdn.shopify.com/app-store/listing_images/7cd2f69048a97092d60b5f6b3be10699/desktop_screenshot/CN_r85qNvfgCEAE=.png?height=360&width=640" alt="" srcset="" />
      </div>
        
      </div>
      </div>
    </div>
  );
};

export default Heroi;
