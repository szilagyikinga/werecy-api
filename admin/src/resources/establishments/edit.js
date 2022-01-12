// https://github.com/marmelab/react-admin/blob/master/examples/simple/src/posts/PostEdit.tsx
import * as React from 'react';
import {
  TopToolbar,
  BooleanInput,
  CheckboxGroupInput,
  Edit,
  CloneButton,
  ShowButton,
  FormTab,
  TabbedForm,
  TextInput,
  required,
} from 'react-admin';
import { Box } from '@material-ui/core';
import types from './types';

const EditActions = ({ basePath, data, hasShow }) => (
  <TopToolbar>
    <CloneButton className="button-clone" basePath={basePath} record={data} />
    {hasShow && <ShowButton basePath={basePath} record={data} />}
  </TopToolbar>
);

const SanitizedBox = ({ fullWidth, basePath, ...props }) => <Box {...props} />;

const EtablishmentTitle = ({ record }) => {
  return <span>{record.title}</span>;
};

const EtablishmentEdit = ({ ...props }) => {
  return (
    <Edit title={<EtablishmentTitle />} actions={<EditActions />} {...props}>
      <TabbedForm warnWhenUnsavedChanges>
        <FormTab label="Informations">
          <SanitizedBox display="flex" flexDirection="column" width="100%" justifyContent="space-between" fullWidth>
            <TextInput disabled source="id" />
            <TextInput label="Nom" source="name" validate={required()} resettable />
            <TextInput label="Code" source="code" validate={required()} resettable />
            <BooleanInput label="Prochainement ?" source="isUpComing" resettable />
          </SanitizedBox>
          <CheckboxGroupInput source="types" choices={types} />
        </FormTab>
        <FormTab label="Adresse">
          <SanitizedBox display="flex" flexDirection="column" width="100%" justifyContent="space-between" fullWidth>
            <TextInput label="Rue" source="address.street" validate={required()} resettable />
            <TextInput label="Code postal" source="address.zip" validate={required()} resettable />
            <TextInput label="Ville" source="address.city" validate={required()} resettable />
            <TextInput label="Longitude" source="location.coordinates[0]" validate={required()} resettable />
            <TextInput label="Latitude" source="location.coordinates[1]" validate={required()} resettable />
          </SanitizedBox>
        </FormTab>
      </TabbedForm>
    </Edit>
  );
};

export default EtablishmentEdit;
