import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { authContext } from "../Providers/Authproviders";

const Addtoy = () => {
  const { user } = useContext(authContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="bg bg-gray-300">
      <div className="p-8">
        <h1 className="text-center text-orange-400 text-3xl">Add Your Car Toys</h1>
        <hr className="mt-2"/>
        <form onSubmit={""}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-3">
            <input
              placeholder="Photo URL"
              required
              {...register("photo")}
              className="h-[50px] px-5 rounded-xl bg-red-300 text-violet-700 text-2xl shadow-xl"
            />
            <input
              placeholder="Details"
              required
              {...register("details", { required: true })}
              className="h-[50px] px-5 rounded-xl bg-red-300 text-violet-700 text-2xl shadow-xl"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              placeholder="Seller Email"
              defaultValue={user?.email}
              {...register("email")}
              className="h-[50px] px-5 rounded-xl bg-red-300 text-violet-700 text-2xl shadow-xl"
            />
            <select {...register("Category")} className="h-[50px] px-5 rounded-xl bg-red-300 text-violet-700 text-2xl shadow-xl">
              <option value="scienceKits">Car Toys</option>
              <option value="engineeringKits">Ambulance Toys</option>
              <option value="mathToys">Truck Toys</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-3">
            <input
              placeholder="Seller Name"
              defaultValue={""}
              {...register("sellerName")}
              className="h-[50px] px-5 rounded-xl bg-red-300 text-violet-700 text-2xl shadow-xl"
            />
            <input
              placeholder="Toy Name"
              required
              {...register("toyName", { required: true })}
              className="h-[50px] px-5 rounded-xl bg-red-300 text-violet-700 text-2xl shadow-xl"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-3">
            <input
              placeholder="Rating"
              {...register("rating")}
              className="h-[50px] px-5 rounded-xl bg-red-300 text-violet-700 text-2xl shadow-xl"
            />
            <input
              placeholder="Price"
              {...register("price", { required: true })}
              className="h-[50px] px-5 rounded-xl bg-red-300 text-violet-700 text-2xl shadow-xl"
            />
            <input
              placeholder="Quantity"
              {...register("quantity", { required: true })}
              className="h-[50px] px-5 rounded-xl bg-red-300 text-violet-700 text-2xl shadow-xl"
            />
          </div>
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
          <div className="py-3 flex justify-center">
            <button className="btn btn-accent " type="submit">
              Submit
            </button>
          </div>
          {/* <input type="submit" /> */}
        </form>
      </div>
    </div>
  );
};

export default Addtoy;
