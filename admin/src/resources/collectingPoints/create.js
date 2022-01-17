import * as React from 'react';

import { useMemo } from 'react';
import { Create } from 'react-admin';
import Form from './form';

const CollectingPointCreate = ({ permissions, ...props }) => {
  const initialValues = useMemo(() => ({}), []);

  return (
    <Create {...props}>
      <Form initialValues={initialValues} />
    </Create>
  );
};

export default CollectingPointCreate;
