import React, { useState } from 'react';
import { Button, Drawer, Box, TextField } from '@mui/material';

function ImagePanel(props) {
  const [open, setOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState(props.img1);
  const [imageSize, setImageSize] = useState(100);
  const [darkenLevel, setDarkenLevel] = useState(0);
  const [opacityLevel, setOpacityLevel] = useState(100);
  const [text, setText] = useState('');
  const [textColor, setTextColor] = useState('#ffffff');
  const [textSize, setTextSize] = useState(24);
  const [textPositionX, setTextPositionX] = useState(50);
  const [textPositionY, setTextPositionY] = useState(50);
  const [title, setTitle] = useState('');
  const [titleColor, setTitleColor] = useState('#ffffff');
  const [titleSize, setTitleSize] = useState(36);
  const [titlePositionY, setTitlePositionY] = useState(20); // Начальная позиция заголовка по вертикали
  const [simpleText, setSimpleText] = useState('');
  const [simpleTextColor, setSimpleTextColor] = useState('#ffffff');
  const [simpleTextSize, setSimpleTextSize] = useState(18);
  const [simpleTextPositionY, setSimpleTextPositionY] = useState(50); // Начальная позиция простого текста по вертикали

  const handleOpen = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleImageSizeChange = (event) => {
    setImageSize(event.target.value);
  };

  const handleDarkenLevelChange = (event) => {
    setDarkenLevel(event.target.value);
  };

  const handleOpacityLevelChange = (event) => {
    setOpacityLevel(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleTextColorChange = (event) => {
    setTextColor(event.target.value);
  };

  const handleTextSizeChange = (event) => {
    setTextSize(event.target.value);
  };

  const handleTextPositionXChange = (event) => {
    setTextPositionX(event.target.value);
  };

  const handleTextPositionYChange = (event) => {
    setTextPositionY(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTitleColorChange = (event) => {
    setTitleColor(event.target.value);
  };

  const handleTitleSizeChange = (event) => {
    setTitleSize(event.target.value);
  };

  const handleTitlePositionYChange = (event) => {
    setTitlePositionY(event.target.value);
  };

  const handleSimpleTextChange = (event) => {
    setSimpleText(event.target.value);
  };

  const handleSimpleTextColorChange = (event) => {
    setSimpleTextColor(event.target.value);
  };

  const handleSimpleTextSizeChange = (event) => {
    setSimpleTextSize(event.target.value);
  };

  const handleSimpleTextPositionYChange = (event) => {
    setSimpleTextPositionY(event.target.value);
  };

  const handleImageLoad = () => {
    console.log('Loading image from URL:', imageUrl);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const url = reader.result;
      setImageUrl(url);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div onContextMenu={handleOpen}>
      <Drawer anchor="right" open={open} onClose={handleClose}>
        <Box sx={{ width: 300, padding: 2 }}>
          <TextField
            label="URL изображения"
            variant="outlined"
            value={imageUrl}
            onChange={handleUrlChange}
            fullWidth
            sx={{ mt: 10 }}
          />
          <Button onClick={handleImageLoad} variant="contained" color="primary" sx={{ mb: 2 }}>
            Загрузить изображение
          </Button>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: 'none' }}
            id="imageUploadInput"
          />
          <label htmlFor="imageUploadInput">
            <Button component="span" variant="contained" color="primary" sx={{ mb: 2 }}>
              Загрузить из файла
            </Button>
          </label>
          <TextField
            type="number"
            label="Размер изображения (%)"
            variant="outlined"
            value={imageSize}
            onChange={handleImageSizeChange}
            fullWidth
            inputProps={{
              min: 10,
              max: 1000,
            }}
            sx={{ mb: 2 }}
          />
          <TextField
            type="number"
            label="Процент затемнения"
            variant="outlined"
            value={darkenLevel}
            onChange={handleDarkenLevelChange}
            fullWidth
            inputProps={{
              min: 0,
              max: 100,
            }}
            sx={{ mb: 2 }}
          />
          <TextField
            type="number"
            label="Процент прозрачности"
            variant="outlined"
            value={opacityLevel}
            onChange={handleOpacityLevelChange}
            fullWidth
            inputProps={{
              min: 0,
              max: 100,
            }}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Заголовок"
            variant="outlined"
            value={title}
            onChange={handleTitleChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Цвет заголовка"
            variant="outlined"
            value={titleColor}
            onChange={handleTitleColorChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            type="number"
            label="Размер заголовка (px)"
            variant="outlined"
            value={titleSize}
            onChange={handleTitleSizeChange}
            fullWidth
            inputProps={{
              min: 10,
              max: 100,
            }}
            sx={{ mb: 2 }}
          />
          <TextField
            type="number"
            label="Позиция заголовка по вертикали (%)"
            variant="outlined"
            value={titlePositionY}
            onChange={handleTitlePositionYChange}
            fullWidth
            inputProps={{
              min: 0,
              max: 100,
            }}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Простой текст"
            variant="outlined"
            value={simpleText}
            onChange={handleSimpleTextChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Цвет простого текста"
            variant="outlined"
            value={simpleTextColor}
            onChange={handleSimpleTextColorChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            type="number"
            label="Размер простого текста (px)"
            variant="outlined"
            value={simpleTextSize}
            onChange={handleSimpleTextSizeChange}
            fullWidth
            inputProps={{
              min: 10,
              max: 100,
            }}
            sx={{ mb: 2 }}
          />
          <TextField
            type="number"
            label="Позиция простого текста по вертикали (%)"
            variant="outlined"
            value={simpleTextPositionY}
            onChange={handleSimpleTextPositionYChange}
            fullWidth
            inputProps={{
              min: 0,
              max: 100,
            }}
            sx={{ mb: 2 }}
          />
        </Box>
      </Drawer>
      <Box
        sx={{
          marginTop: '0px',
          padding: '0px',
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {imageUrl && (
          <div style={{ position: 'relative', width: `${imageSize}%`, maxWidth: '100%' }}>
            <img
              src={imageUrl}
              alt="Uploaded Image"
              style={{
                width: '100%',
                height: 'auto',
                filter: `brightness(${100 - darkenLevel}%) opacity(${opacityLevel}%)`,
              }}
            />
            {title && (
              <div
                style={{
                  position: 'absolute',
                  top: `${titlePositionY}%`,
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: titleColor,
                  fontSize: `${titleSize}px`,
                  textAlign: 'center',
                }}
              >
                {title}
              </div>
            )}
            {simpleText && (
              <div
                style={{
                  position: 'absolute',
                  top: `${simpleTextPositionY}%`,
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: simpleTextColor,
                  fontSize: `${simpleTextSize}px`,
                  textAlign: 'center',
                }}
              >
                {simpleText}
              </div>
            )}
            {text && (
              <div
                style={{
                  position: 'absolute',
                  top: `${textPositionY}%`,
                  left: `${textPositionX}%`,
                  transform: 'translate(-50%, -50%)',
                  color: textColor,
                  fontSize: `${textSize}px`,
                  textAlign: 'center',
                }}
              >
                {text}
              </div>
            )}
          </div>
        )}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '20px',
        }}
      ></Box>
    </div>
  );
}

export default ImagePanel;
