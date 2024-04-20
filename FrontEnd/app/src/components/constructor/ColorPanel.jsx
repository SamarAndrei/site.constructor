import PaletteIcon from '@mui/icons-material/Palette'
import { Box, Button, Drawer, Typography } from '@mui/material'
import React, { useState } from 'react'

function ColorPanel() {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState('#f0f0f0');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleContextMenu = (event) => {
    event.preventDefault(); 
    handleOpen(); 
  };

  return (
    <div>
      <Drawer anchor="right" open={open} onClose={handleClose}>
        <Box sx={{ width: 250, padding: 2 }}>
          <Typography gutterBottom>
            Выберите цвет
          </Typography>
          <input
            type="color"
            value={color}
            onChange={handleColorChange}
          />
        </Box>
      </Drawer>
      <Box
        sx={{ marginTop: '0px', padding: '40px', backgroundColor: color }}
        onContextMenu={handleContextMenu} // Добавляем обработчик события ПКМ
      >
      </Box>
    </div>
  );
}

export default ColorPanel;
