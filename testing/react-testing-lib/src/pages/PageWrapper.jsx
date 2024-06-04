import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const PageWrapper = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default PageWrapper;
