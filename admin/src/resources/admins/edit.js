import * as React from 'react';
import { TopToolbar, Edit, CloneButton, ShowButton } from 'react-admin';
import Form, { transform } from './form';

const EditActions = ({ basePath, data, hasShow }) => (
  <TopToolbar>
    <CloneButton className="button-clone" basePath={basePath} record={data} />
    {hasShow && <ShowButton basePath={basePath} record={data} />}
  </TopToolbar>
);

const AdminTitle = ({ record }) => {
  return <span>{record.title}</span>;
};

const AdminEdit = ({ ...props }) => {
  return (
    <Edit transform={transform} title={<AdminTitle />} actions={<EditActions />} {...props}>
      <Form warnWhenUnsavedChanges />
    </Edit>
  );
};

export default AdminEdit;
