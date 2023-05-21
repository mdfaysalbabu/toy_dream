import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../Providers/Authproviders";
import Toyscart from "./Toyscart";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import usePath from "../../myHook/hook";

const Mytoys = () => {
  usePath("MyToys");
  const { user } = useContext(authContext);
  const [carsData, setCarsData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myCars/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setCarsData(data));
  }, [user]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/myCars/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Delete!",
            text: "Do you want to continue",
            icon: "error",
            confirmButtonText: "Delete",
          });
        }
        const remain = carsData.filter((cars) => cars._id !== id);
        setCarsData(remain);
      });
  };

  const handleUpdateInfo = (id) => {
    console.log(id);
  };

  const handleAccending = () => {
    const sort = [...carsData].sort((a, b) => a.price - b.price);
    setCarsData(sort);
  };
  const handleDccending = () => {
    const sort = [...carsData].sort((a, b) => b.price - a.price);
    setCarsData(sort);
  };

  return (
    <div className="bg-gradient-to-r from-violet-400 mt-5 mx-auto ">
      <div>
        <div className="flex justify-center items-center">
          <h1 className="text-3xl pt-3 text-red-500">Dream Cars Toy </h1>
          <hr />
        </div>
        <div className="flex items-center justify-center mt-2">
          <div className="gap-4 flex">
            <button onClick={handleAccending} className="btn btn-accent">
              Accending
            </button>
            <button onClick={handleDccending} className="btn btn-accent">
              Deccending
            </button>
          </div>
        </div>
        <div className="mx-12 py-12">
          <table className="table w-full">
            <div className="grid grid-cols-7 text-xl font-semibold p-5">
              <div>
                <h1>Photo</h1>
              </div>
              <div>
                <h1>Category</h1>
              </div>
              <div>
                <h1>Price</h1>
              </div>
              <div>
                <h1>Quantity</h1>
              </div>
              <div>
                <h1>Rating</h1>
              </div>
              <div>
                <h1>Update</h1>
              </div>
              <div>
                <h1>Delete</h1>
              </div>
            </div>
            <tbody>
              {carsData.map((cars) => (
                <Toyscart
                  cars={cars}
                  key={cars._id}
                  //   handleUpdateInfo={handleUpdateInfo}
                  handleDelete={handleDelete}
                  handleUpdateInfo={handleUpdateInfo}
                ></Toyscart>
              ))}
            </tbody>
            <ToastContainer></ToastContainer>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Mytoys;
