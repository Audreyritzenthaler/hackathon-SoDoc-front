import React from 'react'
import { NavLink } from 'react-router-dom'
import { bubble as Menu } from 'react-burger-menu'


const BurgerMenuPractitioner = () => {
    return(
        <Menu right>
            <NavLink exact to="/practitioner/messages" activeClassName="selected" className="list_burger">All messages</NavLink>
            <NavLink to="/practitioner/patients" activeClassName="selected" className="list_burger">All patients</NavLink>
            <NavLink to="/practitioner/infos" activeClassName="selected" className="list_burger">Settings</NavLink>
            <NavLink to="/" activeClassName="selected" className="power"><i class="fas fa-power-off"></i></NavLink>
        </Menu>
    )
}

export default BurgerMenuPractitioner
