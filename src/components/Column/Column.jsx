import Card from "../Card/Card";
import { Cards, ColumnTitle, ColumnTitleText, MainColumn } from "./Column.styled";

function Column({ title, cardList }) {
  return (
    <MainColumn>
      <ColumnTitle>
      <ColumnTitleText>{title}</ColumnTitleText>
      </ColumnTitle>
      <Cards>
        {cardList.map((item) => (
          <Card
            key={item.id}
            name={item.title}
            theme={item.theme}
            date={item.date}
          />
        ))}
     </Cards>
    </MainColumn>
  );
}

export default Column;
