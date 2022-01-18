import * as React from 'react';
import { TopToolbar, Edit, CloneButton, ShowButton } from 'react-admin';
import Form, { transform } from './form';

const EditActions = ({ basePath, data, hasShow }) => (
  <TopToolbar>
    <CloneButton className="button-clone" basePath={basePath} record={data} />
    {hasShow && <ShowButton basePath={basePath} record={data} />}
  </TopToolbar>
);

const EtablishmentTitle = ({ record }) => {
  return <span>{record.title}</span>;
};

const EtablishmentEdit = ({ ...props }) => {
  return (
    <Edit transform={transform} title={<EtablishmentTitle />} actions={<EditActions />} {...props}>
      <Form warnWhenUnsavedChanges />
    </Edit>
  );
};

export default EtablishmentEdit;
