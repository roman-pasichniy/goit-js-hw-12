import axios from 'axios';

export async function getImagesByQuery(query) {
  const URL = 'https://pixabay.com/api/';
  const key = '55115585-71990795827d4e19bcf2e84dd';

  const params = {
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    key,
  };

  const res = await axios.get(URL, { params });
  return res.data;
}
