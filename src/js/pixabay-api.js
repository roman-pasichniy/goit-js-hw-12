import axios from 'axios';

export async function getImagesByQuery(query, page, perPage) {
  const URL = 'https://pixabay.com/api/';
  const key = '55115585-71990795827d4e19bcf2e84dd';

  const params = {
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    key,
    page,
    per_page: perPage,
  };

  const res = await axios.get(URL, { params });
  return res.data;
}
