import { AuthProvider } from 'react-admin';
const apiUrl = "http://localhost:3000"; // Remplace par l'URL de ton backend


export const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    const request = new Request(`${apiUrl}/auth/login`, {
      method: 'POST',
      body: JSON.stringify({ email: username, password }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });

    try {
      const response = await fetch(request);
      if (response.status < 200 || response.status >= 300) {
        throw new Error(response.statusText);
      }
      const auth = await response.json();
      localStorage.setItem('auth', JSON.stringify(auth));
      return Promise.resolve();
    } catch (error) {
      throw new Error('Network error');
    }
  },

  logout: () => {
    localStorage.removeItem('auth');
    return Promise.resolve();
  },

  checkAuth: () => {
    return localStorage.getItem('auth')
      ? Promise.resolve()
      : Promise.reject();
  },

  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem('auth');
      return Promise.reject();
    }
    return Promise.resolve();
  },

  getPermissions: () => {
    const auth = localStorage.getItem('auth');
    return auth ? Promise.resolve(JSON.parse(auth).role) : Promise.reject();
  },

  getIdentity: () => {
    const auth = localStorage.getItem('auth');
    if (!auth) {
      return Promise.reject();
    }
    const { id, fullName, avatar } = JSON.parse(auth);
    return Promise.resolve({ id, fullName, avatar });
  },
};