import React, {FC, useEffect, useState} from 'react';
import Categories from "../components/Categories/Categories";
import Sort, {IList} from "../components/Sort/Sort";
import PizzaSkeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock, {IPizzaBlock} from "../components/PizzaBlock/PizzaBlock";
import Pagination from "../components/Pagination";
import {SearchContext} from "../App";

// interface IHome {
//     searchValue: string
// }

const Home: FC = () => {
    const {searchValue} = React.useContext(SearchContext)
    const [items, setItems] = useState<IPizzaBlock[]>([])
    const [categoryId, setCategoryId] = useState<number>(0)
    const [sort, setSort] = useState<IList>({name: 'популярности', sortProperty: 'rating'})
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        setIsLoading(true)
        const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'
        const sortBy = sort.sortProperty.replace('-', '')
        const category = categoryId > 0 ? `category=${categoryId}` : ''
        const search = searchValue ? `search=${searchValue}` : ''
        fetch(`https://6347d8c9db76843976b3ac95.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}&${search}`)
            .then(res => res.json())
            .then(data => {
                setIsLoading(false)
                setItems(data)
            })
        window.scrollTo(0, 0)
    }, [categoryId, sort, searchValue, currentPage])

    // const handlePageClick = ({selected}: {selected: number}) => {
    //     const newOffset = (selected * itemsPerPage) % items.length;
    //     console.log(
    //         `User requested page number ${selected}, which is offset ${newOffset}`
    //     );
    //     setItemOffset(newOffset);
    // };

    const skeletons = [...new Array(6)].map((_, index) => <PizzaSkeleton key={index}/>)
    const pizzas = items.map((item) => <PizzaBlock key={item.id} {...item} />)

    return (
        <div className="container">
            <div className="content__top">
                <Categories catId={categoryId} onClickCategory={(id: number) => setCategoryId(id)}/>
                <Sort sortObj={sort} onClickSort={(sort: IList) => setSort(sort)}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? skeletons : pizzas}
            </div>
            <Pagination onPageChange={(page: number) => setCurrentPage(page)}/>
        </div>
    );
};

export default Home;