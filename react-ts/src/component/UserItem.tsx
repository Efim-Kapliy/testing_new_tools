import { FC } from 'react';
import { IUser } from '../types/types';
import { Link } from 'react-router-dom';

interface UserItemProps {
  user: IUser;
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <li style={{ width: '600px', padding: 15, border: '1px solid gray' }}>
      <Link to={'/users/' + user.id} key={user.id} style={{ color: 'black' }}>
        {user.id}. {user.name} проживает в городе {user.address.city} на улицу {user.address.street}
      </Link>
    </li>
  );
};

export default UserItem;
