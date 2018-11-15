import React, { Component } from 'react';
import { cn } from '@bem-react/classname';
import './footer.css';

class Footer extends Component {
    render() {
        const footClass = cn('Footer');

        return (
            <footer className={footClass()}>
                <div className="Wrapper">
                    <div className={footClass('Inner')}>
                        <ul className={footClass('List')}>
                            <li className={footClass('Item')}><a href="#" target="_blank" className={footClass('Link')}>Помощь</a></li>
                            <li className={footClass('Item')}><a href="#" target="_blank" className={footClass('Link')}>Обратная связь</a></li>
                            <li className={footClass('Item')}><a href="#" target="_blank" className={footClass('Link')}>Разработчикам</a></li>
                            <li className={footClass('Item')}><a href="#" target="_blank" className={footClass('Link')}>Условия использования</a></li>
                            <li className={footClass('Item')}><a href="resources/license.pdf" target="_blank" className={footClass('Link')}>Лицензии</a></li>
                        </ul>
                        <div className={footClass('Copyright')}>
                            &copy; 2001-2017 <a href="http://yandex.ru" className={footClass('Link')} target="_blank">ООО &laquo;Яндекс&raquo;</a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
