import React from "react";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <main className="antialiased h-screen w-screen">
        <div className="grid grid-cols-2 h-full">
          <div className="col-span-1 bg-red-200 h-full"></div>
          <div className="flex items-center justify-center h-full">{children}</div>
        </div>
      </main>
    </React.Fragment>
  );
}
