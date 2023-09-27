'use client';
import React from 'react';

export default function HeaderCoverImg({ coverImg }: { coverImg?: string }) {
  return (
    <div className="h-full absolute top-0 left-0 right-0 bottom-0 z-0 md:hidden">
      <img src={coverImg} className="h-full w-full object-cover" />
    </div>
  )
}