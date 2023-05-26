import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="hero h-screen bg-[url('https://i.ibb.co/9wzjqyP/barrett-ward-1q-Qx3-LHa-YGg-unsplash.jpg')] bg-auto md:bg-cover">
        <div className="hero-content flex-col lg:flex-row-reverse w-10/12 mx-auto">
          <div className="lg:w-1/2 w-0"></div>
          <div
            className="text-center md:text-left lg:w-1/2 w-full"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="flex items-center">
              <div className="hidden md:block items-center justify-center w-16 h-16 p-1 shadow-md shadow-amber-900 rounded-full dark:bg-white">
                <img src="https://i.ibb.co/hghyqpM/TinyZoo3.png" alt="" />
              </div>
              <h1 className="text-7xl ms-3 text-amber-700 font-akaya drop-shadow-[0_35px_35px_rgba(255, 255, 255)]">
                TinyZoo
              </h1>
            </div>
            <p className="py-6 text-amber-900 font-medium">
              Discover a world of adorable toy animals at our online store. From
              cuddly cows to playful cats and majestic lions, we offer a wide
              selection of high-quality companions. Let your imagination roam
              with lifelike designs and detailed craftsmanship. Find your
              perfect furry friend and experience the joy of imaginative play.
              Start your journey with us today!
            </p>
          </div>
        </div>
      </div>

      {/* special  */}
      {/* <div className="hero min-h-screen bg-[url('https://i.ibb.co/PhHd1Rt/banerfinal.jpg')] bg-cover bg-fixed">
        <div className="hero-content text-center">
          <div className="max-w-screen-lg border-double border-2 p-9 backdrop-blur-0">
            <h1 className="text-4xl md:text-5xl text-amber-500 font-akaya drop-shadow-[0_35px_35px_rgba(255, 255, 255)]">
              Housewife coocking competition
            </h1>
            <p className="py-6 text-slate-100">
              Join us for our upcoming cooking competition! It's open to anyone
              who loves to cook, whether you're a professional chef or a home
              cook. There will be exciting challenges and cash prizes for the
              winners. The event is on
              <span className="ms-1 text-amber-500">
                5th June at 11am at HERO Convention Hall, 1234 Elm Street
                Anytown, USA 12345
              </span>
              . Register by 25th MAY and provide your name and contact
              information, along with a brief description of the dish you plan
              to prepare. We'll provide all the cooking equipment and
              ingredients. Can't wait to see you there!
              <br />
              Best regards,
              <span className=" ms-1 font-akaya text-amber-500">
                HERO's recepie
              </span>
            </p>
            <label
              htmlFor="my-modal"
              className="btn px-10 ms-2 py-2 font-medium text-white transition duration-200 rounded-md shadow-md bg-gradient-to-r from-amber-600 to-amber-500 hover:bg-gradient-to-l"
            >
              Register
            </label>
            <div>
              <input type="checkbox" id="my-modal" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Registration</h3>
                  <p className="py-4">
                    Please Contact with this <br /> email id :
                    herosrecipe@gmail.com <br />
                    mobile: +445 2252 12
                  </p>
                  <div className="modal-action">
                    <label htmlFor="my-modal" className="btn">
                      OK
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* special end  */}
    </div>
  );
};

export default Banner;
