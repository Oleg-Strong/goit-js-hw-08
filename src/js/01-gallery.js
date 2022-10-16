// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

function createImgCard(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
`;
    })
    .join('');
}

// Создаём элемент с изображением исходя из данных массива обьектов
const galleryEl = createImgCard(galleryItems);

// Родительский элемент DOM
const galleryConteiner = document.querySelector('.gallery');

// Добавляем в разметку элементы с изображением
galleryConteiner.insertAdjacentHTML('beforeend', galleryEl);

// Методом из подключунной библиотеки создаём слайдер
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
