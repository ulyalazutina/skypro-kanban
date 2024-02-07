import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
// import PopBrowse from "../components/PopBrowse/PopBrowse";
// import PopExit from "../components/PopExit/PopExit";
// import PopNewCard from "../components/PopNewCard/PopNewCard";
import Wrapper from "../components/Wrapper/Wrapper";
import { Outlet } from "react-router";
import { getTasks } from "../api";
import { useUser } from "../hooks/useUser";

export default function HomePage() {
  const { userData } = useUser();
  const [cards, setCards] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const [tasksError, setTasksError] = useState(null);

  useEffect(() => {
    getTasks({ token: userData.token })
      .then((data) => {
        setCards(data.tasks);
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

  // function addCard() {
  //   setCards([
  //     ...cards,
  //     {
  //       id: cards.length + 1,
  //       theme: "Copywriting",
  //       title: "Новая задача",
  //       date: "30.10.23",
  //       status: "Без статуса",
  //     },
  //   ]);
  // }
  return (
    <>
      {tasksError ? (
        <p className="error">{tasksError}</p>
      ) : (
        <Wrapper>
          <Outlet />
          <Outlet />
          <Outlet />
          <Header />
          <Main isLoaded={isLoaded} cardList={cards} />
        </Wrapper>
      )}
    </>
  );
}
