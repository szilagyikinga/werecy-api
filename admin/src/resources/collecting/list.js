import React from 'react';
import Chip from '@material-ui/core/Chip';
import {
  ShowButton,
  Datagrid,
  DateField,
  FunctionField,
  List,
  ChipField,
  ReferenceInput,
  AutocompleteInput,
  SelectInput,
  ReferenceField,
} from 'react-admin';
import UserField from '../users/userField';
import articles from '../collectingPoints/articles';

const statuses = [
  { name: 'En attente', id: 'pending' },
  { name: 'Validé', id: 'validated' },
  { name: 'Annulé', id: 'canceled' },
];

const filters = [
  <ReferenceInput label="Etablissement" source="establishment" reference="establishments" perPage={100}>
    <AutocompleteInput
      optionText={(record) => (record?.id ? `${record?.name ?? '??'} (${record?.code ?? '??'})` : <em>Tous</em>)}
    />
  </ReferenceInput>,
  <ReferenceInput label="Utilisateur" source="user" reference="users" perPage={1000}>
    <AutocompleteInput
      optionText={(record) =>
        record?.id ? `${record?.firstName ?? '??'} ${record?.lastName ?? '??'} (${record?.email})` : <em>Tous</em>
      }
    />
  </ReferenceInput>,
  <SelectInput source="article" choices={articles} label="Article" />,
  <SelectInput source="state" choices={statuses} label="Statut" />,
];

const UserList = (props) => {
  return (
    <List {...props} filters={filters} sort={{ field: 'created_at', order: 'DESC' }} bulkActionButtons={false}>
      <Datagrid optimized>
        <FunctionField
          label="Article"
          render={({ article }) => <Chip label={articles.find(({ id }) => id === article).name} />}
        />
        <ReferenceField label="user" source="user" reference="users">
          <UserField />
        </ReferenceField>
        <ReferenceField label="Etablissement" source="establishment" reference="establishments">
          <FunctionField source="name" render={(record) => `${record?.name ?? '??'} (${record?.code ?? '??'})`} />
        </ReferenceField>
        <ChipField label="État" source="state" />
        <DateField label="Validé le" source="validatedAt" options={{ locale: 'fr' }} />
        <DateField label="Créé le" source="createdAt" options={{ locale: 'fr' }} />
        <ShowButton />
      </Datagrid>
    </List>
  );
};

export default UserList;

/* <ReferenceField label="Etablissement" source="establishment" reference="establishments">
<FunctionField source="name" render={(record) => `${record?.name ?? '??'} (${record?.code ?? '??'})`} />
</ReferenceField> */
