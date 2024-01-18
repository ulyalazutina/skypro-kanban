import Column from "../Column/Column";
import { Container } from "../Common/Common.styled";
import { MainBlock, MainContent, MainWrapper } from "./Main.styled";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function Main({ cardList, isLoaded }) {
  return (
    <MainWrapper>
      <Container>
        <MainBlock>
          <MainContent>
            {isLoaded
              ? "Данные загружаются"
              : statusList.map((item) => (
                  <Column
                    key={item}
                    title={item}
                    cardList={cardList.filter((card) => card.status === item)}
                  />
                ))}
          </MainContent>
        </MainBlock>
      </Container>
    </MainWrapper>
  );
}

export default Main;
