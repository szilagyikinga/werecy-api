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
  SelectInput,
} from 'react-admin';
import articles from './articles';

const filters = [
  <SearchInput source="q" alwaysOn />,
  <ReferenceInput label="Etablissement" source="establishment" reference="establishments" perPage={100}>
    <AutocompleteInput
      optionText={(record) => (record?.id ? `${record?.name ?? '??'} (${record?.code ?? '??'})` : <em>Tous</em>)}
    />
  </ReferenceInput>,
  <SelectInput source="article" choices={articles} label="Article" />,
];

const CollectingPointList = (props) => {
  return (
    <List {...props} filters={filters} sort={{ field: 'createdAt', order: 'DESC' }} bulkActionButtons={false}>
      <Datagrid optimized>
        <TextField source="label" label="Label" />
        <TextField source="article" label="Article" />
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
