import React, { forwardRef } from 'react';
import '../../myconstructor/myconstructor.css';

const Sidebar = forwardRef(({ sidebarVisible, selectBlock }, ref) => {
    return (
        <div id="sidebar" className={sidebarVisible ? "visible" : ""} ref={ref}>
            <ul>
                <li onClick={() => selectBlock("cover")}>Обложка</li>
                <li onClick={() => selectBlock("title")}>Заголовок</li>
                <li onClick={() => selectBlock("text")}>Текстовый блок</li>
                <li onClick={() => selectBlock("image")}>Изображение</li>
                <li onClick={() => selectBlock("button")}>Кнопка</li>
            </ul>
        </div>
    );
});

export default Sidebar;
