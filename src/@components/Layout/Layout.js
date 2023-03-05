import React from "react";
import Navbar from "../Navbar/Navbar";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <div className="min-h-93p flex py-3">
        <div className="container mx-auto">
          <div className="grid grid-flow-col px-3 text-base lg:text-2xl">
            <div className="mt-5">{props.children}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Layout;
