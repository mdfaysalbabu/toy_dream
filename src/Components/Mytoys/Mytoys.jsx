import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../Providers/Authproviders";
import Toyscart from "./Toyscart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Mytoys = () => {
  const { user } = useContext(authContext);
  const [carsData, setCarsData] = useState([]);
  const [search, setSearch]=useState('')

  useEffect(() => {
    fetch(`http://localhost:5000/myCars/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setCarsData(data));
  }, [user]);
 //Star Search
    const handleSearch=()=>{
        fetch(`http://localhost:5000/myCarsSearch/${search}`)
        .then(res=> res.json())
        .then(data => {
            setCarsData(data);
        })
    }


  //End Search
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/myCars/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast("delete successfully");
        }
        const remain = carsData.filter((cars) => cars._id !== id);
        setCarsData(remain);
      });
  };

  const handleUpdateInfo = (id) => {
    console.log(id);
    <label htmlFor="my-modal-5" className="btn">
      open modal
    </label>;
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
        <div className="flex">
          <input onChange={(event) => setSearch(event.target.value)}
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <button onClick={handleSearch} className="btn btn-primary">Search</button>
        </div>
        <button onClick={handleAccending} className="btn btn-accent">
          Accending
        </button>
        <button onClick={handleDccending} className="btn btn-accent">
          Deccending
        </button>
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
