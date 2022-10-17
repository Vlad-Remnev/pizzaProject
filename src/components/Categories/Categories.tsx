import React, {FC, useState} from 'react';

interface ICategories {
    catId: number
    onClickCategory: (id: number) => void
}

const Categories:FC<ICategories> = ({catId, onClickCategory}) => {

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    const renderedCategories = categories.map((item, index) => (
        <li key={index}
            onClick={() => onClickCategory(index)}
            className={catId === index ? "active" : ""}
        >
            {item}
        </li>
    ))
    return (
        <div className="categories">
            <ul>
                {renderedCategories}
            </ul>
        </div>
    );
};

export default Categories;