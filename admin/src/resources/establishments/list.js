import React from 'react';

// https://github.com/marmelab/react-admin/blob/master/examples/simple/src/posts/PostList.tsx

import { EditButton, ShowButton, Datagrid, DateField, List, SearchInput, TextField, FunctionField } from 'react-admin';

const renderAdressInList = ({ address: { street, zip, city }, ...props }) => (
  <>
    {street}
    <br />
    {zip} {city}
  </>
);

const postFilter = [<SearchInput source="q" alwaysOn />];

const EtablishmentList = (props) => {
  return (
    <List {...props} filters={postFilter} sort={{ field: 'created_at', order: 'DESC' }} bulkActionButtons={false}>
      <Datagrid optimized>
        <TextField source="name" label="Nom" />
        <DateField source="createdAt" sortByOrder="DESC" label="Créé le" locales="fr-FR" />
        <FunctionField label="Adresse" render={renderAdressInList} />
        <EditButton />
        <ShowButton />
      </Datagrid>
    </List>
  );
};

export default EtablishmentList;
