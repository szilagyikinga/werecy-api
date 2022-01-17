import * as React from 'react';
import { Box } from '@material-ui/core';

import { BooleanInput, CheckboxGroupInput, SimpleForm, TextInput, NumberInput, required } from 'react-admin';
import types from './types';

const SanitizedBox = ({ fullWidth, basePath, ...props }) => <Box {...props} />;

const Form = ({ ...props }) => (
  <SimpleForm {...props}>
    <SanitizedBox display="flex" flexDirection="column" width="100%" justifyContent="space-between" fullWidth>
      <TextInput label="Nom" source="name" validate={required()} resettable />
      <TextInput label="Code" source="code" validate={required()} resettable />
      <BooleanInput label="Prochainement ?" source="isUpComing" resettable />
      <CheckboxGroupInput source="types" choices={types} />
      <TextInput label="Rue" source="address.street" validate={required()} resettable />
      <TextInput label="Code postal" source="address.zip" validate={required()} resettable />
      <TextInput label="Ville" source="address.city" validate={required()} resettable />
      <NumberInput label="Longitude" source="location.coordinates[0]" validate={required()} resettable />
      <NumberInput label="Latitude" source="location.coordinates[1]" validate={required()} resettable />
    </SanitizedBox>
  </SimpleForm>
);

export default Form;
