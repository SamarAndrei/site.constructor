import React from 'react';
import AdvantagesBlockItem from './AdvantagesBlockItem';
import '../../myconstructor/myconstructor.css';

const AdvantagesBlock = () => {
    const advantages = [
        {
            title: "Высокое качество",
            description: "Мы являемся ведущей фирмой в области обеспечения качества и ценности для наших клиентов. Каждый член нашей команды имеет опыт работы в юридической сфере не менее 5 лет."
        },
        {
            title: "Хорошая поддержка",
            description: "Наши менеджеры всегда готовы ответить на ваши вопросы. Вы можете позвонить нам в выходные и в ночное время. Вы также можете посетить наш офис для личной консультации."
        },
        {
            title: "Индивидуальный подход",
            description: "Наша компания работает по принципу индивидуального подхода к каждому клиенту. Этот метод позволяет нам добиваться успеха в решении задач любого уровня."
        }
    ];

    return (
        <div className="advantages-block">
            <h2>Наши возможности</h2>
            <p>Мы упорно работаем каждый день, чтобы сделать жизнь наших клиентов лучше и счастливее</p>
            <div className="advantages-list">
                {advantages.map((advantage, index) => (
                    <AdvantagesBlockItem
                        key={index}
                        title={advantage.title}
                        description={advantage.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default AdvantagesBlock;
