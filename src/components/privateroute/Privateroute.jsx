/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Authcontext } from "../../provider/Authprovider";
import Swal from "sweetalert2";

const Privateroute = ({ children }) => {
  const location = useLocation();
  // console.log(location);
  const { user, loading } = useContext(Authcontext);
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-10 h-10 border-b-8 border-r-4 rounded-full animate-spin dark:border-amber-700"></div>
        <p className="font-bold text-xl text-amber-700 ms-2">Loading....</p>
      </div>
    );
  }
  if (user) {
    return children;
  }
  if (!user) {
    Swal.fire({
      icon: "warning",
      title: "Oops...",
      text: "You have to login to access this",
    });
  }
  return <Navigate state={{ from: location }} to="/login"></Navigate>;
};

export default Privateroute;
