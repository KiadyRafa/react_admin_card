import { fetchUtils } from 'react-admin';

const apiUrl = 'http://localhost:3000';

export const httpClient = (url: string, options: any = {}) => {
  if (!url.startsWith('http')) {
    url = `${apiUrl}${url}`;
  }

  const auth = localStorage.getItem('auth');
  if (auth) {
    const { token } = JSON.parse(auth);
    options.headers = new Headers({
      ...options.headers,
      Authorization: `Bearer ${token}`,
    });
  }

  return fetchUtils.fetchJson(url, options);
};