import React from 'react';
import { NavLink, Link } from 'react-router-dom'

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

const Navbar = ({ back }) => {

    return (
        back ? (
            <div className="g nav d-flex flex-row">
                <Link
                    className="nav-link underline-from-left"
                    to="/"
                >
                    back
                </Link>
            </div >
        ) : (
            <div className="g nav d-flex flex-row">
                {NAV_ITEMS.map((item, index) => (
                    <NavLink
                        className="nav-link underline-from-left"
                        key={index}
                        exact
                        to={item.location}
                    >
                        {item.label}
                    </NavLink>
                ))}
            </div >
        )

    );
}

export default Navbar;
