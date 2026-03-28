import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let gallery;

const galleryEl = document.querySelector('.gallery');

export function createGallery(arr) {
  const markup = arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
          <li class="item">
            <a class="item-link" href="${largeImageURL}">
              <img class="item-img" src="${webformatURL}" alt="${tags}" />
              <div class="wrapper">
                <div class="span-wrapper">
                  <span class="span-name">Likes</span>
                  <span class="span-value">${likes}</span>
                </div>
                <div class="span-wrapper">
                  <span class="span-name">Views</span>
                  <span class="span-value">${views}</span>
                </div>
                <div class="span-wrapper">
                  <span class="span-name">Comments</span>
                  <span class="span-value">${comments}</span>
                </div>
                <div class="span-wrapper">
                  <span class="span-name">Downloads</span>
                  <span class="span-value">${downloads}</span>
                </div>
              </div>
            </a>
          </li>
        `;
      }
    )
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);

  if (!gallery) {
    gallery = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  } else {
    gallery.refresh();
  }
}

export function clearGallery() {
  galleryEl.innerHTML = '';
}

const loaderEl = document.querySelector('.loader');

export function showLoader() {
  loaderEl.classList.remove('is-hidden');
}

export function hideLoader() {
  loaderEl.classList.add('is-hidden');
}

const loadMoreBtn = document.querySelector('.btn-load-more');

export function showLoadMore() {
  loadMoreBtn.classList.remove('is-hidden');
}

export function hideLoadMore() {
  loadMoreBtn.classList.add('is-hidden');
}
