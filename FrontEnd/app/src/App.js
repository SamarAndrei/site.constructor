import React from 'react';
import TypographyTheme from './components/UI/Text/Text';
import BasicTextFields from './components/UI/Input/Input';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './components/UI/Buttons/StylesButtons.css';
import ButtonLink from './components/UI/Buttons/ButtonLink';
import FeedbackForm from './components/UI/Form/FeedbackForm';
import MyButton from './components/UI/Buttons/Button';
import TestSlider from './components/UI/Slider/TestSlider';
import Card from './components/UI/Card/Card';
import '././components/UI/Card/Card.css'

function App() {
  return (
    <div className="App">
      <MyButton>Кнпока</MyButton>
      <TypographyTheme>Текст компонент</TypographyTheme>
      <BasicTextFields/>
      <ButtonLink/>
      <FeedbackForm/>
      <TestSlider/>
      <Card/>
    </div>
  );
  
}



export default App;
