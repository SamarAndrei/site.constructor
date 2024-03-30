import React from 'react';
import MyText from './components/UI/Text/Text';
import MyInput from './components/UI/Input/Input';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './components/UI/Buttons/StylesButtons.css';
import ButtonLink from './components/UI/Buttons/ButtonLink';
import FeedbackForm from './components/UI/Form/FeedbackForm';
import MyButton from './components/UI/Buttons/Button';
import TestSlider from './components/UI/Slider/TestSlider';
import Card from './components/UI/Card/Card';
import '././components/UI/Card/Card.css'
import FixedBar from './components/UI/Bar/FixedBar';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <MyButton>Кнпока</MyButton> */}
      {/* <MyText>Какой то текст</MyText> */}
      {/* <MyInput/> */}
      {/* <ButtonLink/> */}
      <FeedbackForm/>
      {/* <TestSlider/> */}
      {/* <Card/> */}
      <FixedBar/>
    </div>
  );
  
}



export default App;
