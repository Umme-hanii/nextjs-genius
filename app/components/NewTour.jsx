"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import TourInfo from "./TourInfo";
import {
  createNewTour,
  generateTourResponse,
  getExistingTour,
} from "@/utils/actions";
import toast from "react-hot-toast";

const NewTour = () => {
  const queryClient = useQueryClient();

  const {
    mutate,
    isPending,
    data: tour,
  } = useMutation({
    mutationFn: async (destination) => {
      const existingTour = await getExistingTour(destination);
      if (existingTour) return existingTour;

      const newTour = await generateTourResponse(destination);
      if (newTour) {
        await createNewTour(newTour);
        queryClient.invalidateQueries({
          queryKey: ["tours"],
        });
        return newTour;
      } else {
        toast.error("Please provide valid input");
        return null;
      }
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());
    mutate(destination);
  };

  if (isPending) {
    return <span className="loading loading-lg"></span>;
  }

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
      <div className="mt-16">
        {tour ? <TourInfo key={tour.city} {...tour} /> : null}
      </div>
    </>
  );
};
export default NewTour;
