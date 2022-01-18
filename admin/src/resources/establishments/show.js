import * as React from 'react';
import {
  BooleanField,
  FunctionField,
  ShowContextProvider,
  ShowView,
  Tab,
  TabbedShowLayout,
  TextField,
  useShowController,
} from 'react-admin';
import Chip from '@material-ui/core/Chip';

import types from './types';

const EtablishmentTitle = ({ record }) => {
  return <span>{record.title}</span>;
};

const EtablishmentShow = (props) => {
  const controllerProps = useShowController(props);
  return (
    <ShowContextProvider value={controllerProps}>
      <ShowView title={<EtablishmentTitle />}>
        <TabbedShowLayout>
          <Tab label="Informations">
            <TextField source="id" />
            <TextField label="Nom" source="name" />
            <TextField label="Code" source="code" />
            <BooleanField label="Prochainement ?" source="isUpComing" />
            <FunctionField
              label="Types"
              render={(record) => record.types.map((type) => <Chip label={types.find(({ id }) => id === type).name} />)}
            />
          </Tab>
          <Tab label="Adresse">
            <TextField label="Rue" source="address.street" />
            <TextField label="Code postal" source="address.zip" />
            <TextField label="Ville" source="address.city" />
            <TextField label="Longitude" source="location.coordinates[0]" />
            <TextField label="Latitude" source="location.coordinates[1]" />
          </Tab>
        </TabbedShowLayout>
      </ShowView>
    </ShowContextProvider>
  );
};

export default EtablishmentShow;
