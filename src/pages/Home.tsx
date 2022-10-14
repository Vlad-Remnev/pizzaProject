import React, {useEffect, useState} from 'react';
import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort";
import PizzaSkeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock, {IPizzaBlock} from "../components/PizzaBlock/PizzaBlock";

const Home = () => {
    const [items, setItems] = useState<IPizzaBlock[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://6347d8c9db76843976b3ac95.mockapi.io/items')
            .then(res => res.json())
            .then(data => {
                setIsLoading(false)
                setItems(data)
            })
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="container">
            <div className="content__top">
                <Categories/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? [...new Array(6)].map((_, index) => <PizzaSkeleton key={index}/>)
                    : items.map((item) => <PizzaBlock key={item.id} {...item}/>)}
            </div>
        </div>
    );
};

export default Home;