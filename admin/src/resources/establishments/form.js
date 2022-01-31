import * as React from 'react';
import { Box } from '@material-ui/core';

import {
  BooleanInput,
  CheckboxGroupInput,
  SimpleForm,
  FileInput,
  FileField,
  TextInput,
  NumberInput,
  required,
} from 'react-admin';
import types from './types';
import { getImageValue } from '../../utils';

const SanitizedBox = ({ fullWidth, basePath, ...props }) => <Box {...props} />;

const Form = ({ ...props }) => (
  <SimpleForm {...props}>
    <SanitizedBox display="flex" flexDirection="column" width="100%" justifyContent="space-between" fullWidth>
      <FileInput source="logo" label="logo" accept="image/*">
        <FileField source="src" title="logo" target="_blank" />
      </FileInput>
      <FileInput source="image" label="image" accept="image/*">
        <FileField source="src" title="image" target="_blank" />
      </FileInput>
      <TextInput label="Nom" source="name" validate={required()} />
      <TextInput label="Code" source="code" validate={required()} />
      <BooleanInput label="Prochainement ?" source="isUpComing" />
      <BooleanInput label="Validation déclarative ?" source="declarativeValidation" />
      <CheckboxGroupInput source="types" choices={types} />
      <TextInput label="Rue" source="address.street" validate={required()} />
      <TextInput label="Code postal" source="address.zip" validate={required()} />
      <TextInput label="Ville" source="address.city" validate={required()} />
      <NumberInput label="Longitude" source="location.coordinates[0]" validate={required()} />
      <NumberInput label="Latitude" source="location.coordinates[1]" validate={required()} />
      <TextInput label="Message de partage" source="shareMessage" />
    </SanitizedBox>
  </SimpleForm>
);

export const transform = async ({ location, image, logo, ...data }) => ({
  ...data,
  location: {
    ...location,
    type: 'Point',
  },
  image: await getImageValue(image),
  logo: await getImageValue(logo),
});

export default Form;
