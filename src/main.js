import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMore,
  hideLoadMore,
} from './js/render-functions';

import { getImagesByQuery } from './js/pixabay-api';

const form = document.querySelector('.form');
const input = document.querySelector('input');

let page = 1;
let perPage = 15;
let query = '';

const loadMoreBtn = document.querySelector('.btn-load-more');

form.addEventListener('submit', handleSubmit);
loadMoreBtn.addEventListener('click', handleLoadMore);

async function handleSubmit(event) {
  event.preventDefault();

  const inputValue = input.value.trim();
  if (!inputValue) return;

  query = inputValue;
  page = 1;

  clearGallery();
  hideLoadMore();
  showLoader();

  try {
    const data = await getImagesByQuery(query, page, perPage);

    if (!data.hits || data.hits.length === 0) {
      throw new Error();
    }

    createGallery(data.hits);

    const totalPages = Math.ceil(data.totalHits / perPage);

    if (totalPages > 1) {
      showLoadMore();
    } else {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }

    page += 1;
  } catch (error) {
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
      timeout: 2000,
      progressBar: false,
    });
  } finally {
    hideLoader();
  }

  form.reset();
}

async function handleLoadMore() {
  hideLoadMore();
  showLoader();

  try {
    const data = await getImagesByQuery(query, page, perPage);

    createGallery(data.hits);

    const totalPages = Math.ceil(data.totalHits / perPage);

    if (page < totalPages) {
      showLoadMore();
    } else {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }

    page += 1;

    const { height } = document
      .querySelector('.gallery')
      .firstElementChild.getBoundingClientRect();

    window.scrollBy({
      top: height * 2,
      behavior: 'smooth',
    });
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong. Please try again!',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}
