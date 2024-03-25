import React, { useState } from 'react';
import './StylesForms.css'; // Подключаем файл стилей
const FeedbackForm = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Предотвращаем отправку формы по умолчанию
        console.log('Отправлен email:', email); // Выводим email в консоль (может быть заменен на отправку данных на сервер)
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
            </label>
            <button type="submit">Отправить</button>
        </form>
    );
};

export default FeedbackForm;