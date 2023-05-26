import { useEffect, useState } from "react";
import Hometoycard from "./Hometoycard";

const Availabletoy = () => {
  const [active, setActive] = useState("lion");
  const [homeToys, setHomeToys] = useState();
  const handleTabClick = (name) => {
    setActive(name);
  };

  useEffect(() => {
    fetch(`https://tinyzoo-server.vercel.app/allToy/${active}`)
      .then((res) => res.json())
      .then((result) => {
        // let jobSliced = result.slice(0, 6);
        setHomeToys(result);
      });
  }, [active]);

  return (
    <div className="my-10 text-center">
      <h1 className="flex items-center justify-center text-center mb-4 text-lg font-akaya font-bold">
        Toy
        <span className="text-3xl ml-2 text-amber-800">Category</span>
      </h1>

      <div>
        <div
          onClick={() => handleTabClick("cats")}
          className={`tab tab-bordered text-lg ${
            active == "cats" ? "tab-active font-semibold" : " "
          }`}
        >
          Cats
        </div>
        <div
          onClick={() => handleTabClick("lion")}
          className={`tab tab-bordered text-lg ${
            active == "lion" ? "tab-active font-semibold" : " "
          }`}
        >
          Lion
        </div>
        <div
          onClick={() => handleTabClick("dianoasur")}
          className={`tab tab-bordered text-lg ${
            active == "dianoasur" ? "tab-active font-semibold" : " "
          }`}
        >
          Dianoasur
        </div>
      </div>
      {/* category end  */}
      <div className="category w-10/12 mx-auto mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {homeToys?.map((hometoy) => (
            <Hometoycard hometoy={hometoy} key={hometoy._id}></Hometoycard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Availabletoy;
