import { useContext } from "react";
import { CardContext } from "../contexts/card";

export const useCard = () => {
    return useContext(CardContext);
}