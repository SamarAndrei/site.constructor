import React from 'react';
import MyButton from '../../UI/Buttons/MyButton';

const AdvantagesBlock = ({ addAdvantagesBlock }) => {
    const handleAddAdvantageBlock = () => {
        const newAdvantageBlock = {
            id: Date.now(),
            title: "Наши особенности",
            description: "Мы усердно работаем каждый день, чтобы сделать жизнь наших клиентов лучше и счастливее",
            advantages: [
                {
                    title: "Высокое качество",
                    description: "Мы являемся ведущей фирмой в обеспечении качества и ценности для наших клиентов. Каждый член нашей команды имеет опыт работы в юридической сфере не менее 5 лет."
                },
                {
                    title: "Хорошая поддержка",
                    description: "Наши менеджеры всегда готовы ответить на ваши вопросы. Вы можете звонить нам в выходные и ночью. Вы также можете посетить наш офис для личной консультации."
                },
                {
                    title: "Индивидуальный подход",
                    description: "Наша компания работает по принципу индивидуального подхода к каждому клиенту. Этот метод позволяет нам добиваться успеха в решении задач любого уровня."
                }
            ]
        };
        addAdvantagesBlock(newAdvantageBlock);
    };

    return (
        <div>
            <MyButton onClick={handleAddAdvantageBlock}>Добавить Преимущество</MyButton>
        </div>
    );
};

export default AdvantagesBlock;
