import React from 'react';
import MenuItems from './MenuItems.js';

export const Header = ({ title, onButtonClick, isGrid, onRefreshClick }) => {

    return (
        <header className='container-fluid'>
            <div className="container header-inner">
                <a href="index.html"><h2>{title}</h2></a>
                <div className="btn-holders">
                    <MenuItems />

                    <span onClick={onRefreshClick}>
                        <i className="fas fa-redo"></i>
                    </span>
                    <span onClick={onButtonClick}>
                        <i className={(isGrid) ? "fas fa-th-list" : "fas fa-th-large"}></i>
                    </span>
                </div>
            </div>
        </header >
    );
}


