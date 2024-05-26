import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold mb-4">
              Questions? Contact us.
            </h3>
            <ul>
              <li>
                <Link to="/faq" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/help-center" className="hover:underline">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/account" className="hover:underline">
                  Account
                </Link>
              </li>
              <li>
                <Link to="/media-center" className="hover:underline">
                  Media Center
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">About Us</h3>
            <ul>
              <li>
                <Link to="/investor-relations" className="hover:underline">
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="hover:underline">
                  Jobs
                </Link>
              </li>
              <li>
                <Link to="/terms-of-use" className="hover:underline">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:underline">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link to="/contact-us" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/speed-test" className="hover:underline">
                  Speed Test
                </Link>
              </li>
              <li>
                <Link to="/legal-notices" className="hover:underline">
                  Legal Notices
                </Link>
              </li>
              <li>
                <Link to="/netflix-originals" className="hover:underline">
                  Netflix Originals
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Follow Us</h3>
            <ul>
              <li>
                <Link to="/facebook" className="hover:underline">
                  Facebook
                </Link>
              </li>
              <li>
                <Link to="/twitter" className="hover:underline">
                  Twitter
                </Link>
              </li>
              <li>
                <Link to="/instagram" className="hover:underline">
                  Instagram
                </Link>
              </li>
              <li>
                <Link to="/youtube" className="hover:underline">
                  YouTube
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Netflix, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
