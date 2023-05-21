import React from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const singleDta = useLoaderData();
//   console.log(singleDta);
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const details = form.details.value;
    const data={price,quantity,details}
    console.log();

    fetch(`http://localhost:5174/carsAllDat/${singleDta._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body:JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left"></div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body bg-violet-300 rounded-xl">
              <h2 className="text-center">Update-Form</h2>
              <form onSubmit={handleUpdate}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="text"
                    placeholder="price"
                    name="price"
                    required
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Quantity</span>
                  </label>
                  <input
                    type="text"
                    placeholder="quantity"
                    name="quantity"
                    required
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Details</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Details"
                    name="details"
                    required
                    className="input input-bordered"
                  />
                </div>
                <div className="text-center mt-2">
                  <button>Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
