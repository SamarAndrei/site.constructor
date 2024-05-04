import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, Box, TextField, Button, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ChromePicker } from 'react-color';

function HeaderPanel(props) {
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
  const [titlePositionY, setTitlePositionY] = useState(20);
  const [simpleText, setSimpleText] = useState('');
  const [simpleTextColor, setSimpleTextColor] = useState('#ffffff');
  const [simpleTextSize, setSimpleTextSize] = useState(18);
  const [simpleTextPositionY, setSimpleTextPositionY] = useState(50);
  const [logoUrl, setLogoUrl] = useState('/logo.png');
  const [backgroundColor, setBackgroundColor] = useState('#3f51b5');
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [buttons, setButtons] = useState([]);

  const handleOpen = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setShowColorPicker(false);
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

  const handleLogoUrlChange = (event) => {
    setLogoUrl(event.target.value);
  };

  const handleBackgroundColorChange = (color) => {
    setBackgroundColor(color.hex);
  };

  const toggleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };

  const addButton = () => {
    setButtons([...buttons, { label: 'New Button', onClick: () => {} }]);
  };

  const renderButtons = () => {
    return buttons.map((button, index) => (
      <Button key={index} color="inherit" onClick={button.onClick}>
        {button.label}
      </Button>
    ));
  };

  return (
    <React.Fragment>
      <AppBar position="static" onContextMenu={handleOpen} style={{ backgroundColor }}>
        <Toolbar>
          <Box component="img" src={logoUrl} alt="Logo" sx={{ height: 40 }} />
          <Box sx={{ flexGrow: 1 }} />
          {renderButtons()}
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={handleClose}>
        <Box sx={{ width: 400, padding: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6">Header Panel</Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          <TextField
            label="Logo URL"
            value={logoUrl}
            onChange={handleLogoUrlChange}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Image URL"
            value={imageUrl}

            onChange={handleUrlChange}
            fullWidth
            margin="normal"
          />

          {/* Другие поля для настройки изображения, текста, заголовка и т.д. */}

          <Box sx={{ mt: 2 }}>
            <Button variant="contained" onClick={toggleColorPicker}>
              Выбрать цвет фона
            </Button>
            {showColorPicker && (
              <ChromePicker
                color={backgroundColor}
                onChange={handleBackgroundColorChange}
              />
            )}
          </Box>

          <Box sx={{ mt: 2 }}>
            <Button variant="contained" onClick={addButton}>
              Добавить кнопку
            </Button>
          </Box>
        </Box>
      </Drawer>
    </React.Fragment>
  );
}

export default HeaderPanel;
