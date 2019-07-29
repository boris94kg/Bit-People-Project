import React from 'react';
import { Link } from "react-router-dom";
import MenuItems from './MenuItems.js';

export const AboutHeader = (props) => {
    const { title } = props;

    return (
        <header className='container-fluid'>
            <div className="container header-inner">
                <Link to="/"><h2>{title}</h2></Link>
                <div className="btn-holders">
                    <MenuItems />
                </div>
            </div>
        </header >
    );
}


