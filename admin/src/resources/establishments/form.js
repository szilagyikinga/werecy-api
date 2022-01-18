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
      <CheckboxGroupInput source="types" choices={types} />
      <TextInput label="Rue" source="address.street" validate={required()} />
      <TextInput label="Code postal" source="address.zip" validate={required()} />
      <TextInput label="Ville" source="address.city" validate={required()} />
      <NumberInput label="Longitude" source="location.coordinates[0]" validate={required()} />
      <NumberInput label="Latitude" source="location.coordinates[1]" validate={required()} />
    </SanitizedBox>
  </SimpleForm>
);

// https://marmelab.com/react-admin/DataProviders.html#extending-a-data-provider-example-of-file-upload
const convertFileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;

    reader.readAsDataURL(file.rawFile);
  });

const getImageValue = async (field) => {
  if (!(field?.rawFile instanceof File)) return field;
  console.log(field);
  const base64 = await convertFileToBase64(field);

  return {
    base64,
    name: field.rawFile.path,
    type: field.rawFile.type,
  };
};

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
