
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <AiOutlineCheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful!</h1>
        <p className="text-gray-600 mb-4">Thank you for your purchase. Your payment has been processed successfully.</p>
      <Link to="/">  <button className="bg-[#020C29] text-white px-4 py-2 rounded-md hover:bg-lime-400 transition duration-300">
          Continue Purchase
        </button></Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
