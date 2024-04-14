import React, { useState } from 'react';
import { Button, Drawer, Box, Typography, TextField } from '@mui/material';

function TextPanel() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleContextMenu = (event) => {
    event.preventDefault(); // Предотвращаем открытие контекстного меню браузера
    handleOpen(); // Вызываем функцию открытия панели
  };

  return (
    <div>
      <Drawer anchor="right" open={open} onClose={handleClose}>
        <Box sx={{ width: 250, padding: 2 }}>
          <Typography gutterBottom>
            Введите текст
          </Typography>
          <TextField
            label="Текст"
            variant="outlined"
            value={text}
            onChange={handleTextChange}
            fullWidth
            autoFocus
          />
        </Box>
      </Drawer>
      <Box
        sx={{ marginTop: '0px', padding: '40px', border: '1px solid black' }}
        onContextMenu={handleContextMenu} // Добавляем обработчик события ПКМ
      >
        <Typography>{text}</Typography>
        <Button onClick={handleOpen}></Button>
      </Box>
    </div>
  );
}

export default TextPanel;
