import React, { useState } from 'react';
import { Button, Drawer, Box, Typography, TextField } from '@mui/material';

function ButtonPanel() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  const [buttonText, setButtonText] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Добавлено состояние для цвета фона кнопки

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleButtonTextChange = (event) => {
    setButtonText(event.target.value);
  };

  const handleBackgroundColorChange = (event) => {
    setBackgroundColor(event.target.value);
  };

  const handleContextMenu = (event) => {
    event.preventDefault(); // Предотвращаем открытие контекстного меню браузера
    handleOpen(); // Вызываем функцию открытия панели
  };

  const handleAddButton = () => {
    setText(buttonText);
    handleClose();
  };

  return (
    <div>
      <Drawer anchor="right" open={open} onClose={handleClose}>
        <Box sx={{ width: 250, padding: 2 }}>
          <Typography gutterBottom>
            Введите текст кнопки
          </Typography>
          <TextField
            label="Текст кнопки"
            value={buttonText}
            onChange={handleButtonTextChange}
          />
          <Typography gutterBottom>
            Выберите цвет фона кнопки
          </Typography>
          <input
            type="color"
            value={backgroundColor}
            onChange={handleBackgroundColorChange}
          />
          <Button onClick={handleAddButton}>Применить</Button>
        </Box>
      </Drawer>
      <Box
        sx={{
          marginTop: '0px',
          padding: '40px',
          border: '1px solid black',
          backgroundColor: backgroundColor // Добавляем стиль для цвета фона кнопки
        }}
        onContextMenu={handleContextMenu} // Добавляем обработчик события ПКМ
      >
        <Button onClick={handleOpen}>{text || 'Добавить кнопку'}</Button>
      </Box>
    </div>
  );
}

export default ButtonPanel;

// import React, { useState } from 'react';
// import { Button, Drawer, Box, Typography, TextField, MenuItem } from '@mui/material';

// function TextPanel() {
//   const [open, setOpen] = useState(false);
//   const [text, setText] = useState('');
//   const [textAlign, setTextAlign] = useState('left');
//   const [textColor, setTextColor] = useState('#000000');
//   const [textSize, setTextSize] = useState(16);
//   const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Добавлено состояние для цвета фона

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleTextChange = (event) => {
//     setText(event.target.value);
//   };

//   const handleTextAlignChange = (event) => {
//     setTextAlign(event.target.value);
//   };

//   const handleTextColorChange = (event) => {
//     setTextColor(event.target.value);
//   };

//   const handleTextSizeChange = (event) => {
//     setTextSize(parseInt(event.target.value));
//   };

//   const handleBackgroundColorChange = (event) => {
//     setBackgroundColor(event.target.value);
//   };

//   const handleContextMenu = (event) => {
//     event.preventDefault(); // Предотвращаем открытие контекстного меню браузера
//     handleOpen(); // Вызываем функцию открытия панели
//   };

//   return (
//     <div>
//       <Drawer anchor="right" open={open} onClose={handleClose}>
//         <Box sx={{ width: 250, padding: 2 }}>
//           <Typography gutterBottom>
//             Введите текст
//           </Typography>
//           <TextField
//             label="Текст"
//             variant="outlined"
//             value={text}
//             onChange={handleTextChange}
//             fullWidth
//             autoFocus
//           />
//           <Typography gutterBottom>
//             Выберите выравнивание текста
//           </Typography>
//           <TextField
//             select
//             value={textAlign}
//             onChange={handleTextAlignChange}
//             fullWidth
//             variant="outlined"
//           >
//             <MenuItem value="left">Left</MenuItem>
//             <MenuItem value="center">Center</MenuItem>
//             <MenuItem value="right">Right</MenuItem>
//           </TextField>
//           <Typography gutterBottom>
//             Выберите цвет текста
//           </Typography>
//           <input
//             type="color"
//             value={textColor}
//             onChange={handleTextColorChange}
//           />
//           <Typography gutterBottom>
//             Выберите цвет фона
//           </Typography>
//           <input
//             type="color"
//             value={backgroundColor}
//             onChange={handleBackgroundColorChange}
//           />
//           <Typography gutterBottom>
//             Введите размер текста
//           </Typography>
//           <TextField
//             type="number"
//             variant="outlined"
//             value={textSize}
//             onChange={handleTextSizeChange}
//             inputProps={{
//               min: 8,
//               max: 72,
//             }}
//             fullWidth
//           />
//         </Box>
//       </Drawer>
//       <Box
//         sx={{
//           marginTop: '0px',
//           padding: '40px',
//           textAlign: textAlign,
//           color: textColor,
//           fontSize: `${textSize}px`, // Используем `${textSize}px` для задания размера текста
//           backgroundColor: backgroundColor, // Добавлено свойство для цвета фона
//         }}
//         onContextMenu={handleContextMenu} // Добавляем обработчик события ПКМ
//       >
//         <Typography>{text}</Typography>
//         <Button onClick={handleOpen}></Button>
//       </Box>
//     </div>
//   );
// }

// export default TextPanel;
