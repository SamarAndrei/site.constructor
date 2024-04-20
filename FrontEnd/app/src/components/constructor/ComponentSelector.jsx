import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, List, ListItem, ListItemText } from '@mui/material';
import ColorPanel from './ColorPanel'
import TextPanel from './TextPanel'
import ButtonPanel from './ButtonPanel';
import ImagePanel from './ImagePanel';
function ComponentSelector({ onComponentSelect }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleComponentSelect = (component) => {
    onComponentSelect(component);
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        Добавить компонент
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Выберите компонент</DialogTitle>
        <DialogContent>
          <List>
            <ListItem button onClick={() => handleComponentSelect(<ColorPanel/>)}>
              <ListItemText primary="Цветной блок" />
            </ListItem>
            <ListItem button onClick={() => handleComponentSelect(<TextPanel/>)}>
              <ListItemText primary="Текстовый блок" />
            </ListItem>
            <ListItem button onClick={() => handleComponentSelect(<ButtonPanel/>)}>
              <ListItemText primary="Кнопка" />
            </ListItem>
            <ListItem button onClick={() => handleComponentSelect(<ImagePanel/>)}>
              <ListItemText primary="Изображение" />
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отмена</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ComponentSelector;
