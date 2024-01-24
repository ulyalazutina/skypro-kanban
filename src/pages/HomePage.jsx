import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
// import PopBrowse from "../components/PopBrowse/PopBrowse";
// import PopExit from "../components/PopExit/PopExit";
// import PopNewCard from "../components/PopNewCard/PopNewCard";
import Wrapper from "../components/Wrapper/Wrapper";
import { Outlet } from "react-router";
import { cardList } from "../data";

export default function HomePage() {
    const [cards, setCards] = useState(cardList);
    const [isLoaded, setIsLoaded] = useState(true);
  
    useEffect(() => {
      setTimeout(() => {
        setIsLoaded(false);
      }, 1000);
    }, []);
  
    function addCard() {
      setCards([
        ...cards,
        {
          id: cards.length + 1,
          theme: "Copywriting",
          title: "Новая задача",
          date: "30.10.23",
          status: "Без статуса",
        },
      ]);
    }
  return (
    <>
      <Wrapper>
        {/* <PopExit />
        <PopNewCard /> */}
        <Outlet />
        <Outlet />
        <Header addCard={addCard} />
        <Main isLoaded={isLoaded} cardList={cards} />
      </Wrapper>
    </>
  );
}
