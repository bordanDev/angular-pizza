// Файл формирует интерфейс для использования в алгоритмах


// Фильтрация пицц по их типам, цене
export interface Pizza {
    id: number;
    type: string;
    title: string;
    ingredients: string[];
    price: number;
    imgUrl: string;
    tag: string;
    thickness: string;
}

// Как подключить?
// Импортируем его в корень скрипта
// import { Pizza } from '../pizza.model';

// Указываем для переменных тип Pizza[], что является массивом Pizza в котором уже заданы нужные поля


export interface PizzaAdditionalIngredients {
    title: string;
    imgUrl: string;
    price: number;
    state: boolean
}
