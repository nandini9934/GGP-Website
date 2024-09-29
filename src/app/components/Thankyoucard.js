import Footer from "../_sections/footer";
import Navbar from "../_sections/navbar";

const ThankYouCard = () => {
    return (
      <>
      <Navbar/>
      <div className="flex items-center justify-center shadow-2xl rounded-2xl min-h-96 mx-4">
        <div className="bg-white p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
          <p>Your form has been successfully submitted.</p>
          <button
              className="bg-orange-500 hover:bg-[#fdeacc] text-white hover:text-orange-500 border-2 border-orange-500 font-bold py-2 mt-3 px-4 rounded-xl"
              onClick={() => window.location.href = 'http://Goodgutproject.in'}
          >
            Go to Homepage
          </button>
        </div>
      </div>
      <Footer/>
      </>
    );
  };
  
  export default ThankYouCard;
  