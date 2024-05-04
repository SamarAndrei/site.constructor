import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Button } from '@mui/material';
import ColorPanel from './ColorPanel';
import TextPanel from './TextPanel';
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
      <Button onClick={handleOpen}>Все блоки</Button>
      <Drawer anchor="left" open={open} onClose={handleClose}>
        <List>
          <ListItem button onClick={() => handleComponentSelect(<ColorPanel />)}>
            <ListItemText primary="Цветной блок" />
          </ListItem>
          <ListItem button onClick={() => handleComponentSelect(<TextPanel />)}>
            <ListItemText primary="Текстовый блок" />
          </ListItem>
          <ListItem button onClick={() => handleComponentSelect(<ButtonPanel />)}>
            <ListItemText primary="Кнопка" />
          </ListItem>
          <ListItem button onClick={() => handleComponentSelect(<ImagePanel />)}>
            <ListItemText primary="Изображение" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default ComponentSelector;


// import React, { Component } from 'react';
// import ColorPanel from './ColorPanel';
// import TextPanel from './TextPanel';
// import ButtonPanel from './ButtonPanel';
// import ImagePanel from './ImagePanel';

// class ComponentSelector extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       open: false
//     };
//     this.sidebarRef = React.createRef();
//   }

//   componentDidMount() {
//     document.addEventListener('mousedown', this.handleClickOutside);
//   }

//   componentWillUnmount() {
//     document.removeEventListener('mousedown', this.handleClickOutside);
//   }

//   handleClickOutside = (event) => {
//     if (this.sidebarRef && !this.sidebarRef.current.contains(event.target)) {
//       this.setState({ open: false });
//     }
//   };

//   handleOpen = () => {
//     this.setState({ open: true });
//   };

//   handleClose = () => {
//     this.setState({ open: false });
//   };

//   handleComponentSelect = (componentSettings) => {
//     this.props.onComponentSelect(componentSettings);
//     this.handleOpen(); // Открываем сайдбар после выбора компонента
//   };
  

//   render() {
//     return (
//       <div ref={this.sidebarRef}>
//         <button onClick={this.handleOpen}>Компоненты</button>
//         {this.state.open && (
//           <div style={{ width: '250px', height: '100%', background: '#f0f0f0', position: 'fixed', top: 0, left: 0, boxShadow: '2px 0 5px rgba(0, 0, 0, 0.2)', padding: '20px' }}>
//             <ul style={{ listStyle: 'none', padding: 0 }}>
//               <li style={{ cursor: 'pointer', marginBottom: '10px' }} onClick={() => this.handleComponentSelect(<ColorPanel />)}>Цветной блок</li>
//               <li style={{ cursor: 'pointer', marginBottom: '10px' }} onClick={() => this.handleComponentSelect(<TextPanel />)}>Текстовый блок</li>
//               <li style={{ cursor: 'pointer', marginBottom: '10px' }} onClick={() => this.handleComponentSelect(<ButtonPanel />)}>Кнопка</li>
//               <li style={{ cursor: 'pointer' }} onClick={() => this.handleComponentSelect(<ImagePanel />)}>Изображение</li>
//             </ul>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default ComponentSelector;



