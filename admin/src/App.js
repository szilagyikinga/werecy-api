import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import establishment from './resources/establishments';

const dataProvider = jsonServerProvider('http://localhost:8080/api');
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="establishments" {...establishment} />
  </Admin>
);

export default App;
