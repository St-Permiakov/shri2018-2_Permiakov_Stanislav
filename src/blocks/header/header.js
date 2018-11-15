import React, { Component } from 'react';
import { cn } from '@bem-react/classname';
import $ from 'jquery';
import './header.css';
import logo from './logo.svg';

class Header extends Component {
    constructor(props) {
        super(props);

        this.classes = {
            header:  '.Header',
            navBtn:  '.Header-NavBtn',
            navMenu: '.Header-Nav'
        }

        /* init */
        this.setListeners();
    }

    setListeners() {
        $(document).on('click', this.classes.navBtn, (e) => {
            e.preventDefault();
            if ($(this.classes.navMenu).hasClass('opened')) {
                this.closeMenu();
            } else {
                this.openMenu();
            }
        });
    }

    openMenu() {
        $(this.classes.navMenu).addClass('opened');
    }

    closeMenu() {
        $(this.classes.navMenu).removeClass('opened');
    }

    render() {
        const cssHeader = cn('Header');

        return (
            <header className={cssHeader()}>
                <div className="Wrapper">
                    <div className={cssHeader('Inner')}>
                        <a href="https://www.yandex.ru" className={cssHeader('Logo', ['Logo'])}>
                            <img src={logo} alt="Яндекс.Дом" />
                        </a>
                        <button className={cssHeader('NavBtn')}>
                            <img src="assets/img/icons/icon_list.svg" alt="Меню" />
                        </button>
                        <nav className={cssHeader('Nav')}>
                            <ul className={cssHeader('NavList')}>
                                <li className={cssHeader('NavItem')}><a href="index.html" className={cssHeader('NavLink', {state: 'active'})}>События</a></li>
                                <li className={cssHeader('NavItem')}><a href="#" className={cssHeader('NavLink')}>Сводка</a></li>
                                <li className={cssHeader('NavItem')}><a href="#" className={cssHeader('NavLink')}>Устройства</a></li>
                                <li className={cssHeader('NavItem')}><a href="#" className={cssHeader('NavLink')}>Сценарии</a></li>
                                <li className={cssHeader('NavItem')}><a href="#" className={cssHeader('NavLink')}>Камеры</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
