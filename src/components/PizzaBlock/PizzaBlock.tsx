import React, {FC, useState} from 'react';

interface IPizzaBlock {
    title: string
    price: number
    imageUrl: string
    types?: number[]
    sizes?: number[]
    category?: number
    rating?: number
}

const PizzaBlock:FC<IPizzaBlock> = ({title, price, types, sizes, imageUrl}) => {

    const [activeIndexSize, setActiveIndexSize] = useState(0)
    const [activeIndexDough, setActiveIndexDough] = useState(0)
    const pizzaDoughNames = ['тонкое', 'традиционное']

    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{title}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {/*<li className="active">тонкое</li>*/}
                    {/*<li>традиционное</li>*/}
                    {types?.map(item => (
                        <li
                            key={item}
                            className={item === activeIndexDough ? 'active' : ''}
                            onClick={() => setActiveIndexDough(item)}
                        >
                            {pizzaDoughNames[item]}
                        </li>
                    ))}
                </ul>
                <ul>
                    {sizes?.map((item, index) => (
                        <li onClick={() => setActiveIndexSize(index)} className={index === activeIndexSize ? 'active' : ''}
                            key={index}

                        >
                            {item} см.
                        </li>
                    ))}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <button className="button button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    <i>0</i>
                </button>
            </div>
        </div>
    );
};

export default PizzaBlock;