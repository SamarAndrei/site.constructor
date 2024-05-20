import React from 'react';
import TitleBlock from '../../myconstructor/TitleBlock/TitleBlock';
import TextBlock from '../../myconstructor/TextBlock/TextBlock';
import ImageBlock from '../../myconstructor/ImageBlock/ImageBlock';
import CoverBlock from '../../myconstructor/CoverBlock/CoverBlock';
import ButtonBlock from '../../myconstructor/ButtonBlock/ButtonBlock';
import '../../myconstructor/myconstructor.css';

const PopupSidebar = ({ block, setSelectedBlock, addButtonBlock, addTextBlock, addCoverBlock, addImageBlock, addTitleBlock }) => {
    return (
        <div id="popupSidebar" className="popup-sidebar">
            {block === "cover" && <CoverBlock addCoverBlock={addCoverBlock} />}
            {block === "title" && <TitleBlock addTitleBlock={addTitleBlock} />}
            {block === "text" && <TextBlock addTextBlock={addTextBlock} />} 
            {block === "image" && <ImageBlock addImageBlock={addImageBlock} />}
            {block === "button" && <ButtonBlock addButtonBlock={addButtonBlock} />} 
        </div>
    );
};

export default PopupSidebar;
