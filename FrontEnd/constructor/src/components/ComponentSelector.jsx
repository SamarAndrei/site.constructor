import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, List, ListItem, ListItemText } from '@mui/material';
import ColorPanel from './ColorPanel'
import TextPanel from './TextPanel'
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
              <ListItemText primary="Компонент 2" />
            </ListItem>
            {/* Добавьте здесь другие варианты компонентов для выбора */}
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
