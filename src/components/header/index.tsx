"use client";
import React from 'react';
import HeaderCoverImg from "./HeaderCoverImg";
import HeaderMenus from "./HeaderMenus";
import HeaderPrime from "./HeaderPrime";
import { isEqual } from 'lodash';
import { usePathname } from 'next/navigation';
import { menus } from '@/constants';

export default function Header() {

  const [currentMenu, setCurrentMenu] = React.useState(menus.offer);
  const pathname = usePathname();

  React.useEffect(() => {
    if (isEqual(pathname, '/')) {
      setCurrentMenu(menus.offer);
    } else {
      setCurrentMenu(menus.gallery);
    }
  }, [pathname])

  return (
    <header className="h-[600px] md:h-auto relative">
      <HeaderCoverImg coverImg={currentMenu.coverImg} />
      <div className="z-[111] h-full relative bg-black bg-opacity-[0.4]">
        <HeaderPrime />
        <div className="bg-[#11202da6]">
          <div className="max-w-[1600px] mx-auto">
            <div className="p-[20px] flex justify-between items-center sm:p-[15px]">
              <div className="hidden md:block">
                <img src="/assets/user.svg" className="w-[28px] h-[28px]" />
              </div>
              <div>
                <img src="/assets/Logo.svg" className="w-[165px] h-auto" />
              </div>
              <HeaderMenus activeId={currentMenu.id} />
              <div className="hidden md:block">
                <img src="/assets/hamburger icon.svg" className="w-[44px] h-[44px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[calc(100%-157px)] grid place-items-center md:hidden">
          <div className="text-white text-[96px] sm:text-[40px] font-bebas">
            {currentMenu?.coverLable}
          </div>
        </div>
        <div className="relative hidden md:block">
          <img src="/assets/header-bg.png" />
          <div className=" absolute text-[40px] inset-0 grid place-items-center text-white sm:text-[40px]">
            {currentMenu?.coverLable}
          </div>
        </div>
      </div>
    </header>
  )
}