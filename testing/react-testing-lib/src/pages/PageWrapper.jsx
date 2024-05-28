import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const PageWrapper = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default PageWrapper;
