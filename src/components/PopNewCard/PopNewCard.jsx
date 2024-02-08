import { useState } from "react";
import Calendar from "../Calendar/Calendar";
import { useUser } from "../../hooks/useUser";
import { useCard } from "../../hooks/useCard";
import { addTask, getTasks } from "../../api";
import { Link } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
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
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <Link to={appRoutes.HOME} className="pop-new-card__close">
              ✖
            </Link>
            <div className="pop-new-card__wrap">
              <form
                className="pop-new-card__form form-new"
                id="formNewCard"
                action="#"
              >
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <input
                    value={newTask.title}
                    onChange={handleInputChange}
                    className="form-new__input"
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                  />
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    value={newTask.description}
                    onChange={handleInputChange}
                    className="form-new__area"
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  />
                </div>
              </form>
              <Calendar selected={selected} setSelected={setSelected} />
            </div>
            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                {/* 1) Не работает чекбокс при нажатии на лэибл */}
                <div className="categories__theme _orange _active-category">
                  <input
                    type="radio"
                    id="radio1"
                    name="topic"
                    onChange={handleInputChange}
                    value="Web Design"
                  />
                  <label className="_orange" htmlFor="radio1">
                    Web Design
                  </label>
                </div>
                
                <div className="categories__theme _green">
                  <input
                    type="radio"
                    id="radio2"
                    name="topic"
                    onChange={handleInputChange}
                    value="Research"
                  />
                  <label className="_green" htmlFor="radio2">
                    Research
                  </label>
                </div>

                <div className="categories__theme _purple">
                  <input
                    type="radio"
                    id="radio3"
                    name="topic"
                    onChange={handleInputChange}
                    value="Copywriting"
                  />
                  <label className="_purple" htmlFor="radio3">
                    Copywriting
                  </label>
                </div>
              </div>
            </div>
            <button
              className="form-new__create _hover01"
              id="btnCreate"
              onClick={addCard}
            >
              Создать задачу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopNewCard;
