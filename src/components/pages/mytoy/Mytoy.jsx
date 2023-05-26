import { useContext, useEffect, useState } from "react";
import Mytoytablerow from "./Mytoytablerow";
import { Authcontext } from "../../../provider/Authprovider";
import Pagetitle from "../../common/Pagetitle";

const Mytoy = () => {
  const { user, loading } = useContext(Authcontext);
  const [myToys, setmyToys] = useState();
  const [noDataMessage, setNoDataMessage] = useState("");
  // const [sorted, setsorted] = useState();
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    fetch(`https://tinyzoo-server.vercel.app/mytoy/${user?.email}`)
      .then((res) => res.json())
      .then((result) => {
        setmyToys(result);
        if (result.length == 0) {
          setNoDataMessage("No data found, Please try again");
        } else {
          setNoDataMessage(" ");
        }
      });
  }, []);

  if (toggle) {
    let newdata = myToys;
    newdata?.sort((a, b) => parseInt(b.Price) - parseInt(a.Price));
  } else {
    let newdata = myToys;
    newdata?.sort((a, b) => parseInt(a.Price) - parseInt(b.Price));
  }

  return (
    <div className="w-10/12 mx-auto pt-24 mb-10">
      <Pagetitle title="ToyZoo | MyToy"></Pagetitle>
      <div className="overflow-x-auto">
        <div className="price mb-2 text-base flex items-center justify-end">
          <p className="mr-2 font-bold md:text-lg">Price:</p>
          <select
            id="dropdown"
            onChange={() => setToggle(!toggle)}
            className="border rounded p-0 md:p-1"
          >
            <option value="High to Low" className="text-sm">
              High to Low
            </option>
            <option value="Low to High" className="text-sm">
              Low to High
            </option>
          </select>
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
            {myToys?.map((mytoy) => (
              <Mytoytablerow
                mytoy={mytoy}
                key={mytoy._id}
                myToys={myToys}
                setmyToys={setmyToys}
              ></Mytoytablerow>
            ))}
          </tbody>
        </table>
        {/* loading animation  */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
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

export default Mytoy;
