import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
// import PopBrowse from "../components/PopBrowse/PopBrowse";
// import PopExit from "../components/PopExit/PopExit";
// import PopNewCard from "../components/PopNewCard/PopNewCard";
import Wrapper from "../components/Wrapper/Wrapper";
import { Outlet } from "react-router";
// import { cardList } from "../data";
import { getTasks } from "../api";

export default function HomePage({ userData }) {
  const [cards, setCards] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const [tasksError, setTasksError] = useState(null);

  useEffect(() => {
    getTasks({ token: userData.token })
      .then((data) => {
        // console.log(data);
        setCards(data.tasks);
        // console.log(data.tasks);
      })
      .then(() => {
        setIsLoaded(false);
      })
      .catch((error) => {
        if (error.message === "Failed to fetch") {
          setTasksError("Ошибка сервера.");
        }
      });
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
      {tasksError ? (
        <p className="error">{tasksError}</p>
      ) : (
        <Wrapper>
          <Outlet />
          <Outlet />
          <Header addCard={addCard} />
          <Main isLoaded={isLoaded} cardList={cards} />
        </Wrapper>
      )}
    </>
  );
}
