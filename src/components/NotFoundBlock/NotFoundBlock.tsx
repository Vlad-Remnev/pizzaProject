import React from 'react';
import confused from './../../assets/img/veryconfused.gif'
import s from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {
    return (
        <div className={s.root}>
            <img src={confused} alt="confused"/>
            <h1>
                Ничего не найдено :(
            </h1>
            <p>К сожалению данная страница отсутствует в нашем интернет-магазине</p>
        </div>
    );
};

export default NotFoundBlock;