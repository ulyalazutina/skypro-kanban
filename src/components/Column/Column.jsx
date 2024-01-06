import Card from "../Card/Card";

function Column({ title, cardList }) {
    return (
        <div className="main__column column">
            <div className="column__title">
                <p>{title}</p>
            </div>
            <div className="cards">
                {cardList.map((item) => (
                    <Card key={item.id} name={item.title} theme={item.theme} date={item.date} />
                ))
                }
            </div>
        </div>
    );
}

export default Column;
