// 'use strict';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const formRes = document.querySelector('.form');
const galleryRes = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
// loader.style.display = 'none';

const searchParams = {
  key: '41712066-bd7b5e249df7a86bd45ef70ea',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

const styleRef = new SimpleLightbox('.gallery a', {
  nav: true,
  captionDelay: 250,
  captionsData: 'alt',
  close: true,
  enableKeyboard: true,
  docClose: true,
});

function fetchUsers(paramk) {
  return fetch(`https://pixabay.com/api?${paramk}`).then(response => {
    if (!response) {
      throw new Error('Request is not ok');
    }
    return response.json();
  });
}

function rendersImg(data) {
  if (data.hits.length > 0) {
    const imgs = data.hits.reduce(
      (
        html,
        { webformatURL, largeImageURL, tags, likes, views, comments, downloads }
      ) =>
        html +
        `<li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
           <img class="gallery-image"
           src="${webformatURL}"
           alt="${tags}"
           />
          </a>
          <div class="description">
          <p><b>Likes</b><span>${likes}</span></p>
          <p><b>Views</b><span>${views}</span></p>
          <p><b>Comments</b><span>${comments}</span></p>
          <p><b>Downloads</b><span>${downloads}</span></p>
          </div>
        </li>`,
      ''
    );
    galleryRes.innerHTML = imgs;
    styleRef.refresh();
    // loader.style.display = 'none';
  } else {
    iziToast.error({
      position: 'topRight',
      width: '10px',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
  }
}

formRes.addEventListener('submit', e => {
  e.preventDefault();
  galleryRes.HTML = '';
  // loader.style.display = 'block';
  searchParams.q = formRes.search.value.trim();
  const param = new URLSearchParams(searchParams);

  fetchUsers(param)
    .then(data => rendersImg(data))
    .catch(error => console.log(error));
  e.currentTarget.reset();
});
