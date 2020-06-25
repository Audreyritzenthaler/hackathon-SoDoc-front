import React from 'react'
import { NavLink } from 'react-router-dom'
import { bubble as Menu } from 'react-burger-menu'

import './BurgerMenuPatient.css'

const BurgerMenuPatient = () => {
    return(
        <Menu right>
            <NavLink exact to="/messages" activeClassName="selected" className="list_burger">My messages</NavLink>
            <NavLink to="/dosages" activeClassName="selected" className="list_burger">My dosages</NavLink>
            <NavLink to="/appointement" activeClassName="selected" className="list_burger">My appoitements</NavLink>
            <NavLink to="/infos" activeClassName="selected" className="list_burger">Settings</NavLink>
            <NavLink to="/connection" activeClassName="selected" className="list_burger"></NavLink>
        </Menu>
    )
}

export default BurgerMenuPatient