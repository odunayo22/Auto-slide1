import React, { Component } from 'react';
import { FaFacebookF, FaTwitter,FaInstagram,FaLinkedin,FaSkype  } from 'react-icons/fa'; 
import { BiChevronRight } from 'react-icons/bi'; 
import './App.css';

class Footer extends Component {
    render(){
  return (
    <div>
     
     <footer id="footer">

<div className="footer-newsletter">
  <div className="container">
    <div className="row ">
      <div className="">
        <h4>Join Our Newsletter</h4>
        <p>Kindly send in your area of interest or any information to us here</p>
        <form action="" method="post">
          <input type="email" name="email" /><input type="submit" value="Subscribe" />
        </form>
      </div>
    </div>
  </div>
</div>

<div className="footer-top">
  <div className="container">
    <div className="row">

      <div className="footers  footer-contact">
        <h4>PDF</h4>
        <p>
         Oba Adesoji road <br />
          East By Pass, beside Ebunoluwa <br />
          Osogbo Osun State, Nigeria <br /><br />
          <strong>Phone:</strong> 07033895846<br />
          <strong>Email:</strong> pdfmoney@gmail.com<br />
        </p>
      </div>

      <div className="footers  footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li> <a href="#">Home</a></li>
          <li> <a href="#">Internet Banking</a></li>
          <li> <a href="#">Open Account</a></li>
          <li> <a href="#">About us</a></li>
          <li><a href="#">Privacy policy</a></li>
        </ul>
      </div>

      <div className="footers footer-links">
        <h4>Our Services</h4>
        <ul>
          <li><BiChevronRight className="chevvy" /> <a href="#"> Daily Loan</a></li>
          <li><BiChevronRight className="chevvy" /> <a href="#">Weekly Loan</a></li>
          <li><BiChevronRight className="chevvy" /> <a href="#">Monthly Loan</a></li>
          <li><BiChevronRight className="chevvy" /> <a href="#">Investment Loan</a></li>
          <li><BiChevronRight className="chevvy" /> <a href="#">Yearly Loan</a></li>
        </ul>
      </div>

      <div className="footers  footer-links">
        <h4>Our Social Networks</h4>
        <p>You can reach us on any of the following pages:</p>
        <div className="social-links mt-3">
          <a href="#" className="twitter"><FaFacebookF className="bx bxl-twitter" /></a>
          <a href="#" className="facebook"><FaInstagram className="bx bxl-facebook" /></a>
          <a href="#" className="instagram"><FaLinkedin /></a>
          <a href="#" className="google-plus"><FaSkype className="bx bxl-skype" /></a>
          <a href="#" className="linkedin"><FaTwitter className="bx bxl-linkedin" /></a>
        </div>
      </div>

    </div>
  </div>
</div>

<div className="container py-4">
  <div className="copyright">
    &copy; Copyright <strong><span>Ketanech</span></strong>. All Rights Reserved
  </div>
  <div className="credits">
   
    
    Designed by <a href="https://phemmadey.com/">Ketanech</a>
  </div>
</div>
</footer>
</div>
);
}
}





 
export default Footer;
