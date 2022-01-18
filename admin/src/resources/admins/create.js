import * as React from 'react';
import { useMemo } from 'react';
import { Create } from 'react-admin';
import Form, { transform } from './form';

const AdminCreate = ({ permissions, ...props }) => {
  const initialValues = useMemo(() => ({}), []);

  return (
    <Create {...props} transform={transform}>
      <Form initialValues={initialValues} />
    </Create>
  );
};

export default AdminCreate;
