import React, {FC} from 'react';
import styles from './Search.module.scss'
import {SearchContext} from "../../App";

const Search: FC = () => {
    const {searchValue, setSearchValue} = React.useContext(SearchContext)
    const cleanUp = () => {
        setSearchValue('')
    }
    return (
        <div className={styles.root}>
            <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title/>
                <g data-name="Layer 2" id="Layer_2">
                    <path
                        d="M18,10a8,8,0,1,0-3.1,6.31l6.4,6.4,1.41-1.41-6.4-6.4A8,8,0,0,0,18,10Zm-8,6a6,6,0,1,1,6-6A6,6,0,0,1,10,16Z"/>
                </g>
            </svg>
            <input value={searchValue} onChange={(event) => setSearchValue(event.currentTarget.value)}
                   className={styles.searchBar} type="text" placeholder="Поиск пиццы..."/>
            {searchValue && (
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1"
                     version="1.1" viewBox="0 0 512 512" className={styles.iconClose} onClick={cleanUp}>
                    <path
                        d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"/>
                </svg>
            )}
        </div>

    );
};

export default Search;