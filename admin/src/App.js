import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import establishment from './resources/establishments';
import collectingPoints from './resources/collectingPoints';

const dataProvider = jsonServerProvider('http://localhost:8080/api');
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="establishments" {...establishment} />
    <Resource name="collectingPoints" {...collectingPoints} />
  </Admin>
);

export default App;
