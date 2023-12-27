import Card from "../Card/Card";

function Column({ title }) {
    return (
        <div className="main__column column">
            <div className="column__title">
                <p>{title}</p>
            </div>
            <div className="cards">
                <Card name={"Название задачи"} theme={"Web Design"} date={"03.07.2023"} />
                <Card name={"Название задачи"} theme={"Copywriting"} date={"03.07.2023"} />
                <Card name={"Название задачи"} theme={"Research"} date={"03.07.2023"} />
                <Card name={"Название задачи"} theme={"Web Design"} date={"03.07.2023"} />
                <Card name={"Название задачи"} theme={"Copywriting"} date={"03.07.2023"} />
                <Card name={"Название задачи"} theme={"Web Design"} date={"03.07.2023"} />
            </div>
        </div>
    );
}

export default Column;
