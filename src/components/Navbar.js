import React from 'react';
import { NavLink } from 'react-router-dom'

const NAV_ITEMS = [
    {
        location: '/',
        label: 'work',
    },
    {
        location: '/contact',
        label: 'contact',
    }
];

const Navbar = () => {

    return (
        <div className="g nav d-flex flex-row">
            {NAV_ITEMS.map((item, index) => (
                <NavLink
                    className="nav-link"
                    key={index}
                    exact={item.location === '/'}
                    to={item.location}
                >
                    {item.label}
                </NavLink>
            ))}
        </div>
    );
}

export default Navbar;
