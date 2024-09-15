import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <>
        <div className="footermain">
            <hr className='footerline'/>
            <div className="upperpart">
                
                <div className='div-footer-upper'>
                    <h3 className='footer-upper-heading'>OFFLINE STORE</h3>
                    <p>Find Store near me</p>
                </div>
                <div className='div-footer-upper'>
                  <h3 className='footer-upper-heading'>GET TO KNOW US</h3>
                  <p>Contact us</p>
                  <p>FAQ's</p>
                  <p>Blogs</p>
                  <p>Terms & Conditions</p>
                </div>
                <div className='div-footer-upper'>
                  <h3 className='footer-upper-heading'>TRACK/RETURN/EXCHANGE</h3>
                  <p>Track your order</p>
                  <p>Return your order</p>
                  <p>Exchange Item</p>
                </div>
                <div className='div-footer-upper'>
                  <h3 className='footer-upper-heading'>CUSTOMER CARE</h3>
                  <p>Timings: 10AM - 7PM(Mon-Fri)</p>
                  <p>Whatsapp - 7319117040</p>
                  <p>Instagram - @Wellnesswr.in</p>
                </div>
            </div>
            <div className="lower-part">
              <h3 className='footer-upper-heading2'>SIGN UP AND SAVE</h3>
              <p>Sign up and be the first one to know about our deals, offers....</p>
              <div className="inputs-lower">
                <div className="lowerpart-input">
                  <input type='text' className='input-footer-lower' placeholder='Enter your Email'/>
                  <i className="fa-regular fa-envelope item"></i>
                </div>
                <div className="lowerpart-input">
                  <input type='text' className='input-footer-lower' placeholder='Give Feedback!!'/>
                  <i class="fa-solid fa-comment"></i>
                </div>
              </div>
              <div className="icons">
                <i class="fa-brands fa-instagram footer-icon"></i>
                <i class="fa-brands fa-facebook footer-icon"></i>
                <i class="fa-brands fa-youtube footer-icon"></i>
                <i class="fa-brands fa-linkdin footer-icon"></i>
                <i class="fa-brands fa-twitter footer-icon"></i>
              </div>
              <div className="end">
                <p>@Wellness 2024</p>
                <div className="h">
                  <p>Made in India,for the Universe</p>
                  <img className='h-photo' src='src\photos\icons8-universe-48.png'/>

                </div>
                
                
              </div>



              

            </div>
        </div>
    </>
  )
}

export default Footer
