import * as React from 'react';
import { Box } from '@material-ui/core';

import { useMemo } from 'react';
import {
  BooleanInput,
  Create,
  CheckboxGroupInput,
  SaveButton,
  SimpleForm,
  TextInput,
  NumberInput,
  Toolbar,
  required,
} from 'react-admin';
import types from './types';

// <SaveButton
//       label="post.action.save_with_average_note"
//       transform={(data) => ({ ...data, average_note: 10 })}
//       redirect="show"
//       submitOnEnter={false}
//       variant="text"
//     />

const addEmptyImage = ({ location, ...data }) => ({
  ...data,
  image: 'empty.png',
  logo: 'empty.png',
  location: {
    ...location,
    type: 'Point',
  },
});

const PostCreateToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton transform={addEmptyImage} label="Valider et éditer" redirect="edit" submitOnEnter={true} />
    <SaveButton
      transform={addEmptyImage}
      label="Valider et voir"
      redirect="show"
      submitOnEnter={false}
      variant="text"
    />
    <SaveButton
      transform={addEmptyImage}
      label="Valider et re-ajouter"
      redirect={false}
      submitOnEnter={false}
      variant="text"
    />
  </Toolbar>
);

const SanitizedBox = ({ fullWidth, basePath, ...props }) => <Box {...props} />;

const PostCreate = ({ permissions, ...props }) => {
  const initialValues = useMemo(() => ({}), []);

  return (
    <Create {...props}>
      <SimpleForm
        validate={(values) => {
          const errors = {};

          if (!values.types?.length) {
            errors.types = 'Veuillez preciser au moins un type.';
          }

          const lat = values.location?.coordinates[0];
          const lng = values.location?.coordinates[1];
          if (!isFinite(lat) || Math.abs(lat) > 90) {
            errors.location = {
              coordinates: ["La latitude n'est pas valide.", null],
            };
          }
          if (!isFinite(lng) || Math.abs(lng) > 180) {
            const msg = "La longitude n'est pas valide.";
            if (errors.location?.coordinates) {
              errors.location.coordinates[1] = msg;
            } else {
              errors.location = {
                coordinates: [null, msg],
              };
            }
          }

          return errors;
        }}
        toolbar={<PostCreateToolbar />}
        initialValues={initialValues}
      >
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
    </Create>
  );
};

export default PostCreate;
