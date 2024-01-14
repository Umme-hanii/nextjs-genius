const TourInfo = ({ city, country, title, description, stops }) => {
  return (
    <section className="max-w-2xl border-2 p-2">
      <h1 className="text-4xl font-semibold">{title}</h1>
      <p className="leading-loose mb-6">
        {city}, {country}
      </p>
      <p>{description}</p>
      <ul>
        {stops.map((stop) => {
          return (
            <li key={stop.city} className="bg-base-100 p-4 m-4 rounded-xl">
              <p>{stop}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TourInfo;
