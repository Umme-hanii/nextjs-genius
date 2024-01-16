import TourCard from "./TourCard";

const ToursList = ({ toursList }) => {
  if (toursList.length === 0) {
    return (
      <h2 className="capitalize text-xl text-center">
        no tours found, add new tour
      </h2>
    );
  }

  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {toursList.map((tour) => {
        return <TourCard key={tour.id} tour={tour} />;
      })}
    </ul>
  );
};

export default ToursList;
