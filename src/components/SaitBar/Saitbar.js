import React from 'react';
import Style from './Saitbar.module.css';
import { NavLink } from 'react-router-dom';

const Saitbar = () => {
  return (
    <nav className={Style.nav}>
      <div className={Style.item}><NavLink to='/profile' className={({ isActive }) => isActive ? Style.activeLink : ''}>Profile</NavLink></div>
      <div className={Style.item}><NavLink to='/dialogs' className={({ isActive }) => isActive ? Style.activeLink : ''}>Messages</NavLink></div>
      <div className={Style.item}><NavLink to='#'>News</NavLink></div>
      <div className={Style.item}><NavLink to='#'>Music</NavLink></div>
      <div className={Style.item}><NavLink to='#'>Settings</NavLink></div>
    </nav>
  )
}

export default Saitbar