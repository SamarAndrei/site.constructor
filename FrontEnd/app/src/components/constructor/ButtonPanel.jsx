import React, { useState } from 'react';
import { Button, Drawer, Box, Typography, TextField, MenuItem } from '@mui/material';

function ButtonPanel() {
  const [open, setOpen] = useState(false);
  const [buttonText, setButtonText] = useState('Button');
  const [buttonColor, setButtonColor] = useState('#3f51b5');
  const [buttonTextAlign, setButtonTextAlign] = useState('center');
  const [buttonTextColor, setButtonTextColor] = useState('#ffffff');
  const [buttonSize, setButtonSize] = useState(40);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); 

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleButtonTextChange = (event) => {
    setButtonText(event.target.value);
  };

  const handleButtonColorChange = (event) => {
    setButtonColor(event.target.value);
  };

  const handleButtonTextAlignChange = (event) => {
    setButtonTextAlign(event.target.value);
  };

  const handleButtonTextColorChange = (event) => {
    setButtonTextColor(event.target.value);
  };

  const handleButtonSizeChange = (event) => {
    const newSize = parseInt(event.target.value);
    setButtonSize(newSize);
  };

  const handleBackgroundColorChange = (event) => {
    setBackgroundColor(event.target.value);
  };

  return (
    <div>
      <Drawer anchor="right" open={open} onClose={handleClose}>
        <Box sx={{ width: 250, padding: 2 }}>
          <Typography gutterBottom>Введите текст кнопки</Typography>
          <TextField
            label="Текст кнопки"
            variant="outlined"
            value={buttonText}
            onChange={handleButtonTextChange}
            fullWidth
          />
          <Typography gutterBottom>Выберите выравнивание кнопки</Typography>
          <TextField
            select
            value={buttonTextAlign}
            onChange={handleButtonTextAlignChange}
            fullWidth
            variant="outlined"
          >
            <MenuItem value="left">Left</MenuItem>
            <MenuItem value="center">Center</MenuItem>
            <MenuItem value="right">Right</MenuItem>
          </TextField>
          <Typography gutterBottom>Выберите цвет кнопки</Typography>
          <input type="color" value={buttonColor} onChange={handleButtonColorChange} />
          <Typography gutterBottom>Выберите цвет текста кнопки</Typography>
          <input type="color" value={buttonTextColor} onChange={handleButtonTextColorChange} />
          <Typography gutterBottom>Введите размер кнопки</Typography>
          <TextField
            type="number"
            variant="outlined"
            value={buttonSize}
            onChange={handleButtonSizeChange}
            inputProps={{
              min: 1,
              max: 100,
            }}
            fullWidth
          />
          <Typography gutterBottom>Выберите цвет фона блока</Typography>
          <input type="color" value={backgroundColor} onChange={handleBackgroundColorChange} />
        </Box>
      </Drawer>
      <Box
        sx={{
          marginTop: '0px',
          padding: '40px',
          textAlign: buttonTextAlign,
          backgroundColor: backgroundColor, 
        }}
      >
        <Button
          variant="contained"
          style={{
            backgroundColor: buttonColor,
            color: buttonTextColor,
            fontSize: `${buttonSize}px`,
          }}
          onClick={handleOpen}
        >
          {buttonText}
        </Button>
      </Box>
    </div>
  );
}

export default ButtonPanel;

