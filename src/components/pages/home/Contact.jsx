import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Swal from "sweetalert2";
const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const messsage = () => {
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Thanks for messaging us",
    });
  };
  return (
    <div>
      <section className="py-24 overflow-hidden">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x-2 divide-amber-700">
          <div
            className="py-6 md:py-0 md:px-6 text-gray-700"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h1 className="text-5xl text-amber-800 font-akaya font-bold">
              Get in touch
            </h1>
            <p className="pt-2 pb-4">
              Fill in the form to start a conversation
            </p>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>145 Motizil AVN, 9999 Dhaka</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>

                <span>+880 121 1551 111</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>+885 4545 445</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>tinyzoo@gmail.com</span>
              </p>
            </div>
          </div>
          <form
            noValidate=""
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <label className="block">
              <span className="mb-1">Full name</span>
              <input
                type="text"
                placeholder="Tiny Zoo"
                className="block pl-4 py-3 w-full shadow-sm rounded-md focus:ring focus:ring-opacity-75  bg-transparent border-gray-500 border-2"
              />
            </label>
            <label className="block">
              <span className="mb-1">Email address</span>
              <input
                type="email"
                placeholder="tinyzoo@gmail.com"
                className="block pl-4 py-3 w-full shadow-sm rounded-md focus:ring focus:ring-opacity-75  bg-transparent border-gray-500 border-2"
              />
            </label>
            <label className="block">
              <span className="mb-1">Message</span>
              <textarea
                rows="3"
                placeholder="Message"
                className="block pl-4 pt-3 w-full shadow-sm rounded-md focus:ring focus:ring-opacity-75  bg-transparent border-gray-500 border-2"
              ></textarea>
            </label>
            <button
              onClick={messsage}
              type="button"
              className="md:self-end px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-amber-700 text-white hover:ring-amber-700"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
