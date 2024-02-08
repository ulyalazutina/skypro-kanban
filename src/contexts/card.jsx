import { createContext, useState } from "react";
import { useNavigate } from "react-router";
import { appRoutes } from "../lib/appRoutes";

export const CardContext = createContext(null);

export function CardProvider({ children }) {
    let navigate = useNavigate();
    const [cardData, setCardData] = useState([]);

    const getCard = (task) => {
        setCardData(task);
    };

    const addCardContext = () => {
        navigate(appRoutes.HOME);
    };

    const deleteCardContext = (task) => {
        setCardData(task);
        navigate(appRoutes.HOME);
    }

    const updateCardContext = (task) => {
        setCardData(task);
        navigate(appRoutes.HOME);
    }

    return (
        <CardContext.Provider value={{ getCard, addCardContext, cardData, setCardData, deleteCardContext, updateCardContext }}>
            {children}
        </CardContext.Provider>
    );
}
