import React, { useState } from 'react';
import { Button, Drawer, Box, TextField } from '@mui/material';

function ImagePanel() {
  const [open, setOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [imageSize, setImageSize] = useState(100);

  const handleOpen = (event) => {
    event.preventDefault(); // Предотвращаем открытие контекстного меню браузера
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
        <Box sx={{ width: 250, padding: 2 }}>
          <TextField
            label="URL изображения"
            variant="outlined"
            value={imageUrl}
            onChange={handleUrlChange}
            fullWidth
          />
          <Button onClick={handleImageLoad} variant="contained" color="primary">
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
            <Button component="span" variant="contained" color="primary">
              Загрузить из файлa
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
          />
        </Box>
      </Drawer>
      <Box
        sx={{
          marginTop: '0px',
          padding: '40px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Uploaded Image"
            style={{ width: '${imageSize}%', maxWidth: '100%' }}
          />
        )}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '20px',
        }}
      >
      </Box>
    </div>
  );
}

export default ImagePanel;