import React from 'react';
import Sidebar from '../common/sidebar/Sidebar'; // Adjust the import path as necessary

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
      <div className="app-layout flex">
          <div className="w-60 h-screen"> {/* Adjust the width as needed */}
              <Sidebar />
          </div>
          <div className="flex-1">
              <main>{children}</main>
          </div>
      </div>
    );
  };

export default Layout;