"use client";

import TourInfo from "./TourInfo";

const NewTour = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());
    console.log(destination);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2 className="mb-4">Select your dream destination</h2>
        <div className="join">
          <input
            type="text"
            className="input input-bordered join-item"
            placeholder="city"
            name="city"
            required
          />
          <input
            type="text"
            className="input input-bordered join-item"
            placeholder="country"
            name="country"
            required
          />
          <button className="btn btn-secondary join-item">Generate Tour</button>
        </div>
      </form>

      <TourInfo />
    </>
  );
};
export default NewTour;
