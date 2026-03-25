import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

import { getImagesByQuery } from './js/pixabay-api';

const form = document.querySelector('.form');
const input = document.querySelector('input');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const inputValue = input.value.trim();

  if (!inputValue) {
    return;
  }

  clearGallery();

  showLoader();

  getImagesByQuery(inputValue)
    .then(data => {
      if (!data.hits || data.hits.length === 0) {
        throw new Error('No images');
      }

      createGallery(data.hits);
    })
    .catch(() => {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        timeout: 2000,
        progressBar: false,
      });
    })
    .finally(() => {
      hideLoader();

      form.reset();
    });
}
