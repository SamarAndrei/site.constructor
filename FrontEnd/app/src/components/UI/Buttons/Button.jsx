import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="column">
      <Button variant="text" className= 'textButton'>Текст</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
    
  );
}

