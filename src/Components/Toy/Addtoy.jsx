import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { authContext } from "../Providers/Authproviders";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import usePath from "../../myHook/hook";

const Addtoy = () => {
  usePath('AddToy')
  const { user } = useContext(authContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://dream-car-toys-server.vercel.app/carsAll", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
      
  };
  return (
    <div className="bg-gradient-to-r from-violet-300 to- ">
      <h2 className="text-center text-4xl mt-5 pt-5 pb-4">Add Yours Toy</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-3 p-5">
          <input
            placeholder="Photo URL"
            required
            {...register("photo")}
            className="h-[50px] px-5 rounded-xl bg-red-200 bg-gradient-to-r from-yellow-800 to- text-violet-700 text-2xl shadow-xl"
          />
          <input
            placeholder="Details"
            required
            {...register("details", { required: true })}
            className="h-[50px] px-5 rounded-xl bg-gradient-to-r from-yellow-800 bg-red-200 text-violet-700 text-2xl shadow-xl"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
          <input
            placeholder="Seller Email"
            defaultValue={user?.email}
            {...register("email")}
            className="h-[50px] px-5 rounded-xl bg-red-200 bg-gradient-to-r from-yellow-800 text-2xl shadow-xl"
          />
          <select
            {...register("Category")}
            className="h-[50px] px-5 rounded-xl  bg-red-200 bg-gradient-to-r from-yellow-800 text-2xl shadow-xl"
          >
            <option value="Sportcar">Sports-Car-Toy</option>
            <option value="Trucktoys">Trucks-Toys</option>
            <option value="Bustoys">Bus-Toys</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-3 p-5">
          <input
            placeholder="Seller Name"
            defaultValue={""}
            {...register("sellerName")}
            className="h-[50px] px-5 rounded-xl  bg-red-200 bg-gradient-to-r from-yellow-800 text-2xl shadow-xl"
          />
          <input
            placeholder="Toy Name"
            required
            {...register("toyName", { required: true })}
            className="h-[50px] px-5 rounded-xl  bg-red-200 bg-gradient-to-r from-yellow-800 text-2xl shadow-xl"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-3 p-5">
          <input
            placeholder="Rating"
            {...register("rating")}
            className="h-[50px] px-5 rounded-xl bg-red-200 bg-gradient-to-r from-yellow-800 text-2xl shadow-xl"
          />
          <input
            placeholder="Price"
            type="number"
            {...register("price", { required: true })}
            className="h-[50px] px-5 rounded-xl  bg-red-200 bg-gradient-to-r from-yellow-800 text-2xl shadow-xl"
          />
          <input
            placeholder="Quantity"
            {...register("quantity", { required: true })}
            className="h-[50px] px-5 rounded-xl  bg-red-200 bg-gradient-to-r from-yellow-800 text-2xl shadow-xl"
          />
          <ToastContainer></ToastContainer>
        </div>

        {/* include validation with required or other standard HTML validation rules */}

        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        <div className="py-3 flex justify-center">
          <button className="btn bg-gradient-to-r from-pink-500 mb-3" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addtoy;
