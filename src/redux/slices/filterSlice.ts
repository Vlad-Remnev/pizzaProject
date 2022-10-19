import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {IList} from "../../components/Sort/Sort";

export interface FilterState {
    search: string
    currentPage: number
    categoryId: number
    sort: IList
}

const initialState: FilterState = {
    search: '',
    currentPage: 1,
    categoryId: 0,
    sort: {
        name: 'популярности',
        sortProperty: 'rating'
    }
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        setCategory(state, action: PayloadAction<number>) {
            state.categoryId = action.payload
        },
        setSort(state, action: PayloadAction<IList>) {
            state.sort = action.payload
        },
        setSearch(state, action: PayloadAction<string>) {
            state.search = action.payload
        },
        setPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const {setCategory, setSort, setSearch, setPage} = filterSlice.actions

export default filterSlice.reducer