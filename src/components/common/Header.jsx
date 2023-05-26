import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Authcontext } from "../../provider/Authprovider";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const { user, signOuthandle } = useContext(Authcontext);
  const navigate = useNavigate();

  // console.log(user, signOuthandle);

  const handleSignOut = () => {
    signOuthandle()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className="w-full bg-slate-50 z-50 shadow-md fixed top-0">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-2 md:py-3 md:block">
            <div className="logo w-9 h-12">
              <Link to="/" className="flex items-center gap-2">
                <img
                  src="https://i.ibb.co/M7xrkvG/TinyZoo5.png"
                  alt="TinyZoo"
                />
                <h1 className="text-2xl -ml-2 font-akaya font font-extrabold ">
                  Tiny<span className="text-3xl text-amber-700">Zoo</span>
                </h1>
              </Link>
            </div>

            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center text-xl font-akaya justify-center space-y-5 md:flex md:space-x-4 md:space-y-0 font-bold">
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? " text-amber-800" : " "
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? " text-amber-800" : " "
                  }
                  to="/alltoy"
                >
                  All toy
                </NavLink>
              </li>
              <>
                {user ? (
                  <>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? " text-amber-800" : " "
                        }
                        to="/addatoy"
                      >
                        Add a toy
                      </NavLink>
                    </li>
                    <li className="">
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? " text-amber-800" : " "
                        }
                        to="/mytoy"
                      >
                        My toy
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? " text-amber-800" : " "
                      }
                      to="/register"
                    >
                      Register
                    </NavLink>
                  </li>
                )}
              </>

              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? " text-amber-800" : " "
                  }
                  to="/blog"
                >
                  Blog
                </NavLink>
              </li>
            </ul>

            <div className="mt-3 space-y-2 lg:hidden md:inline-block">
              {user ? (
                <>
                  <button className="flex items-center">
                    {user.photoURL ? (
                      <div className="avatar">
                        <div className="w-10 rounded-full">
                          <img src={user.photoURL} />
                        </div>
                      </div>
                    ) : (
                      <img
                        className="w-10 rounded-full mx-2"
                        src="https://i.ibb.co/JHVvZ07/am-a-19-year-old-multimedia-artist-student-from-manila-21.png"
                      />
                    )}
                  </button>
                  <button
                    className="px-4 py-2 text-white transition duration-200 rounded-md shadow-md bg-gradient-to-r from-amber-600 to-amber-800 hover:bg-gradient-to-l"
                    onClick={handleSignOut}
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <button className="px-4 py-2 text-white transition duration-200 rounded-md shadow-md bg-gradient-to-r from-amber-600 to-amber-800 hover:bg-gradient-to-l">
                  <Link to="/login">Log in</Link>
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block">
          {user ? (
            <div className="flex flex-col md:text-center md:flex-row items-center">
              <div
                className="tooltip tooltip-bottom"
                data-tip={user.displayName}
              >
                <button className="flex items-center">
                  {user.photoURL ? (
                    <div className="avatar">
                      <div className="w-10 rounded-full">
                        <img src={user.photoURL} />
                      </div>
                    </div>
                  ) : (
                    <img
                      className="w-10 rounded-full mx-2"
                      src="https://i.ibb.co/JHVvZ07/am-a-19-year-old-multimedia-artist-student-from-manila-21.png"
                    />
                  )}
                </button>
              </div>
              <button
                className="px-4 py-2 ml-4 text-white transition duration-200 rounded-md shadow-md bg-gradient-to-r from-amber-600 to-amber-800 hover:bg-gradient-to-l"
                onClick={handleSignOut}
              >
                Log Out
              </button>
            </div>
          ) : (
            <span>
              <button className="px-4 py-2 text-white transition duration-200 rounded-md shadow-md bg-gradient-to-r from-amber-600 to-amber-800 hover:bg-gradient-to-l">
                <Link to="/login">Log in</Link>
              </button>
            </span>
          )}
          {/* <Link
            to="/login"
            className="px-4 py-2 text-white transition duration-200 rounded-md shadow-md bg-gradient-to-r from-indigo-600 to-indigo-500 hover:bg-gradient-to-l"
          >
            Log in
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 text-white transition duration-200 rounded-md shadow-md bg-gradient-to-r from-indigo-600 to-indigo-500 hover:bg-gradient-to-l"
          >
            Sign up
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
