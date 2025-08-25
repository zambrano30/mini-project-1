export function Title({ location, staysCount }) {
  return (
    <section className="flex justify-between items-center w-full px-4 py-8 mx-2">
      <h2 className="text-xl font-bold">
        {location ? `Stays in ${location}` : "All stays"}
      </h2>
      <span className="text-lg font-medium text-gray-600 ">{staysCount} stays</span>
    </section>
  );
}
