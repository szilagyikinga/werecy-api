import * as React from 'react';
import { Box } from '@material-ui/core';

import { BooleanInput, SimpleForm, TextInput, required, PasswordInput } from 'react-admin';

const SanitizedBox = ({ fullWidth, basePath, ...props }) => <Box {...props} />;

const Form = ({ ...props }) => (
  <SimpleForm {...props}>
    <SanitizedBox display="flex" flexDirection="column" width="100%" justifyContent="space-between" fullWidth>
      <TextInput label="Nom" source="name" validate={required()} />
      <TextInput label="Email" source="email" validate={required()} />
      <PasswordInput label="password" source="password" validate={required()} />
      <BooleanInput defaultValue={false} label="superAdmin" source="superAdmin" validate={required()} />
    </SanitizedBox>
  </SimpleForm>
);

export const transform = (data) => data;
export default Form;
