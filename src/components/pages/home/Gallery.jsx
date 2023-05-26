import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Gallery = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="min-h-screen w-10/12 mx-auto my-10 overflow-hidden">
      <h1 className="flex items-center justify-center text-center mb-4 text-lg font-akaya font-bold">
        Joyful Toy{" "}
        <span className="text-3xl ml-2 text-amber-800">Showcase</span>
      </h1>
      <div className="grid gap-4 over mb-6">
        <div className="grid lg:grid-cols-2 gap-4">
          <div data-aos="fade-right" data-aos-duration="1000">
            <img
              className="h-auto w-full rounded-lg transition hover:shadow-lg"
              src="https://i.ibb.co/YkWyzJs/g1.jpg"
              alt=""
            />
          </div>
          <div data-aos="fade-left" data-aos-duration="1000">
            <img
              className="h-auto w-full rounded-lg transition hover:shadow-lg"
              src="https://i.ibb.co/rFcYQkq/g1-2.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          <div data-aos="zoom-in-right" data-aos-duration="1000">
            <img
              className="h-auto max-w-full rounded-lg transition hover:shadow-lg"
              src="https://i.ibb.co/crpwV9m/g4-1.jpg"
              alt=""
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000">
            <img
              className="h-auto max-w-full rounded-lg transition hover:shadow-lg"
              src="https://i.ibb.co/Jv8bpQ3/newg2.jpg"
              alt=""
            />
          </div>
          <div data-aos="flip-up" data-aos-duration="1000">
            <img
              className="h-auto max-w-full rounded-lg transition hover:shadow-lg"
              src="https://i.ibb.co/m9kHBxK/g7.jpg"
              alt=""
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000">
            <img
              className="h-auto max-w-full rounded-lg transition hover:shadow-lg"
              src="https://i.ibb.co/M6zj6Dt/newg1.jpg"
              alt=""
            />
          </div>
          <div data-aos="zoom-in-left" data-aos-duration="1000">
            <img
              className="h-auto max-w-full rounded-lg transition hover:shadow-lg hidden md:block"
              src="https://i.ibb.co/XXT034S/g2-1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
