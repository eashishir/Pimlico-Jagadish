'use client'
import { images } from "@/mock/gallery_mock";

export default function Page() {
  return (
    <main>
      <div className="max-w-[1600px] my-[58px] mx-auto px-[15px] lg:my-[30px]">
        <div className="flex sm:flex-col gap-x-[24px] lg:gap-x-[16px]">
          {images.slice(0, 2).map((item, index) => (
            <div className={"h-[580px] xl:h-[400px] 2xl:h-[460px] md:w-full md:h-[200px]" + (index === 0 ? ' w-5/8 ' : ' w-3/8 sm:pt-[15px] ')} key={`${item}_${index}`}>
              <img src={item} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[24px] mt-[24px] lg:gap-[16px] lg:mt-[16px]">
          {images.slice(2).map((item, index) => (
            <div className="h-[580px] xl:h-[400px] 2xl:h-[460px] lg:h-[350px] md:h-[200px] " key={`${item}_${index}`}>
              <img src={item} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
