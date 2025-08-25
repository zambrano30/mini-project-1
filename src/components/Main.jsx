import { Card } from "./Card";

export function Main({ stays }) {
  return (
    <main className="mx-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-x-hidden w-full">
      {stays.length === 0 ? (
        <div className="col-span-full text-center text-gray-500 text-xl py-16">No hay resultados para tu búsqueda.</div>
      ) : (
        stays.map((stay) => (
          <Card key={stay.title} stay={stay} />
        ))
      )}
    </main>
  );
}