import React from "react";

const AddJewelry = () => {
  const handleAddJewelry = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const price = form.price.value;
    const code = form.code.value;
    const image = form.image.value;
    const jewelry = { name, category, price, code, image };
    try {
      const res = await fetch("https://moon-jewelry-server.vercel.app/jewelries", {
        method: "POST",
        body: JSON.stringify(jewelry),
        headers: {"content-type": "application/json"},
      });
      const data = await res.json();
      if(data.insertedId) {
        form.reset();
        alert("Jewelry Added Successfully!")
      }
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className="container mx-auto p-5">
      <h2 className='text-center text-5xl font-["olivera"] mb-5'>
        Add New Jewelry
      </h2>
      <div className="card flex-shrink-0 w-full max-w-sm mx-auto border shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleAddJewelry}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Jewelry Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Jewelry Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              placeholder="Enter Jewelry Category"
              name="category"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              placeholder="Enter Jewelry Price"
              name="price"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Jewelry Code</span>
            </label>
            <input
              type="text"
              placeholder="Enter Jewelry Code"
              className="input input-bordered"
              name="code"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Jewelry Image</span>
            </label>
            <input
              type="text"
              placeholder="Enter Jewelry Image"
              className="input input-bordered"
              name="image"
              required
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">
              Add Jewelry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJewelry;
