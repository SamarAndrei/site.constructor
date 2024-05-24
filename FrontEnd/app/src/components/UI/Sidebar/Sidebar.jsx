import React, { forwardRef } from 'react';
import '../../myconstructor/myconstructor.css';
import MyButton from '../Buttons/MyButton';

const Sidebar = forwardRef(({ sidebarVisible, selectBlock }, ref) => {
    return (
        <div id="sidebar" className={sidebarVisible ? "visible" : ""} ref={ref}>
            <ul>
                <li onClick={() => selectBlock("cover")}>Обложка</li>
                <li onClick={() => selectBlock("aboutproject")}>О проекте</li>
                <li onClick={() => selectBlock("title")}>Заголовок</li>
                <li onClick={() => selectBlock("text")}>Текстовый блок</li>
                <li onClick={() => selectBlock("image")}>Изображение</li>
                <li onClick={() => selectBlock("formconstructor")}>Форма</li>
                <li onClick={() => selectBlock("button")}>Кнопка</li>
                <li onClick={() => selectBlock("advantages")}>Преимущества</li>
                <li onClick={() => selectBlock("footerconstructor")}>Подвал</li> 
                <li onClick={() => selectBlock("header")}>Шапка</li>
                <li><MyButton children={'Сохранить'} onClick={() => selectBlock("save")}/></li>
            </ul>
        </div>
    );
});

export default Sidebar;
