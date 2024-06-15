import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="bg-green-800 text-white p-4 h-full rounded-r-lg shadow-lg">
  <nav>
    <ul>
      <li className="mb-2">
        <a href="#dashboard" className="hover:bg-green-700 hover:rounded-md text-lg p-2 block transition duration-150 ease-in-out">Dashboard</a>
      </li>
      <li className="mb-2">
        <Link to="/drivers" className="hover:bg-green-700 hover:rounded-md text-lg p-2 block transition duration-150 ease-in-out">Drivers</Link>
      </li>
      <li className="mb-2">
        <a href="#trucks" className="hover:bg-green-700 hover:rounded-md text-lg p-2 block transition duration-150 ease-in-out">Trucks</a>
      </li>
      <li className="mb-2">
        <a href="#trips" className="hover:bg-green-700 hover:rounded-md text-lg p-2 block transition duration-150 ease-in-out">Trips</a>
      </li>
      <li className="mb-2">
        <a href="#expenses" className="hover:bg-green-700 hover:rounded-md text-lg p-2 block transition duration-150 ease-in-out">Expenses</a>
      </li>
    </ul>
  </nav>
</aside>
  );
};

export default Sidebar;