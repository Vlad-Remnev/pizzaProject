import React, {FC, useEffect, useState} from 'react';
import Categories from "../components/Categories/Categories";
import Sort, {IList} from "../components/Sort/Sort";
import PizzaSkeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock, {IPizzaBlock} from "../components/PizzaBlock/PizzaBlock";
import Pagination from "../components/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../redux/store";
import {FilterState, setCategory, setPage, setSort} from "../redux/slices/filterSlice";

const Home: FC = () => {
    const state = useSelector<RootState, FilterState>(state => state.filter)
    const dispatch = useDispatch<AppDispatch>()

    const [items, setItems] = useState<IPizzaBlock[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    console.log(state)
    useEffect(() => {
        setIsLoading(true)
        const order = state.sort.sortProperty.includes('-') ? 'asc' : 'desc'
        const sortBy = state.sort.sortProperty.replace('-', '')
        const category = state.categoryId > 0 ? `category=${state.categoryId}` : ''
        const search = state.search ? `search=${state.search}` : ''
        fetch(`https://6347d8c9db76843976b3ac95.mockapi.io/items?page=${state.currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}&${search}`)
            .then(res => res.json())
            .then(data => {
                setIsLoading(false)
                setItems(data)
            })
        window.scrollTo(0, 0)
    }, [state.categoryId, state.sort, state.search, state.currentPage])

    const onChangeCategory = (id: number) => {
        dispatch(setCategory(id))
    }

    const changeSort = (sort: IList) => {
        dispatch(setSort(sort))
    }

    const pageChange = (page: number) => {
        dispatch(setPage(page))
    }

    const skeletons = [...new Array(6)].map((_, index) => <PizzaSkeleton key={index}/>)
    const pizzas = items.map((item) => <PizzaBlock key={item.id} {...item} />)

    return (
        <div className="container">
            <div className="content__top">
                <Categories catId={state.categoryId} onClickCategory={onChangeCategory}/>
                <Sort sortObj={state.sort} onClickSort={changeSort}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? skeletons : pizzas}
            </div>
            <Pagination onPageChange={pageChange}/>
        </div>
    );
};

export default Home;