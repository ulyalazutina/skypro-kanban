import { createContext, useState } from "react";

export const CardContext = createContext(null);

export function CardProvider({ children }) {
  const [cardData, setCardData] = useState([]);

  const updateCards = (newData) => {
    setCardData(newData);
  };

  return (
    <CardContext.Provider
      value={{
        cardData,
        updateCards
      }}
    >
      {children}
    </CardContext.Provider>
  );
}
