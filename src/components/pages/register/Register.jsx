import { useContext, useState } from "react";
import { Authcontext } from "../../../provider/Authprovider";
import { getAuth, updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";
import Pagetitle from "../../common/Pagetitle";
import Swal from "sweetalert2";

const Register = () => {
  const { registerUser, signOuthandle, user } = useContext(Authcontext);

  const [errorMessage, setErrorMessage] = useState("");
  const [successfull, setSuccessfull] = useState("");
  const [haveMessage, setHaveMessage] = useState("Already have an account?");
  // console.log(createUser);
  const auth = getAuth();

  const handleRegistration = (event) => {
    event.preventDefault();
    setErrorMessage("");
    setSuccessfull("");
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    if (!name) {
      Swal.fire({
        icon: "error",
        title: "Name Missing",
        text: "Please give a User Name",
      });
      return;
    }
    if (!email) {
      Swal.fire({
        icon: "error",
        title: "Email ID missing",
        text: "Please give a valid email id",
      });
      return;
    }
    if (!password) {
      Swal.fire({
        icon: "error",
        title: "Password Missing",
        text: "PLease set the passwords",
      });
      return;
    }
    if (password.length < 8) {
      Swal.fire({
        icon: "error",
        title: "Week Password",
        text: "Password should be minimum 8 character",
      });
      return;
    }
    if (!photo) {
      Swal.fire({
        icon: "error",
        title: "Photo Missing",
        text: "PLease give the photo URL",
      });
      return;
    }
    if ((email, password)) {
      registerUser(email, password)
        .then((result) => {
          const loggedUser = result.user;
          setSuccessfull("Account created successfully goto Login");
          Swal.fire({
            icon: "success",
            title: "Congratulations",
            text: "Account Created Successfully goto login",
          });
          setHaveMessage("Click here to");
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
          })
            .then(() => {})
            .catch((error) => {
              console.log(error);
            });
          console.log(loggedUser);
          form.reset();
          signOuthandle()
            .then(() => {})
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          let errrormessage = error.code.split("auth/")[1];
          setErrorMessage(errrormessage);
          console.log(error);
        });
    }
  };

  return (
    <div className="pt-20">
      <Pagetitle title="ToyZoo | Register"></Pagetitle>
      <div className="w-9/12 md:w-7/12 lg:w-6/12 mx-auto my-10">
        <div className="md:w-10/12 mx-auto w-full p-8 space-y-3 rounded-xl dark:bg-indigo-950 dark:text-gray-100">
          <h1 className="text-2xl font-bold text-center">Registration</h1>

          <form
            onSubmit={handleRegistration}
            noValidate=""
            action=""
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="name"
                id="name"
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="email"
                id="email"
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email
              </label>
            </div>
            <div className="space-y-1 text-sm">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="password"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="photo"
                  id="photo"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="photo"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Photo URL
                </label>
              </div>
              <div className="flex justify-end text-xs dark:text-gray-400"></div>
            </div>
            <button className="block w-full p-3 text-center rounded-md dark:text-white dark:bg-amber-700">
              Register
            </button>
          </form>
          <div className="errorMessage">
            <p className="text-red-500 text-center">{errorMessage}</p>
            <p className="text-green-700 text-center">{successfull}</p>
          </div>
          <div>
            {user ? (
              <p className="text-xs text-center sm:px-6 dark:text-gray-400">
                {haveMessage}{" "}
                <Link
                  to="/login"
                  className=" text-sm font-semibold underline dark:text-gray-100"
                >
                  login
                </Link>{" "}
              </p>
            ) : (
              <p className="text-xs text-center sm:px-6 dark:text-gray-400">
                {haveMessage}{" "}
                <Link
                  to="/login"
                  className=" text-sm font-semibold underline dark:text-gray-100"
                >
                  login
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
