import React from 'react';

import { ShowButton, Datagrid, DateField, List, TextField, BooleanField, EditButton } from 'react-admin';

const AdminList = (props) => {
  return (
    <List {...props} sort={{ field: 'createdAt', order: 'DESC' }} bulkActionButtons={false}>
      <Datagrid optimized>
        <TextField label="Nom" source="name" />
        <TextField label="E-mail" source="email" />
        <BooleanField defaultValue={false} label="Super admin" source="superAdmin" />
        <DateField label="Créé le" source="createdAt" options={{ locale: 'fr' }} />
        <ShowButton />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default AdminList;
