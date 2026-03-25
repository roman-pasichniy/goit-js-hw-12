import axios from 'axios';

export function getImagesByQuery(query) {
  const URL = 'https://pixabay.com/api/';
  const key = '55115585-71990795827d4e19bcf2e84dd';

  const params = {
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    key,
  };

  return axios.get(URL, { params }).then(res => res.data);
}
