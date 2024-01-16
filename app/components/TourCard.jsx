import Link from "next/link";

const TourCard = ({ tour }) => {
  const { id, city, country } = tour;
  return (
    <Link
      href={`/tours/${id}`}
      key={id}
      className="card card-compact bg-base-100 shadow-xl"
    >
      <div className="card-body text-center items-center">
        <h2 className="card-title">
          {city}, {country}
        </h2>
      </div>
    </Link>
  );
};

export default TourCard;
