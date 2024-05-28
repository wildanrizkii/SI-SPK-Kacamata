import React from "react";

const Header = () => {
  return (
    <div>
      <header className="bg-transparent">
        <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <img className="h-16" src="/images/logospk.png" alt="logospk" />
              <p className="">SPK Kacamata</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
