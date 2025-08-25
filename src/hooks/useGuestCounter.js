import { useState } from "react";

export function useGuestCounter(initialAdults = 0, initialChildren = 0) {
  const [adults, setAdults] = useState(initialAdults);
  const [children, setChildren] = useState(initialChildren);

  const incrementAdults = () => setAdults((a) => a + 1);
  const decrementAdults = () => setAdults((a) => Math.max(0, a - 1));
  const incrementChildren = () => setChildren((c) => c + 1);
  const decrementChildren = () => setChildren((c) => Math.max(0, c - 1));

  return {
    adults,
    children,
    incrementAdults,
    decrementAdults,
    incrementChildren,
    decrementChildren,
    setAdults,
    setChildren,
  };
}
