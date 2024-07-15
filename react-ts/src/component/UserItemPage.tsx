import { FC } from 'react';
import { IUser } from '../types/types';
import axios from 'axios';
import { useLoaderData, useNavigate } from 'react-router-dom';
import type { Params } from 'react-router-dom';

interface UserItemPageParams {
  params: Params<'userId'>;
}

export async function loader({ params }: UserItemPageParams) {
  const user = await getUser(params.userId);
  if (!user) {
    throw new Response('', {
      status: 404,
      statusText: 'Not Found',
    });
  }

  return user;
}

export async function getUser(userId: string | undefined) {
  try {
    const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + userId);
    return response.data;
  } catch (e) {
    // alert(e);
    throw e;
  }
}

const UserItemPage: FC = () => {
  // const [user, setUser] = useState<IUser | null>(null);
  const user = useLoaderData() as IUser | null;
  const navigate = useNavigate();

  const isBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <button onClick={isBack}>Back</button>
      <h1>Страница пользователя {user?.name}</h1>
      <div>{user?.email}</div>
      <div>
        {user?.address.city} {user?.address.street} {user?.address.zipcode}
      </div>
    </div>
  );
};

export default UserItemPage;
