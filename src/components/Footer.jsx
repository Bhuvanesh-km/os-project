import React from "react";

const Footer = () => {
  return (
    <div className="footer-conatiner">
      <div className="f-section">
        <div className="f-signup">
          <h1>Be the first to know</h1>
          <p>Sign up for updates from mettā muse.</p>
          <div>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your e-mail..."
            />
            <button>subscribe</button>
          </div>
        </div>
        <div className="f-contact">
          <h1>CONTACT US</h1>
          <div className="contact">
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
          </div>
          <h1>Currency</h1>
          <div className="f-us">
            <img src="/US.svg" alt="US" />
            <img src="/star.svg" alt="star" />
            <h3>USD</h3>
          </div>
          <p>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>
      {/* section 2 */}
      <div className="f-section">
        <div className="f-muse">
          <h1>mettā muse</h1>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        <div className="f-links">
          <h1>QUICK LINKS</h1>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <div className="f-social">
            <h1>Follow Us</h1>
            <ul className="socials">
              <li>
                <img src="/Insta.svg" alt="instagram" />
              </li>
              <li>
                <img src="/linkedIn.svg" alt="linkedIn" />
              </li>
            </ul>
          </div>
          <div className="f-pay">
            <h1>mettā muse Accepts</h1>
            <ul className="pay-methods">
              <li>
                <img src="/gpay.svg" alt="gpay" />
              </li>
              <li>
                <img src="/mastercard.svg" alt="mastercard" />
              </li>
              <li>
                <img src="/paypal.svg" alt="paypal" />
              </li>
              <li>
                <img src="/amex.svg" alt="amex" />
              </li>
              <li>
                <img src="/apple.svg" alt="apple" />
              </li>
              <li>
                <img src="/pay.svg" alt="pay" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p>Copyright © 2023 mettamuse. All rights reserved.</p>
    </div>
  );
};

export default Footer;
