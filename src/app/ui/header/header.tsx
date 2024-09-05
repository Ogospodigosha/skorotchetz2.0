import React from 'react';
import s from './header.module.scss'
import {HEADER_CONFIG} from "app/ui/header/header.config";
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.headerContainer}>
                <div className={"semibold-24"}>Скорочтец</div>
                <div className={s.navigationContainer} >
                    {HEADER_CONFIG.map(headerItem => <NavLink className={s.link} to={headerItem.navigateTo} key={headerItem.id}>{headerItem.name}</NavLink>)}
                </div>
            </div>
        </header>
    );
};

