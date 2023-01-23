import React from 'react'
import './About.css'
const About = () => {
    return (
        <div className='container about'>
        <div className="l-about">
        <div className="highlight">
            <h4 className='mg-4'>Highlights</h4>
            <div className="l-aboutp1 mg-4">
                <div className="l-aboutp-img">

                <img src="https://cdn.shopify.com/shopifycloud/shopify_app_store/assets/app_details_page/highlights/speed_tested-ab45f846dabdff486245406baa5933777fc5926b1cfab8e6807cde409d09b605.svg" alt="" srcset="" />
                <span>Speed tested</span>
                </div>
                <p className='l-aboutp-p'>
                Low impact to your online store
                </p>
            </div>
            <div className="l-aboutp2 mg-4">
                <div className="l-aboutp-img">
                <img src="https://cdn.shopify.com/shopifycloud/shopify_app_store/assets/app_details_page/highlights/for_your_business-4063b64d443f130fa2b4624dfacfb64f9394da71d5c3eaefe2f16cc799be5335.svg" alt="" srcset="" />
                <span>Built for your business</span>
                </div>
                <p className='l-aboutp-p'>
                Works with the latest themes
                </p>
            </div>
                
            </div>
            <div className="mainabout">
            <h4 className='mg-4 mot-4'>About this app</h4>
            <div className="l-aboutp1 mg-4">            
                <div className="mainabout-p">
                Launched
                </div>
                <p className='mainabout-p'>
                June 21, 2022
                </p>
            </div>
            <div className="l-aboutp2 mg-4">
                <div className="mainabout-p">
              
                Languages
                </div>
                <p className='mainabout-p'>
                English
                </p>
            </div>
            <div className="l-aboutp1 mg-4">
                <div className="mainabout-p">
                Categories
                </div>
                <a>
                Purchase options - Other
                </a>
            </div>
            </div>
        </div>
        <div className="r-about">
            <h2>Acquire and retain shoppers by giving them the option to try your products before they buy them.</h2>
            <p className="mg-4">TryNow empowers Merchants to offer try before you buy experiences to your shoppers. This benefits shoppers giving them a risk-free way to discover brands and products and in turn increases conversion and LTV for merchants. TryNow integrates seamlessly with Shopify checkout and with a Merchant's fulfillment and reverse logistics operations and does not introduce any risk for fraud or shopper non-payment. TryNow aids merchants in setting clear expectations with shoppers around their trial orders.</p>
            <div className="r-about-timlin">
                <div className="r-about-timlinimg">
                    <img src="https://cdn.shopify.com/shopifycloud/shopify_app_store/assets/app_details_page/feature-icon-fe27ae4d66955b281c7352164b6387a5ba7dd48a0b643b33f4655eb786cfa46f.svg" alt="" srcset="" />                    
                <span>Shoppers love being able to try before they buy. Merchants watch sales grow.</span>
                </div>
            </div>
            <div className="r-about-timlin">
                <div className="r-about-timlinimg">
                    <img src="https://cdn.shopify.com/shopifycloud/shopify_app_store/assets/app_details_page/feature-icon-fe27ae4d66955b281c7352164b6387a5ba7dd48a0b643b33f4655eb786cfa46f.svg" alt="" srcset="" />                    
                <span>Seamless integrates with checkout and merchants' existing operations.</span>
                </div>
            </div>
            <div className="r-about-timlin">
                <div className="r-about-timlinimg">
                    <img src="https://cdn.shopify.com/shopifycloud/shopify_app_store/assets/app_details_page/feature-icon-fe27ae4d66955b281c7352164b6387a5ba7dd48a0b643b33f4655eb786cfa46f.svg" alt="" srcset="" />                    
                <span>Offers complete fraud protection and no risk of non-payment.</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About