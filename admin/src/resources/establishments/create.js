import * as React from 'react';
import { useMemo } from 'react';
import { Create } from 'react-admin';
import Form from './form';

const PostCreate = ({ permissions, ...props }) => {
  const initialValues = useMemo(() => ({}), []);

  return (
    <Create {...props}>
      <Form
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
        initialValues={initialValues}
      />
    </Create>
  );
};

export default PostCreate;
