import React from "react"
import "./style.css"
// import ''
const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <div className="box-img">
            <img src="../../../footLogo.png" alt="" srcset="" />
            {/* <img src="../../../public/footr-logo.svg" alt="" srcset="" /> */}
            </div>
          </div>

          <div className='box'>
            <h2>App categories</h2>
            <ul>
              <li>Finding products</li>
              <li>Selling products</li>
              <li>Orders and shipping</li>
              <li>Store design</li>
              <li>Marketing and conversion</li>
              <li>Store management</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Popular topics</h2>
            <ul>
              <li>Dropshipping</li>
              <li>Email marketing</li>
              <li>Advertising</li>
              <li>Selling methods</li>
              <li>Social proof</li>
              <li>Search engine optimization</li>
              <li>Upselling and cross-selling</li>
              <li>Fulfilling orders</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Resources</h2>
            <ul>
              <li>24/7 support</li>
              <li>Shopify Help Center</li>
              <li>API documentation</li>
              <li>Shopify community</li>
              <li>Community events</li>
              <li>Shopify blog</li>
              <li>Research</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Shopify</h2>
            <ul>
              <li>About</li>
              <li>Contact</li>
              <li>Careers</li>
              <li>Press and media</li>
              <li>Partner program</li>
              <li>Affiliate program</li>
              <li>Investors</li>
              <li>Legal</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
