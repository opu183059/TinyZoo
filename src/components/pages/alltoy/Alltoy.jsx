import { useContext, useEffect, useState } from "react";
import Singletoyrow from "./Singletoyrow";
// import { useNavigation } from "react-router-dom";
import { Authcontext } from "../../../provider/Authprovider";
import Pagetitle from "../../common/Pagetitle";

const Alltoy = () => {
  const [toys, setToys] = useState();
  const [search, setSearch] = useState();
  const [noDataMessage, setNoDataMessage] = useState("");
  const { loading } = useContext(Authcontext);

  // const navigation = useNavigation();
  // console.log(navigation.state);

  useEffect(() => {
    fetch("https://tinyzoo-server.vercel.app/allToy")
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
        // console.log(result);
        if (result.length == 0) {
          setNoDataMessage("No data found, Please try again");
        } else {
          setNoDataMessage(" ");
        }
      });
  }, []);
  const handleSearch = () => {
    fetch(`https://tinyzoo-server.vercel.app/toysearch/${search}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        // console.log(data);
        if (data.length == 0) {
          setNoDataMessage("No data found, Please try again");
        } else {
          setNoDataMessage(" ");
        }
      });
  };

  return (
    <div className="w-10/12 mx-auto pt-20 mb-10">
      <Pagetitle title="ToyZoo | AllToy"></Pagetitle>
      <div className="overflow-x-auto">
        <div className="search-box p-2 mb-3 flex items-center justify-center">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="h-9 ps-3 border-2 border-indigo-950 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"
          />
          <button onClick={handleSearch} className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 hover:text-amber-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
        <table className="table table-compact w-full shadow-lg">
          <thead>
            <tr>
              <th></th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Available</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {toys?.map((toy) => (
              <Singletoyrow toy={toy} key={toy._id}></Singletoyrow>
            ))}
          </tbody>
        </table>
        {/* loading animation  */}
        {loading ? (
          <div className="flex justify-center items-center h-60">
            <div className="w-10 h-10 border-b-8 border-r-4 rounded-full animate-spin dark:border-amber-700"></div>
            <p className="font-bold text-xl text-amber-700 ms-2">Loading....</p>
          </div>
        ) : (
          ""
        )}
        {/* loading animation  */}
        <h1 className="text-red-700 text-center font-semibold text-lg mt-5">
          {noDataMessage}
        </h1>
      </div>
    </div>
  );
};

export default Alltoy;
