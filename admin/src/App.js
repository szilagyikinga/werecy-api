import * as React from 'react';
import { Admin, fetchUtils, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import establishment from './resources/establishments';
import collectingPoints from './resources/collectingPoints';
import users from './resources/users';
import admins from './resources/admins';
import collecting from './resources/collecting';
import authProvider from './authProvider';

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  const { token } = JSON.parse(localStorage.getItem('auth'));
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

const apiUrl = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:8080/api';
const dataProvider = jsonServerProvider(apiUrl, httpClient);

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    {(permissions) => [
      <Resource name="establishments" {...establishment} />,
      <Resource name="collectingPoints" {...collectingPoints} />,
      <Resource name="users" {...users} />,
      <Resource name="collectings" {...collecting} />,
      permissions === 'admin' ? <Resource name="admins" {...admins} /> : null,
    ]}
  </Admin>
);

export default App;
