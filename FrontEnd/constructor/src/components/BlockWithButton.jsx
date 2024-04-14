import React from 'react';

class BlockWithButton extends React.Component {
  handleDelete = () => {
    // Получаем родительский элемент кнопки
    const parentElement = this.buttonRef.parentElement;
    // Удаляем родительский элемент (в данном случае, блок)
    parentElement.remove();
  };

  render() {
    return (
      <div className="block">
        <button ref={(ref) => (this.buttonRef = ref)} onClick={this.handleDelete}>
          Удалить блок
        </button>
      </div>
    );
  }
}

export default BlockWithButton;
