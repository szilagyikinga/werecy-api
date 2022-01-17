import * as React from 'react';
import {
  DateInput,
  ReferenceInput,
  AutocompleteInput,
  SimpleForm,
  TextInput,
  required,
  SelectInput,
  ArrayInput,
  SimpleFormIterator,
} from 'react-admin';
import { Box } from '@material-ui/core';
import articles from './article';

const SanitizedBox = ({ fullWidth, basePath, ...props }) => <Box {...props} />;

const Form = ({ ...props }) => (
  <SimpleForm {...props}>
    <SanitizedBox display="flex" flexDirection="column" width="100%" justifyContent="space-between" fullWidth>
      <TextInput disabled source="id" />
      <TextInput label="Label" source="label" validate={required()} resettable />
      <SelectInput label="Article" source="article" choices={articles} />
      <TextInput label="Image" source="image" resettable />
      <TextInput label="Success Label" source="successLabel" validate={required()} resettable />
      <TextInput label="Récompense" source="reward" validate={required()} resettable />
      <DateInput label="Date de début" source="startDate" options={{ locale: 'fr' }} />
      <DateInput label="Date de fin" source="endDate" options={{ locale: 'fr' }} />
      <TextInput label="Succès quand" source="successWhen" resettable />
      <TextInput label="Message de partage" source="shareMessage" resettable />
      <ReferenceInput label="Etablissement" validate={required()} source="establishment" reference="establishments">
        <AutocompleteInput
          options={{ fullWidth: true }}
          optionText={(record) => `${record?.name ?? '??'} (${record?.code ?? '??'})`}
        />
      </ReferenceInput>
      <TextInput label="Récompense" source="rewards.title" validate={required()} />
      <TextInput label="Note" source="rewards.note" />
      <ArrayInput label="Éléments" source="rewards.items">
        <SimpleFormIterator>
          <TextInput label="Entreprise" source="company" resettable validate={required()} fullWidth />
          <TextInput label="Récompense" source="reward" resettable validate={required()} fullWidth />
        </SimpleFormIterator>
      </ArrayInput>
    </SanitizedBox>
  </SimpleForm>
);

export default Form;
