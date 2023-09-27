"use client";
import React from 'react'
import isEqual from 'lodash/isEqual';
import Link from 'next/link';
import { menus } from '@/constants';

export default function HeaderMenus({ activeId }: { activeId: string }) {
  return (
    <div className="h-full md:hidden">
      <div className="flex items-center justify-center font-open-sans">
        {Object.entries(menus).map(([menu, info]) => (
          <div key={menu}>
            <Link className={"mx-[18px] relative nav-link text-white hover:text-[#D60000] 2lg:mx-[12px]" + (isEqual(activeId, info.id) ? '  active-link ' : '')} href={info.href}>
              {info.label}
            </Link>
          </div>
        ))}
        <div className="ml-[36px] 2lg:ml-[18px] flex 2lg:flex-col">
          <button className="bg-[#344054] rounded-[5px] text-white py-[8px] px-[20px] 2lg:px-[10px] 2lg:text-[14px]">
            Book a Table
          </button>
          <button className="bg-[#D60000] ml-[12px] 2lg:ml-0 2lg:mt-[12px] rounded-[5px] text-white py-[8px] px-[20px] 2lg:px-[10px] 2lg:text-[14px]">
            Order Now
          </button>
        </div>
      </div>
    </div>
  )
}