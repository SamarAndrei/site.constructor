import React from 'react';
import TitleBlock from '../../myconstructor/TitleBlock/TitleBlock';
import TextBlock from '../../myconstructor/TextBlock/TextBlock';
import ImageBlock from '../../myconstructor/ImageBlock/ImageBlock';

import CoverBlock from '../../myconstructor/CoverBlock/CoverBlock';
import '../../myconstructor/myconstructor.css'
import ButtonBlock from '../../myconstructor/ButtonBlock/ButtonBlock';

const PopupSidebar = ({ block, setSelectedBlock, addButtons, addTextBlock, addCoverBlock, addImageBlock, addTitleBlock }) => {
    return (
        
        <div id="popupSidebar" className="popup-sidebar">
            
            {block === "cover" && <CoverBlock addCoverBlock={addCoverBlock} />}
            {block === "title" && <TitleBlock addTitleBlock={addTitleBlock} />}
            {block === "text" && <TextBlock addTextBlock={addTextBlock} />} 
            {block === "image" && <ImageBlock addImageBlock={addImageBlock} />}
            {block === "button" && <ButtonBlock addButtons={addButtons} />} 
            
        </div>
        
    );
    
};
console.log("addButtons type:", typeof addButtons);

export default PopupSidebar;
