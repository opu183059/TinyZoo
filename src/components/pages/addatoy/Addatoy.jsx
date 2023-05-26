import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import CreatableSelect from "react-select/creatable";
import Swal from "sweetalert2";
import { Authcontext } from "../../../provider/Authprovider";
import Pagetitle from "../../common/Pagetitle";

const Addatoy = () => {
  const { user } = useContext(Authcontext);
  const [selectedOption, setSelectedOption] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.subCategory = selectedOption;
    fetch("https://tinyzoo-server.vercel.app/addToy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        if (result.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Toy added",
            text: "PLease fill the form again to add more toys",
          });
        }
      });
    // console.log(data);
  };

  const options = [
    { value: "teddy bear", label: "teddy bear" },
    { value: "horse", label: "horse" },
    { value: "dianoasur", label: "dianoasur" },
    { value: "dogs", label: "dogs" },
    { value: "lion", label: "lion" },
    { value: "cats", label: "cats" },
    { value: "unicorn", label: "unicorn" },
    { value: "cow", label: "cow" },
  ];

  return (
    <div className="pt-20">
      <Pagetitle title="ToyZoo | AddToy"></Pagetitle>
      <section className="p-6 dark:text-gray-50">
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
            {errors.exampleRequired && <span>This field is required</span>}
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium text-lg underline">Toy information</p>
              <p className="text-sm">
                Please add the information about your toy. Try to give details
                description to make your toy attractive.
              </p>
              <p className="text-sm">
                Note: You cannot change <br /> your name and email.
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Toy name
                </label>
                <input
                  required
                  {...register("toyname")}
                  id="toyname"
                  type="text"
                  placeholder="Toy Name"
                  className="h-9 ps-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="subCatagory" className="text-sm">
                  Sub-Catagory
                </label>
                <CreatableSelect
                  className="h-9 w-full dark:border-gray-700 dark:text-gray-900"
                  defaultValue={selectedOption}
                  required
                  onChange={setSelectedOption}
                  options={options}
                  isMulti
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="sellerName" className="text-sm">
                  Seller Name
                </label>
                <input
                  readOnly
                  defaultValue={user?.displayName}
                  {...register("sellerName")}
                  id="sellerName"
                  type="text"
                  placeholder="Seller Name"
                  className="w-full h-9 ps-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="sellerEmail" className="text-sm">
                  Seller Email
                </label>
                <input
                  readOnly
                  defaultValue={user?.email}
                  {...register("sellerEmail")}
                  id="sellerEmail"
                  type="email"
                  placeholder="Seller Email "
                  className="w-full h-9 ps-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full -mt-3 text-sm">
                <p>
                  <span className="text-yellow-400">Note:</span> Seller name and
                  email will be as your seller profile
                </p>
              </div>
              <div className="col-span-full">
                <label htmlFor="photoURL" className="text-sm">
                  Photo URL
                </label>
                <input
                  required
                  {...register("photoURL")}
                  id="photoURL"
                  type="text"
                  placeholder="Give Photo URL"
                  className="h-9 ps-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>

              <div className="col-span-full sm:col-span-2">
                <label htmlFor="Price" className="text-sm">
                  Price
                </label>
                <input
                  required
                  {...register("Price")}
                  id="Price"
                  type="number"
                  placeholder="Price"
                  className="h-9 ps-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="Rating" className="text-sm">
                  Rating
                </label>
                <input
                  required
                  {...register("Rating")}
                  id="Rating"
                  type="text"
                  placeholder="Ratings"
                  className="h-9 ps-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="Available" className="text-sm">
                  Available
                </label>
                <input
                  required
                  {...register("Available")}
                  id="Available"
                  type="number"
                  placeholder="Total Available"
                  className="h-9 ps-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="description" className="text-sm">
                  Description
                </label>
                {/* <textarea className="textarea" placeholder="Details"></textarea> */}
                <textarea
                  required
                  {...register("description")}
                  id="description"
                  type="text"
                  placeholder="Description"
                  className="textarea w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full w-full text-right mt-3">
                <input
                  type="submit"
                  className="btn bg-amber-600 border-0 text-white"
                />
              </div>
            </div>
          </fieldset>
          {/* <div className="w-full text-center">
            <input type="submit" className="btn btn-primary" />
          </div> */}
        </form>
      </section>
    </div>
  );
};

export default Addatoy;
