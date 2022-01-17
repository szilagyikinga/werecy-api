import * as React from 'react';
import { FunctionField, Show, SimpleShowLayout, TextField, useShowController } from 'react-admin';
import Avatar from '@material-ui/core/Avatar';

const CollectingPointShow = (props) => {
  const { record } = useShowController(props);

  return (
    <Show title={record && record.label} {...props}>
      <SimpleShowLayout>
        <TextField disabled source="id" />
        <FunctionField label="Avatar" render={({ picture }) => (picture ? <Avatar alt="" src={picture} /> : '')} />
        <TextField label="E-mail" source="email" />
        <TextField label="Nom complet" source="name" />
        <TextField label="Prénom" source="firstName" />
        <TextField label="Nom" source="lastName" />
        <TextField label="Langue" source="locale" />
        <TextField label="Fournisseur d'identité" source="provider" />
      </SimpleShowLayout>
    </Show>
  );
};

export default CollectingPointShow;
