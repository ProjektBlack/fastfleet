import { useEffect, useState } from "react";

import { PlusIcon, PencilIcon, TrashIcon } from "@heroicons/react/20/solid";
import { Oval } from "react-loader-spinner";

const ManageDrivers = () => {
  const [loading, setLoading] = useState(false);
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    getTableData();
  }, []);

  const getTableData = () => {
    setLoading(true);
    fetch("http://localhost:3000/drivers")
      .then((res) => res.json())
      .then((data) => {
        setDrivers(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setDrivers([]);
        setLoading(false);
      });
  }

  return (
  <div>
    <div id="manage-drivers-menu-bar" className="bg-white-100 p-3 shadow-md flex">
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
        {loading? (
          <div id="loadingOval" className="flex justify-center items-center h-full">
            <Oval visible={true} height="80" width="80" color="#005c29" 
            ariaLabel="oval-loading" wrapperStyle={{}} wrapperClass=""/>
          </div>
          ) : <table className="table-auto">
          <thead className="sticky top-0">
            <tr>
              <th className="px-4 py-2 w-[50vw]">Name</th>
              <th className="px-4 py-2 w-[40vw]">Phone</th>
              <th className="px-4 py-2 w-[10vw]">Operations</th>
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
        </table> }
      </div>
  </div>
  
  );
};

export default ManageDrivers;