import React from 'react';
import { useHistory } from 'react-router-dom';

const TransitionButton = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push('/');
    };
        
    return (
        <div>
            <button onClick={handleClick}>Подробнее</button>
        </div>
    );
};

export default TransitionButton;