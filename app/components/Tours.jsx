"use client";

import { getAllTours } from "@/utils/actions";
import { useQuery } from "@tanstack/react-query";
import ToursList from "./ToursList";

const Tours = () => {
  const { data: allTours, isPending } = useQuery({
    queryKey: ["tours"],
    queryFn: () => getAllTours(),
  });

  return (
    <section className="max-w-3xl">
      <h2 className="text-xl capitalize text-center mb-4 font-bold text-primary">
        all tours
      </h2>
      {isPending ? (
        <span className="loading"></span>
      ) : (
        <ToursList toursList={allTours} />
      )}
    </section>
  );
};

export default Tours;
