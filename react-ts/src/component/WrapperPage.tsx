import { FC, PropsWithChildren } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const WrapperPage: FC<PropsWithChildren> = () => {
  return (
    <div>
      <NavLink to='/users'>Пользователи</NavLink>
      <NavLink to='/todos'>Список дел</NavLink>
      <Outlet />
    </div>
  );
};

export default WrapperPage;
