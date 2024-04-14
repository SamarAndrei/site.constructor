import React from 'react';
import ParentComponent from './components/ParentComponent';
import ColorPanel from './components/ColorPanel';

function App(props) {
	return (
		<div>
			<ParentComponent></ParentComponent>
			<ColorPanel></ColorPanel>
		</div>
	);
}

export default App;