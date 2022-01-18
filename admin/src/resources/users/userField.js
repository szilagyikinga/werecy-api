import { FunctionField } from 'react-admin';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useClasses = makeStyles({
  avatar: {
    display: 'inline-block',
    verticalAlign: 'middle',
    marginRight: '10px',
  },
});

export const UserCard = ({ id, picture, firstName, lastName }) => {
  const classes = useClasses();
  return (
    <>
      {picture && <Avatar className={classes.avatar} alt="" src={picture} />}
      {(lastName || '').toUpperCase()} {firstName}
    </>
  );
};

const UserField = (user) => {
  if (!user) return null;

  return <FunctionField render={(user) => <UserCard {...user} />} />;
};

export default UserField;
