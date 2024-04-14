import React, { useState } from 'react';
import { Button, IconButton, Box } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { green } from '@mui/material/colors';
import ColorPanel from './ColorPanel'
import BlockWithButton from './BlockWithButton'


function PlusButton(props) {
  const [blocks, setBlocks] = useState([]);

  const handleButtonClick = () => {
    setBlocks([...blocks, blocks.length + 1]);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleButtonClick}
        startIcon={<AddCircleIcon sx={{ color: green[500] }} />}
      >
        Добавить
      </Button>
      {blocks.map((block, index) => (
        <ColorPanel><BlockWithButton></BlockWithButton></ColorPanel>
        
      ))}
    </div>
  );
}

export default PlusButton;
