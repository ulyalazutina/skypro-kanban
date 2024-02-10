import { useNavigate, useParams } from "react-router";
import { appRoutes } from "../../lib/appRoutes";
import { deleteTask, updateTask } from "../../api";
import { useUser } from "../../hooks/useUser";
import { useCard } from "../../hooks/useCard";
import Calendar from "../Calendar/Calendar";
import {
  BtnBg,
  BtnBgLink,
  BtnGroup,
  BtnGroupButton,
  BtnGroupText,
  CategoriesTheme,
  CategoriesThemeText,
  FormBrowseArea,
  FormBrowseBlock,
  PopBrowseBlock,
  PopBrowseBtnWrap,
  PopBrowseContainer,
  PopBrowseContent,
  PopBrowseForm,
  PopBrowseTittle,
  PopBrowseTopBlock,
  PopBrowseWrap,
  PopBrowseWrapper,
  Status,
  StatusTheme,
  StatusThemeInput,
  StatusThemeLabel,
  StatusThemes,
  StatusTitle,
  Subtitle,
  ThemeDownCategories,
} from "./PopBrowse.styled";
import { useState } from "react";

function PopBrowse() {
  let { cardId } = useParams();
  const { userData } = useUser();
  const { updateCards, cardData } = useCard();
  let navigate = useNavigate();
  console.log(cardData);

  const cards = cardData.filter((card) => card._id === cardId);

  const [selected, setSelected] = useState(cards[0].date);
  const [changeCard, setChangeCard] = useState({
    status: cards[0].status,
    date: cards[0].date,
    title: cards[0].title,
    topic: cards[0].topic,
    description: cards[0].description,
  });
  console.log(changeCard);

  const deleteCard = () => {
    deleteTask({ token: userData.token, id: cardId }).then((responseData) => {
      updateCards(responseData.tasks);
    })
    .then(()=>{
      navigate(appRoutes.HOME);
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setChangeCard({
      ...changeCard,
      [name]: value,
    });
    console.log(changeCard);
  };

  const updateCard = () => {
    console.log(changeCard);
    updateTask({
      token: userData.token,
      id: cardId,
      title: changeCard.title,
      topic: changeCard.topic,
      status: changeCard.status,
      description: changeCard.description,
      date: selected,
    }).then((response) => {
      console.log(response.tasks);
      updateCards(response.tasks);
    })
    .then(()=>{
      navigate(appRoutes.HOME);
    });
  };

  let color;
  switch (cards.topic) {
    case "Web Design":
      color = "_orange";
      break;
    case "Research":
      color = "_green";
      break;
    case "Copywriting":
      color = "_purple";
      break;
    default:
      color = "_gray";
  }

  return (
    <PopBrowseWrap>
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              <PopBrowseTittle>{cards[0].title}</PopBrowseTittle>
              <CategoriesTheme $ThemeColor={color}>
                <CategoriesThemeText>{cards[0].topic}</CategoriesThemeText>
              </CategoriesTheme>
            </PopBrowseTopBlock>
            <Status>
              <StatusTitle>Статус</StatusTitle>
              <StatusThemes>
                <StatusTheme>
                  <StatusThemeLabel>
                    <StatusThemeInput
                      type="radio"
                      name="status"
                      onChange={handleInputChange}
                      value="Без статуса"
                    />
                    Без статуса
                  </StatusThemeLabel>
                </StatusTheme>
                <StatusTheme>
                  <StatusThemeLabel>
                    <StatusThemeInput
                      type="radio"
                      name="status"
                      onChange={handleInputChange}
                      value="Нужно сделать"
                    />
                    Нужно сделать
                  </StatusThemeLabel>
                </StatusTheme>
                <StatusTheme>
                  <StatusThemeLabel>
                    <StatusThemeInput
                      type="radio"
                      name="status"
                      onChange={handleInputChange}
                      value="В работе"
                    />
                    В работе
                  </StatusThemeLabel>
                </StatusTheme>
                <StatusTheme>
                  <StatusThemeLabel>
                    <StatusThemeInput
                      type="radio"
                      name="status"
                      onChange={handleInputChange}
                      value="Тестирование"
                    />
                    Тестирование
                  </StatusThemeLabel>
                </StatusTheme>
                <StatusTheme>
                  <StatusThemeLabel>
                    <StatusThemeInput
                      type="radio"
                      name="status"
                      onChange={handleInputChange}
                      value="Готово"
                    />
                    Готово
                  </StatusThemeLabel>
                </StatusTheme>
              </StatusThemes>
            </Status>
            <PopBrowseWrapper>
              <PopBrowseForm id="formBrowseCard" action="#">
                <FormBrowseBlock>
                  <Subtitle htmlFor="textArea01">Описание задачи</Subtitle>
                  <FormBrowseArea
                    name="description"
                    id="textArea01"
                    placeholder="Введите описание задачи..."
                    defaultValue={cards[0].description}
                    onChange={handleInputChange}
                  />
                </FormBrowseBlock>
              </PopBrowseForm>
              <Calendar
                selected={selected}
                setSelected={setSelected}
                onChange={handleInputChange}
              />
            </PopBrowseWrapper>
            <ThemeDownCategories>
              <p className="categories__p subttl">Категория</p>
              <div className="categories__theme _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </ThemeDownCategories>
            <PopBrowseBtnWrap>
              <BtnGroup>
                <BtnGroupButton onClick={updateCard}>
                  <BtnGroupText>Редактировать задачу</BtnGroupText>
                </BtnGroupButton>
                <BtnGroupButton onClick={deleteCard}>
                  <BtnGroupText>Удалить задачу</BtnGroupText>
                </BtnGroupButton>
              </BtnGroup>
              <BtnBg>
                <BtnBgLink to={appRoutes.HOME}>Закрыть</BtnBgLink>
              </BtnBg>
            </PopBrowseBtnWrap>
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </PopBrowseWrap>
  );
}

export default PopBrowse;
