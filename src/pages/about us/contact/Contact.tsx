import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-screen-md mx-auto mt-5 space-y-8">
        <h2 className="text-2xl font-bold text-center hover:text-lime-600">Contact Information</h2>
        
        <div className="space-y-6">
          <div className="flex items-center">
            <FaPhone className="text-[#020C29] text-2xl mr-4" />
            <div>
              <p className="text-lg font-semibold">Phone Number</p>
              <p className="text-gray-700">0000000000</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <FaEnvelope className="text-[#020C29] text-2xl mr-4" />
            <div>
              <p className="text-lg font-semibold">Email Address</p>
              <p className="text-gray-700">campers@info.com</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-[#020C29] text-2xl mr-4" />
            <div>
              <p className="text-lg font-semibold">Physical Address</p>
              <p className="text-gray-700">
                silicon valley,usa
              </p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-center text-[#020C29]">Follow Us</h3>
          <div className="flex justify-center space-x-4">
            <NavLink to="https://www.facebook.com" className="text-[#020C29] hover:text-lime-600 custom-transition">
              <FaFacebook size={30} />
            </NavLink>
            <NavLink to="https://www.twitter.com" className="text-[#020C29] hover:text-lime-600 custom-transition">
              <FaTwitter size={30} />
            </NavLink>
            <NavLink to="https://www.instagram.com"  className="text-[#020C29] hover:text-lime-600 custom-transition">
              <FaInstagram size={30} />
            </NavLink>
            <NavLink to="https://www.linkedin.com"className=" text-[#020C29] hover:hover:text-lime-600 custom-transition">
              <FaLinkedin size={30} />
            </NavLink>
          </div>
        </div>
      </div>
    );
};

export default Contact;