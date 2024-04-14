import React, { useState } from 'react';
import { Button, Drawer, Box, Typography } from '@mui/material';
import PaletteIcon from '@mui/icons-material/Palette';
import BlockWithButton from './BlockWithButton'


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

  return (
    <div>
			<BlockWithButton></BlockWithButton>
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
      <Box sx={{ marginTop: '0px', padding: '40px', backgroundColor: color }}>
        <Button onClick={handleOpen} startIcon={<PaletteIcon />}>
          Изменить цвет
        </Button>
      </Box>
    </div>
  );
}

export default ColorPanel;
