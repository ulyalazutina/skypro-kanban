import { useState } from "react";
import Calendar from "../Calendar/Calendar";
import { useUser } from "../../hooks/useUser";
import { useCard } from "../../hooks/useCard";
import { addTask, getTasks } from "../../api";
import { appRoutes } from "../../lib/appRoutes";
import {
  CategoriesThemeGreen,
  CategoriesThemeLabelGreen,
  CategoriesThemeLabelOrange,
  CategoriesThemeLabelPurple,
  CategoriesThemeOrange,
  CategoriesThemePurple,
  CategoriesThemes,
  FormNewArea,
  FormNewBlock,
  FormNewCreate,
  FormNewInput,
  PopNewCardBlock,
  PopNewCardCategories,
  PopNewCardCategoriesText,
  PopNewCardClose,
  PopNewCardContainer,
  PopNewCardContent,
  PopNewCardForm,
  PopNewCardTitle,
  PopNewCardWrap,
  PopNewCardWrapper,
  Subtitle,
} from "./PopNewCard.styled";

function PopNewCard() {
  const { userData } = useUser();
  const { cardData, getCard, addCardContext } = useCard();
  const [selected, setSelected] = useState();

  const [newTask, setNewTask] = useState({
    title: "",
    topic: "",
    status: "Без статуса",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setNewTask({
      ...newTask,
      [name]: value,
    });
    console.log(setNewTask);
  };

  const addCard = async () => {
    let newCard = {
      ...newTask,
      date: selected,
      token: userData.token,
    };

    console.log([...cardData, newCard]);
    console.log(newTask);
    addTask(newCard).then((data) => {
      addCardContext();
      console.log(data);
      getTasks({ token: userData.token }).then((response) => {
        getCard(response.tasks);
      });
    });
  };

  return (
    <PopNewCardWrap>
      <PopNewCardContainer>
        <PopNewCardBlock>
          <PopNewCardContent>
            <PopNewCardTitle>Создание задачи</PopNewCardTitle>
            <PopNewCardClose to={appRoutes.HOME}>✖</PopNewCardClose>
            <PopNewCardWrapper>
              <PopNewCardForm id="formNewCard" action="#">
                <FormNewBlock>
                  <Subtitle htmlFor="formTitle">Название задачи</Subtitle>
                  <FormNewInput
                    value={newTask.title}
                    onChange={handleInputChange}
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                  />
                </FormNewBlock>
                <FormNewBlock>
                  <Subtitle htmlFor="textArea">Описание задачи</Subtitle>
                  <FormNewArea
                    value={newTask.description}
                    onChange={handleInputChange}
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  />
                </FormNewBlock>
              </PopNewCardForm>
              <Calendar selected={selected} setSelected={setSelected} />
            </PopNewCardWrapper>
            <PopNewCardCategories>
              <PopNewCardCategoriesText>Категория</PopNewCardCategoriesText>
              <CategoriesThemes>
                {/* 1) Не работает чекбокс при нажатии на лэибл */}
                <CategoriesThemeOrange>
                  <input
                    type="radio"
                    id="radio1"
                    name="topic"
                    onChange={handleInputChange}
                    value="Web Design"
                  />
                  <CategoriesThemeLabelOrange htmlFor="radio1">
                    Web Design
                  </CategoriesThemeLabelOrange>
                </CategoriesThemeOrange>
                <CategoriesThemeGreen>
                  <input
                    type="radio"
                    id="radio2"
                    name="topic"
                    onChange={handleInputChange}
                    value="Research"
                  />
                  <CategoriesThemeLabelGreen htmlFor="radio2">
                    Research
                  </CategoriesThemeLabelGreen>
                </CategoriesThemeGreen>
                <CategoriesThemePurple>
                  <input
                    type="radio"
                    id="radio3"
                    name="topic"
                    onChange={handleInputChange}
                    value="Copywriting"
                  />
                  <CategoriesThemeLabelPurple htmlFor="radio3">
                    Copywriting
                  </CategoriesThemeLabelPurple>
                </CategoriesThemePurple>
              </CategoriesThemes>
            </PopNewCardCategories>
            <FormNewCreate id="btnCreate" onClick={addCard}>
              Создать задачу
            </FormNewCreate>
          </PopNewCardContent>
        </PopNewCardBlock>
      </PopNewCardContainer>
    </PopNewCardWrap>
  );
}

export default PopNewCard;
