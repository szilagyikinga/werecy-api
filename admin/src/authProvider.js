const authProvider = {
  // authentication
  login: async ({ username, password }) => {
    const authUrl =
      process.env.NODE_ENV === 'production' ? '/api/authenticate' : 'http://localhost:8080/api/authenticate';
    const request = new Request(authUrl, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });
    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((auth) => {
        localStorage.setItem('auth', JSON.stringify(auth));
      })
      .catch(() => {
        throw new Error('Network error');
      });
  },
  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem('auth');
      return Promise.reject({ message: false });
    }
    // other error code (404, 500, etc): no need to log out
    return Promise.resolve();
  },
  checkAuth: () => (localStorage.getItem('auth') ? Promise.resolve() : Promise.reject()),
  logout: () => {
    localStorage.removeItem('auth');
    return Promise.resolve();
  },
  getIdentity: () => {
    try {
      const { id, fullName } = JSON.parse(localStorage.getItem('auth'));
      return Promise.resolve({ id, fullName });
    } catch (error) {
      return Promise.reject(error);
    }
  },
  // authorization
  getPermissions: () => {
    try {
      const { superAdmin } = JSON.parse(localStorage.getItem('auth'));
      console.log({ superAdmin });
      return superAdmin ? Promise.resolve('admin') : Promise.resolve('');
    } catch (err) {
      Promise.reject();
    }
  },
};

export default authProvider;
