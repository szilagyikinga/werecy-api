import * as React from 'react';
import {
  ArrayField,
  Datagrid,
  DateField,
  FunctionField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
  useShowController,
} from 'react-admin';
import Chip from '@material-ui/core/Chip';

import articles from './articles';
import { imageToUrl } from '../../utils';

const CollectingPointShow = (props) => {
  const { record } = useShowController(props);

  return (
    <Show title={record && record.label} {...props}>
      <SimpleShowLayout>
        <TextField disabled source="id" />
        <TextField label="Label" source="label" />
        <FunctionField
          label="Article"
          render={({ article }) => <Chip label={articles.find(({ id }) => id === article).name} />}
        />
        {record?.image && (
          <a href={imageToUrl(record.image)} target="_blank">
            <img src={imageToUrl(record.image)} style={{ maxWidth: '100%' }} />
          </a>
        )}
        <TextField label="Success Label" source="successLabel" />
        <TextField label="Récompense" source="reward" />
        <DateField label="Date de début" source="startDate" options={{ locale: 'fr' }} />
        <DateField label="Date de fin" source="endDate" options={{ locale: 'fr' }} />
        <TextField label="Succès quand" source="successWhen" />
        <TextField label="Message de partage" source="shareMessage" />
        <ReferenceField label="Etablissement" source="establishment" reference="establishments">
          <FunctionField source="name" render={(record) => `${record?.name ?? '??'} (${record?.code ?? '??'})`} />
        </ReferenceField>
        <TextField label="Récompense" source="rewards.title" />
        <TextField label="Note" source="rewards.note" />
        <ArrayField label="Récompenses" source="rewards.items">
          <Datagrid>
            <TextField label="Entreprise" source="company" fullWidth />
            <TextField label="Récompense" source="reward" fullWidth />
          </Datagrid>
        </ArrayField>
      </SimpleShowLayout>
    </Show>
  );
};

export default CollectingPointShow;
