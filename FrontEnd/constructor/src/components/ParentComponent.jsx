import ComponentSelector from './ComponentSelector'
import { useState } from 'react';


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
