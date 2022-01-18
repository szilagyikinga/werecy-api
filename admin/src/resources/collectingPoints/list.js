import React from 'react';

import {
  ReferenceField,
  EditButton,
  ShowButton,
  Datagrid,
  DateField,
  List,
  SearchInput,
  TextField,
  ReferenceInput,
  AutocompleteInput,
  FunctionField,
} from 'react-admin';

const filters = [
  <SearchInput source="q" alwaysOn />,
  <ReferenceInput label="Etablissement" source="establishment" reference="establishments">
    <AutocompleteInput
      optionText={(record) => (record?.id ? `${record?.name ?? '??'} (${record?.code ?? '??'})` : <em>Tous</em>)}
    />
  </ReferenceInput>,
];

const CollectingPointList = (props) => {
  return (
    <List {...props} filters={filters} sort={{ field: 'created_at', order: 'DESC' }} bulkActionButtons={false}>
      <Datagrid optimized>
        <TextField source="label" label="Label" />
        <ReferenceField label="Etablissement" source="establishment" reference="establishments">
          <FunctionField source="name" render={(record) => `${record?.name ?? '??'} (${record?.code ?? '??'})`} />
        </ReferenceField>
        <DateField source="createdAt" sortByOrder="DESC" label="Créé le" locales="fr-FR" />
        <EditButton />
        <ShowButton />
      </Datagrid>
    </List>
  );
};

export default CollectingPointList;
