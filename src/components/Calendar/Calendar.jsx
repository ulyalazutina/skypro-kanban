import { format } from 'date-fns';
import { DayPicker } from "react-day-picker";
import 'react-day-picker/dist/style.css';
import ru from "date-fns/locale/ru";

export default function Calendar({selected, setSelected}) {

    let footer = <p>Пожалуйста, выберите дату.</p>;
    if (selected) {
        footer = <p>Вы выбрали {format(selected, "PP", { locale: ru })

    }.</p>;
    }
    return (
        <DayPicker locale={ru}
            mode="single"
            selected={selected}
            onSelect={setSelected}
            footer={footer}
        />
    );
}