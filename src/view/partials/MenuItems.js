import React from "react";
import { Link } from "react-router-dom";

const MenuItems = () => {
    return (

        <div className="menu-items">
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </div>
    )
}


export default MenuItems;