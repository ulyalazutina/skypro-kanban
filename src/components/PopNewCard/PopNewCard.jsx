import { useState } from 'react'
import Calendar from '../Calendar/Calendar'
import { useUser } from '../../hooks/useUser'
import { useCard } from '../../hooks/useCard'
import { addTask, getTasks } from '../../api'
import { appRoutes } from '../../lib/appRoutes'
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
    PopNewCardInput,
    PopNewCardTitle,
    PopNewCardWrap,
    PopNewCardWrapper,
    Subtitle,
} from './PopNewCard.styled'
import { useNavigate } from 'react-router'

function PopNewCard() {
    const { userData } = useUser()
    const { cardData, updateCards } = useCard()
    const [selected, setSelected] = useState()
    const [newCardError, setNewCardError] = useState(null)
    let navigate = useNavigate()

    const [newTask, setNewTask] = useState({
        title: '',
        topic: '',
        status: 'Без статуса',
        description: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target

        setNewTask({
            ...newTask,
            [name]: value,
        })
        console.log(value)
    }

    const addCard = async () => {
        let newCard = {
            ...newTask,
            date: selected,
            token: userData.token,
        }

        console.log([...cardData, newCard])
        console.log(newTask)
        addTask(newCard)
            .then(() => {
                navigate(appRoutes.HOME)
            })
            .then((data) => {
                console.log(data)
                getTasks({ token: userData.token }).then((response) => {
                    updateCards(response.tasks)
                })
            })
            .catch((error) => {
                setNewCardError(error.message)
            })
    }

    return (
        <PopNewCardWrap>
            <PopNewCardContainer>
                <PopNewCardBlock>
                    <PopNewCardContent>
                        <PopNewCardTitle>Создание задачи</PopNewCardTitle>
                        <PopNewCardClose to={appRoutes.HOME}>
                            ✖
                        </PopNewCardClose>
                        <PopNewCardWrapper>
                            <PopNewCardForm id="formNewCard" action="#">
                                <FormNewBlock>
                                    <Subtitle htmlFor="formTitle">
                                        Название задачи
                                    </Subtitle>
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
                                    <Subtitle htmlFor="textArea">
                                        Описание задачи
                                    </Subtitle>
                                    <FormNewArea
                                        value={newTask.description}
                                        onChange={handleInputChange}
                                        name="description"
                                        id="textArea"
                                        placeholder="Введите описание задачи..."
                                    />
                                </FormNewBlock>
                            </PopNewCardForm>
                            <Calendar
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </PopNewCardWrapper>
                        <PopNewCardCategories>
                            <PopNewCardCategoriesText>
                                Категория
                            </PopNewCardCategoriesText>
                            <CategoriesThemes>
                                <CategoriesThemeOrange>
                                    <CategoriesThemeLabelOrange>
                                        <PopNewCardInput
                                            type="radio"
                                            name="topic"
                                            onChange={handleInputChange}
                                            value="Web Design"
                                        />
                                        Web Design
                                    </CategoriesThemeLabelOrange>
                                </CategoriesThemeOrange>
                                <CategoriesThemeGreen>
                                    <CategoriesThemeLabelGreen>
                                        <PopNewCardInput
                                            type="radio"
                                            // id={topicInputId}
                                            name="topic"
                                            onChange={handleInputChange}
                                            value="Research"
                                        />
                                        Research
                                    </CategoriesThemeLabelGreen>
                                </CategoriesThemeGreen>
                                <CategoriesThemePurple>
                                    <CategoriesThemeLabelPurple>
                                        <PopNewCardInput
                                            type="radio"
                                            // id={topicInputId}
                                            name="topic"
                                            onChange={handleInputChange}
                                            value="Copywriting"
                                        />
                                        Copywriting
                                    </CategoriesThemeLabelPurple>
                                </CategoriesThemePurple>
                            </CategoriesThemes>
                        </PopNewCardCategories>
                        <FormNewCreate id="btnCreate" onClick={addCard}>
                            Создать задачу
                        </FormNewCreate>
                    </PopNewCardContent>
                    {newCardError ? (
                        <p style={{ color: 'red' }}>{newCardError}</p>
                    ) : (
                        ''
                    )}
                </PopNewCardBlock>
            </PopNewCardContainer>
        </PopNewCardWrap>
    )
}

export default PopNewCard
