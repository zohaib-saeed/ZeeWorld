import React, { useId } from "react";
import Link from "next/link";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { XMarkIcon } from "@heroicons/react/24/outline";

const NavDrawer = ({ isOpen, toggleDrawer }) => {
  // Nav Links Data
  const navItems = [
    { title: "Evenementen", url: "/" },
    { title: "Ontdekken", url: "/" },
    { title: "Nieuws", url: "/" },
  ];
  return (
    <Drawer
      instanceId={useId()}
      open={isOpen}
      onClose={toggleDrawer}
      direction="left"
      className="!w-[100%] md:!w-[50%] "
    >
      <div className="w-full flex flex-col items-center justify-start gap-24 p-5  md:p-8">
        {/* Close Button  */}
        <div className="w-full flex items-center justify-end ">
          <XMarkIcon
            className="w-[32px] h-[32px] text-black-ebony"
            onClick={toggleDrawer}
          />
        </div>
        {/* Nav items */}
        <div className="w-full flex flex-col items-center justify-start gap-20">
          <div className="flex flex-col items-center justify-start gap-5 ">
            {navItems.map((item, index) => (
              <Link key={index} href={item.url}>
                <div className="font-bold text-black-ebony text-base cursor-pointer relative nav-item ">
                  {item.title}
                </div>
              </Link>
            ))}
          </div>
          {/* Button => Download app  */}
          <Link href={`/`}>
            <button
              className={`transition-all flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold  text-white cursor-pointer bg-azure hover:text-white`}
            >
              Download App
            </button>
          </Link>
        </div>
      </div>
    </Drawer>
  );
};

export default NavDrawer;
