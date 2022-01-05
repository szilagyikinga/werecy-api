import React from 'react';

// import { Children, Fragment, cloneElement, memo } from 'react';
// import BookIcon from '@material-ui/icons/Book';
// import { Chip, useMediaQuery } from '@material-ui/core';
// import { makeStyles, Theme } from '@material-ui/core/styles';
// import lodashGet from 'lodash/get';
import { Datagrid, DateField, List, SearchInput, TextField, FunctionField } from 'react-admin';

const renderAdressInList = ({ address: { street, zip, city }, ...props }) => (
  <>
    {street}
    <br />
    {zip} {city}
  </>
);

const postFilter = [
  <SearchInput source="q" alwaysOn />,
  // <QuickFilter label="resources.posts.fields.commentable" source="commentable" defaultValue />,
];

const PostPanel = ({ id, record, resource }) => <pre>{JSON.stringify(record)}</pre>;
const EtablishmentList = (props) => {
  return (
    <List
      {...props}
      // bulkActionButtons={<PostListBulkActions />}
      filters={postFilter}
      sort={{ field: 'created_at', order: 'DESC' }}
    >
      <Datagrid expand={PostPanel} optimized>
        {/* <TextField source="id" /> */}
        <TextField source="name" label="Nom" />
        <DateField source="created_at" sortByOrder="DESC" label="Créé le" />
        <FunctionField label="Adresse" render={renderAdressInList} />
        {/* <BooleanField source="commentable" label="resources.posts.fields.commentable_short" sortable={false} /> */}
        {/* <NumberField source="views" sortByOrder="DESC" /> */}
        {/* <ReferenceArrayField
          label="Tags"
          reference="tags"
          source="tags"
          sortBy="tags.name"
          sort={tagSort}
          headerClassName={classes.hiddenOnSmallScreens}
        >
          <SingleFieldList>
            <ChipField source="name.en" size="small" />
          </SingleFieldList>
        </ReferenceArrayField> */}
        {/* <PostListActionToolbar>
          <EditButton />
          <ShowButton />
        </PostListActionToolbar> */}
      </Datagrid>
    </List>
  );
};

export default EtablishmentList;
