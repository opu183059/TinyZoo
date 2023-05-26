import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Hometoycard = ({ hometoy }) => {
  const { photoURL, toyname, Price, Rating, _id } = hometoy || {};
  //   console.log(photoURL, toyname, Price, Rating);
  return (
    <div>
      <div className="card card-compact w-auto bg-base-100 shadow-lg hover:shadow-xl">
        <figure>
          <img
            src={photoURL}
            alt={toyname}
            className="max-w-xs h-72 rounded-lg mt-5"
          />
        </figure>
        <div className="card-body ml-2">
          <div>
            <h2 className="card-title font-akaya text-2xl underline">
              {toyname}
            </h2>
          </div>
          <p className="flex card-title text-base">Price: {Price} tk</p>
          <p className="flex items-center card-title text-base">
            Ratings: {Rating}{" "}
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
          </p>

          <div className="card-actions justify-start md:justify-end">
            {/* <button className="btn btn-primary">View Details</button> */}
            <Link to={`alltoy/toyDetails/${_id}`}>
              <button className="btn bg-amber-600 hover:bg-amber-700 border-0 text-white">
                details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hometoycard;
