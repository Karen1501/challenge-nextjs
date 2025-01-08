import React from "react";

const Layout = ({ children }) => {
  return (
    <div
      className="min-h-screen bg-gray-200 flex items-center justify-center"
      style={{
        backgroundImage: `
        repeating-linear-gradient(
          -45deg,          
          #F2F0F0 25px,    
          #FFFFFF 35px     
        )`,

        backgroundColor: "#fff",
      }}
    >
      <div className="w-1/2 max-w-4xl p6- rounded-lg shadow-lg bg-white relative">
        <div className="p-4 pt-0">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
