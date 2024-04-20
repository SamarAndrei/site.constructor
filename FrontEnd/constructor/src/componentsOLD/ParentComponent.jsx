import { Button, Dialog, DialogActions, DialogContent, DialogTitle, List, ListItem, ListItemText } from '@mui/material'
import ColorPanel from 'components/ColorPanel'
import React, { useState } from 'react'

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
            <ListItem button onClick={() => handleComponentSelect(<ColorPanel />)}>
              <ListItemText primary="Компонент 1" />
            </ListItem>
            <ListItem button onClick={() => handleComponentSelect("Компонент 2")}>
              <ListItemText primary="Компонент 2" />
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

function ParentComponent() {
  const [blocks, setBlocks] = useState([]);

  const addBlock = (component) => {
    const newBlock = <div key={blocks.length}>{component}</div>;
    setBlocks([...blocks, newBlock]);
  };
	

  return (
    <div>
      <ComponentSelector onComponentSelect={addBlock} />
      <div>
        {blocks.map((block, index) => (
          <div key={index}>{block}</div>
        ))}
      </div>
    </div>
  );
}

export default ParentComponent;
