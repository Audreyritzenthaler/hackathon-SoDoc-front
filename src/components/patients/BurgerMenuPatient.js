import React from 'react'
import { NavLink } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'


const BurgerMenuPatient = () => {
    return(
        <Menu right>
            <NavLink exact to="/logbook" activeClassName="selected" className="list_burger">My messages</NavLink>
            <NavLink to="/mydosages" activeClassName="selected" className="list_burger">My dosages</NavLink>
            <NavLink to="/myappointements" activeClassName="selected" className="list_burger">My appoitements</NavLink>
            <NavLink to="/myinfos" activeClassName="selected" className="list_burger">Settings</NavLink>
            <NavLink to="/" activeClassName="selected" className="power"><i class="fas fa-power-off"></i></NavLink>
        </Menu>
    )
}

export default BurgerMenuPatient