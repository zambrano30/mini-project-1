import { useState, useEffect } from "react";
import axios from "axios";

export function useStays() {
  const [stays, setStays] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState(0);

  useEffect(() => {
    axios.get("/stays.json").then((res) => {
      setStays(res.data);
      setFiltered(res.data);
    });
  }, []);

  useEffect(() => {
    let result = stays;
    if (location) {
      result = result.filter((stay) => {
        const cityCountry = `${stay.city}, ${stay.country}`.toLowerCase();
        return (
          stay.city.toLowerCase() === location.toLowerCase() ||
          stay.country.toLowerCase() === location.toLowerCase() ||
          cityCountry === location.toLowerCase()
        );
      });
    }
    if (guests > 0) {
      result = result.filter(
        (stay) => stay.maxGuests >= guests
      );
    }
    setFiltered(result);
  }, [location, guests, stays]);

  // Para autocompletar locaciones únicas
  const locations = Array.from(new Set(stays.map(stay => `${stay.city}, ${stay.country}`)));

  return { stays: filtered, setLocation, setGuests, location, guests, locations };
}
