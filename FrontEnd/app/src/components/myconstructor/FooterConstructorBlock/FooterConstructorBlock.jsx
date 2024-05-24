import React from 'react';
import MyButton from '../../UI/Buttons/MyButton';

const FooterConstructorBlock = ({ addFooterBlock }) => {
    const handleAddFooterBlock = () => {
        const newFooterBlock = {
            id: Date.now(),
            content: '© Все права защищены. Site Constructor. constr@mysite.com',
            textColor: '#000000',
            backgroundColor: '#ffffff',
            buttons: [
                { text: 'О проекте', backgroundColor: '#000000', color: '#ffffff' },
                { text: 'Особенности', backgroundColor: '#000000', color: '#ffffff' },
                { text: 'Работа', backgroundColor: '#000000', color: '#ffffff' },
                { text: 'Блог', backgroundColor: '#000000', color: '#ffffff' },
                { text: 'Помощь', backgroundColor: '#000000', color: '#ffffff' },
                { text: 'Контакты', backgroundColor: '#000000', color: '#ffffff' }
            ],
            vkLink: 'https://vk.com', 
            tgLink: 'https://t.me' 
        };
        addFooterBlock(newFooterBlock);
    };

    return (
        <div>
            <MyButton onClick={handleAddFooterBlock}>Добавить Подвал</MyButton>
        </div>
    );
};

export default FooterConstructorBlock;
