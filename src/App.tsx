import React, {useState} from 'react';
import './scss/app.scss';
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import {
    Routes,
    Route
} from "react-router-dom";
import Cart from "./pages/Cart";

interface IContext {
    searchValue: string
    setSearchValue: (searchValue: string) => void
}

export const SearchContext = React.createContext({} as IContext)

function App() {
    const [searchValue, setSearchValue] = useState<string>('')

    return (
        <div className="wrapper">
            <SearchContext.Provider value={{searchValue, setSearchValue}}>
                <Header/>
                <div className="content">
                    <Routes>
                        <Route path='/' element={<Home />}/>
                        <Route path='/cart' element={<Cart/>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                </div>
            </SearchContext.Provider>
        </div>
    );
}

export default App;
