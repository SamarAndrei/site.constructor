import * as React from 'react';
import { styled } from '@mui/material/styles';

const Div = styled('div')({
	background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
	textAlign: 'center',
	verticalAlign: 'middle',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});

export default function TypographyTheme() {
  return <Div>{"This div's text looks like that of a button."}</Div>;
}