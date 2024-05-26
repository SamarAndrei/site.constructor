import React, { useState } from 'react';
import TitleBlock from '../../myconstructor/TitleBlock/TitleBlock';
import TextBlock from '../../myconstructor/TextBlock/TextBlock';
import ImageBlock from '../../myconstructor/ImageBlock/ImageBlock';
import CoverBlock from '../../myconstructor/CoverBlock/CoverBlock';
import ButtonBlock from '../../myconstructor/ButtonBlock/ButtonBlock';
import HeaderConstructor from '../../myconstructor/HeaderConstructor/HeaderConstructor';
import FormConstructorBlock from '../../myconstructor/FormConstructorBlock/FormConstructorBlock';
import FooterConstructorBlock from '../../myconstructor/FooterConstructorBlock/FooterConstructorBlock';
import AboutProjectBlock from '../../myconstructor/AboutProjectBlock/AboutProjectBlock';
import AdvantagesBlock from '../../myconstructor/AdvantagesBlock/AdvantagesBlock';
import '../../myconstructor/myconstructor.css';
import MyButton from '../Buttons/MyButton';
import axios from 'axios';

const PopupSidebar = ({ block, setSelectedBlock, addButtonBlock, addTextBlock, addCoverBlock, addImageBlock, addTitleBlock, addHeaderBlock, collectBlocks, addFormBlock, addFooterBlock, addAdvantagesBlock, addAboutProjectBlock}) => {
    const [valueName, setValueName] = useState('');
    const [valueAdress, setValueAdress] = useState('');
    const [valueDesc, setValueDesc] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const structure = collectBlocks();

        axios.post('http://127.0.0.1:8000/landings', {
            name: document.getElementsByName('name')[0].value,
            adress: document.getElementsByName('adress')[0].value,
            description: document.getElementsByName('description')[0].value,
            structure: JSON.stringify(structure),
        }).catch(() => console.error('Ошибка сервера'));
    };

    return (
        <div id="popupSidebar" className="popup-sidebar">
            {block === "cover" && <CoverBlock addCoverBlock={addCoverBlock} />}
            {block === "title" && <TitleBlock addTitleBlock={addTitleBlock} />}
            {block === "text" && <TextBlock addTextBlock={addTextBlock} />} 
            {block === "image" && <ImageBlock addImageBlock={addImageBlock} />}
            {block === "button" && <ButtonBlock addButtonBlock={addButtonBlock} />} 
            {block === "header" && <HeaderConstructor addHeaderBlock={addHeaderBlock} />} 
            {block === "formconstructor" && <FormConstructorBlock addFormBlock={addFormBlock} />}
            {block === "footerconstructor" && <FooterConstructorBlock addFooterBlock={addFooterBlock} />} 
            {block === "advantages" && <AdvantagesBlock addAdvantagesBlock={addAdvantagesBlock} />}
            {block === "aboutproject" && <AboutProjectBlock addAboutProjectBlock={addAboutProjectBlock} />}
            {block === 'save' && (
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <input type="search" value={valueName} onChange={e => setValueName(e.target.value)} placeholder="Название" name='name' />
                    <input type="search" value={valueAdress} onChange={e => setValueAdress(e.target.value)} placeholder="Адрес сайта" name='adress' />
                    <input type="search" value={valueDesc} onChange={e => setValueDesc(e.target.value)} placeholder="Описание" name='description' />
                    <MyButton disabled={valueName && valueAdress && valueDesc ? false : true } children={'Сохранить'} type='submit' />
                </form>
            )}
        </div>
    );
};

export default PopupSidebar;
