import React from "react";

export default function footer() {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto px-8 py-12">
        <div className="md:flex flex-wrap gap-5 justify-between">
          <div className="footerHeader relative">
            <p>Newsletter</p>
            <p>Sign up for 10% off your first order</p>
            <label className="absolute text-xs bg-black p-1 top-[84px] left-3">Your email</label>
            <input type="email" className="rounded-full bg-transparent border py-4 px-4 my-4" />
          </div>
          <div className="footerHeader">
            <p>Help</p>
            <a href="#">Contact Us</a>
            <a href="#">Returns</a>
            <a href="#">Make a Return</a>
            <a href="#">Delivery</a>
            <a href="#">FAQ</a>
            <a href="#">Size Guides</a>
          </div>
          <div className="footerHeader">
            <p>Other</p>
            <a href="#">Terms and Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
          </div>
          <div className="footerHeader">
            <p>Pages</p>
            <a href="#">Affiliates</a>
            <a href="#">Blue Light Card</a>
            <a href="#">Student & Graduate Discounts</a>
          </div>
          <div className="footerHeader">
            <p>Follow us</p>
            <div className="flex gap-2">
            <p className="footerIcons">f</p>
            <p className="footerIcons">In</p>
            <p className="footerIcons">t</p>
            </div>
          </div>
        </div>
        <div className="md:flex justify-between">
          <div>© 2024 | DayRex LTD.</div>
          <div className="flex gap-2">
            <p className="footerIconVisa">VISA</p>
            <p className="footerIconVisa">VISA</p>
            <p className="footerIconVisa">VISA</p>
            <p className="footerIconVisa">VISA</p>
            <p className="footerIconVisa">VISA</p>
            <p className="footerIconVisa">VISA</p>
            <p className="footerIconVisa">VISA</p>
            </div>
        </div>
      <div className="py-8 text-black">
        <form>
          <select>
            <option value="English">Ireland (EUR €)</option>
            <option value="English">United Kingdom (GBP £)</option>
            <option value="English">United Kingdom (GBP $)</option>
          </select>
        </form>
      </div>
      </div>
    </div>
  );
}
