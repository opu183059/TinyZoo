import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Pagetitle from "../../common/Pagetitle";

const Viewtoy = () => {
  const toys = useLoaderData();
  const {
    sellerName,
    toyname,
    sellerEmail,
    Rating,
    photoURL,
    description,
    Price,
    Available,
  } = toys || {};

  const added = () => {
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Added to cart",
    });
  };

  return (
    <div>
      <Pagetitle title="ToyZoo | ToyDetails"></Pagetitle>
      <div>
        {/* <!-- component --> */}
        <section className="text-gray-700 body-font overflow-hidden bg-white">
          <div className="container px-5 py-20 mx-auto">
            <div className="lg:w-4/5 mx-auto flex justify-between">
              <div className="w-auto p-3 flex items-center justify-center bg-white rounded-lg hover:shadow-xl ">
                <img
                  alt={toyname}
                  className="w-full max-w-sm lg:max-h-96 rounded-lg "
                  src={photoURL}
                />
              </div>
              <div className="lg:w-1/2 w-full p-3 mt-6 lg:mt-0 rounded-xl lg:hover:shadow-xl">
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {toyname}
                </h1>
                <p className="text-base title-font text-gray-500 tracking-widest mb-5">
                  {description}
                </p>
                <h2 className="text-base">
                  Seller:{" "}
                  <span className="font-semibold text-lg">{sellerName}</span>{" "}
                </h2>
                <h2 className="text-base">
                  Email:{" "}
                  <span className="text-blue-800 text-lg font-semibold">
                    {sellerEmail}
                  </span>
                </h2>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    <span className="text-gray-600 mr-3">
                      Ratings: {Rating}
                    </span>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  </span>
                </div>
                <p className="text-base">
                  Available:{" "}
                  <span className="font-semibold text-lg">{Available}</span>{" "}
                </p>
                <div>
                  <div className="flex mt-6 items-center justify-between pt-5 border-t-2 border-gray-200 mb-5">
                    <div className="flex items-center">
                      <span className="mr-3">Size</span>
                      <div className="relative">
                        <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-indigo-500 text-base pl-3 pr-10">
                          <option>SM</option>
                          <option>M</option>
                          <option>L</option>
                          <option>XL</option>
                        </select>
                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                          >
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div>
                      <p>delivery date</p>
                      <input type="date" defaultValue="2023-05-30" />
                    </div>
                  </div>
                  <div className="flex">
                    <span className="title-font font-medium text-2xl text-gray-900">
                      {Price} tk
                    </span>
                    <button
                      onClick={added}
                      className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Viewtoy;
