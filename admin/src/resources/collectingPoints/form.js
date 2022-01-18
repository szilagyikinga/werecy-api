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
  FileInput,
  FileField,
} from 'react-admin';
import { Box } from '@material-ui/core';
import articles from './articles';
import { getImageValue } from '../../utils';

const SanitizedBox = ({ fullWidth, basePath, ...props }) => <Box {...props} />;

const Form = ({ ...props }) => (
  <SimpleForm {...props}>
    <SanitizedBox display="flex" flexDirection="column" width="100%" justifyContent="space-between" fullWidth>
      <TextInput disabled source="id" />
      <TextInput label="Label" source="label" validate={required()} />
      <FileInput source="image" label="image" accept="image/*">
        <FileField source="src" title="image" target="_blank" />
      </FileInput>
      <SelectInput label="Article" source="article" choices={articles} />
      <TextInput label="Image" source="image" />
      <TextInput label="Success Label" source="successLabel" validate={required()} />
      <TextInput label="Récompense" source="reward" validate={required()} />
      <DateInput label="Date de début" source="startDate" options={{ locale: 'fr' }} />
      <DateInput label="Date de fin" source="endDate" options={{ locale: 'fr' }} />
      <TextInput label="Succès quand" source="successWhen" />
      <TextInput label="Message de partage" source="shareMessage" />
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
          <TextInput label="Entreprise" source="company" validate={required()} fullWidth />
          <TextInput label="Récompense" source="reward" validate={required()} fullWidth />
        </SimpleFormIterator>
      </ArrayInput>
    </SanitizedBox>
  </SimpleForm>
);

export const transform = async ({ image, ...data }) => ({
  ...data,
  image: await getImageValue(image),
});

export default Form;
