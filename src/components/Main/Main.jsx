import Column from "../Column/Column";

function Main() {
    return (
        <main className="main">
            <div className="container">
                <div className="main__block">
                    <div className="main__content">
                        <Column title={"Без статуса"}></Column>
                        <Column title={"Нужно сделать"}></Column>
                        <Column title={"В работе"}></Column>
                        <Column title={"Тестирование"}></Column>
                        <Column title={"Готово"}></Column>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;
