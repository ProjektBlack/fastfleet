import { useEffect, useState } from "react";

import { PlusIcon, PencilIcon, TrashIcon } from "@heroicons/react/20/solid";

const ManageDrivers = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/drivers")
      .then((res) => res.json())
      .then((data) => {
        setDrivers(data.data);
      });
  }, []);

  return (
  <div>
    <div id="manage-drivers-menu-bar" className="bg-gray-100 p-3 shadow-md flex">
      <div>
        <h1 className="text-4xl font-bold text-green-800 leading-tight">Manage Drivers</h1>
      </div>
      <div className="ml-auto">
        <button className="bg-green-800 text-white p-3 rounded-full hover:scale-110 transition ease-in duration-200" title="Add new driver" >
          <PlusIcon className="w-6 h-6"/>
        </button>
      </div>
    </div>
    <div id="manage-drivers-table" className="relative h-[90vh] overflow-y-auto"> 
        <table className="table-auto w-full">
          <thead className="sticky top-0">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Operations</th>
            </tr>
          </thead>
          <tbody>
            {drivers.map((driver) => (
              <tr key={driver.DriverID}>
                <td className="border px-4 py-2">{driver.Name}</td>
                <td className="border px-4 py-2">{driver.Phone}</td>
                <td className="border px-4 py-2">
                  <button className="p-2 rounded-full hover:bg-green-700 hover:text-white">
                    <PencilIcon className="w-5 h-5"/>
                  </button>
                  <button className="p-2 rounded-full hover:bg-red-700 hover:text-white">
                    <TrashIcon className="w-5 h-5"/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  </div>
  
  );
};

export default ManageDrivers;