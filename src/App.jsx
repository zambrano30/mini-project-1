
import { Header } from "./components/Header";
import { Title } from "./components/Title";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { useStays } from "./hooks/useStays";

export default function App() {
  const {
    stays,
    setLocation,
    setGuests,
    location,
    guests,
    locations
  } = useStays();

  // Maneja el filtro desde SearchBar
  const handleSearch = ({ location, guests }) => {
    setLocation(location);
    setGuests(guests);
  };

  return (
    <>
      <Header onSearch={handleSearch} locations={locations} />
      <Title location={location} staysCount={stays.length} />
      <Main stays={stays} />
      <Footer />
    </>
  );
}


