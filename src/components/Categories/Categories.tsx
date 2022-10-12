import React, {useState} from 'react';

const Categories = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    const onClickCategory = (index: number) => {
        setActiveIndex(index)
    }

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    const renderedCategories = categories.map((item, index) => (
        <li key={index}
            onClick={() => onClickCategory(index)}
            className={activeIndex === index ? "active" : ""}
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