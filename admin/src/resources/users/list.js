import React from 'react';

import { ShowButton, Datagrid, DateField, List, SearchInput, FunctionField, EmailField, TextField } from 'react-admin';
import Avatar from '@material-ui/core/Avatar';

const postFilter = [<SearchInput source="q" alwaysOn />];

const UserList = (props) => {
  return (
    <List {...props} filters={postFilter} sort={{ field: 'createdAt', order: 'DESC' }} bulkActionButtons={false}>
      <Datagrid optimized>
        <FunctionField label="Avatar" render={({ picture }) => (picture ? <Avatar alt="" src={picture} /> : '')} />
        <EmailField label="E-mail" source="email" />
        <TextField label="Prénom" source="firstName" />
        <TextField label="Nom" source="lastName" />
        <DateField label="Créé le" source="createdAt" options={{ locale: 'fr' }} />
        <ShowButton />
      </Datagrid>
    </List>
  );
};

export default UserList;
