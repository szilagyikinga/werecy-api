import * as React from 'react';
import { TopToolbar, Edit, CloneButton, ShowButton } from 'react-admin';
import Form, { transform } from './form';

const EditActions = ({ basePath, data, hasShow }) => (
  <TopToolbar>{hasShow && <ShowButton basePath={basePath} record={data} />}</TopToolbar>
);

const CollectingPointTitle = ({ record }) => {
  return <span>{record.title}</span>;
};

const CollectingPointEdit = ({ ...props }) => {
  return (
    <Edit transform={transform} title={<CollectingPointTitle />} actions={<EditActions />} {...props}>
      <Form warnWhenUnsavedChanges />
    </Edit>
  );
};

export default CollectingPointEdit;
