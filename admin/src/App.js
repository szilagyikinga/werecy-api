import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import establishment from './resources/establishments';
import collectingPoints from './resources/collectingPoints';
import users from './resources/users';
import collecting from './resources/collecting';

const dataProvider = jsonServerProvider('http://localhost:8080/api');
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="establishments" {...establishment} />
    <Resource name="collectingPoints" {...collectingPoints} />
    <Resource name="users" {...users} />
    <Resource name="collectings" {...collecting} />
  </Admin>
);

export default App;
