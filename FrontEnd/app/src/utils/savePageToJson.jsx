export function savePageToJson() {
	// Получаем дом-дерево страницы
	const pageData = document.documentElement.outerHTML;
	
	// Сохраняем дом-дерево страницы в состоянии компонента
	this.setState({ pageData });

	// Создаем объект для сохранения в JSON
	const dataToSave = {
		pageTitle: document.title,
		pageContent: pageData,
	};

	// Преобразуем объект в JSON
	const jsonData = JSON.stringify(dataToSave);

	// Создаем объект для скачивания файла
	const blob = new Blob([jsonData], { type: 'application/json' });
	const url = URL.createObjectURL(blob);

	// Создаем ссылку для скачивания файла
	const link = document.createElement('a');
	link.href = url;
	link.download = 'page_data.json';

	// Добавляем ссылку на страницу и эмулируем клик для скачивания файла
	document.body.appendChild(link);
	link.click();

	// Удаляем ссылку из DOM
	document.body.removeChild(link);
};