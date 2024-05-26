import React from 'react';
import MyButton from '../../UI/Buttons/MyButton';

const AboutProjectBlock = ({ addAboutProjectBlock }) => {
    const handleAddAboutProjectBlock = () => {
        const newAboutProjectBlocks = [
            {
                id: Date.now(),
                content: "Сайт Конструктор - это инновационная платформа, предназначенная для тех, кто стремится создать профессиональный веб-сайт без необходимости в глубоких знаниях программирования и дизайна. Наш интуитивно понятный интерфейс позволяет каждому пользователю легко и быстро настроить свой сайт, адаптировать его под уникальные бизнес-потребности и стилистические предпочтения.",
                alignment: 'center'
            }
        ];
        addAboutProjectBlock(newAboutProjectBlocks);
    };
    
    return (
        <div>
            <MyButton onClick={handleAddAboutProjectBlock}>Добавить блок "О проекте"</MyButton>
        </div>
    );
};

export default AboutProjectBlock;
