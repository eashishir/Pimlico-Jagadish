export default function HeaderPrime() {
  return (
    <div className="max-w-[1600px] mx-auto">
      <div className="flex justify-between p-[20px] items-center md:hidden">
        <div className="ml-[80px] 2lg:ml-0">
          <div className="flex justify-center items-center lg:flex-col lg:items-start">
            <div className="flex items-center gap-[8px]">
              <img src="/assets/map-pin-small.svg" className="w-[20px] h-[20px]" />
              <span className="text-white text-[18px]">
                38 Moreton Street, SW1V 2PB
              </span>
            </div>
            <div className="flex items-center gap-[8px] ml-[32px] lg:ml-0">
              <img src="/assets/phone-call.svg" className="w-[20px] h-[20px]" />
              <span className="text-white text-[18px]">
                0207 834 3375
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <div>
              <img src="/assets/Food-hygeine.svg" className="w-[34px] h-[34px] mr-[68px] 2lg:mr-[40px] cursor-pointer" />
            </div>
            <div className="flex items-center">
              <img src="/assets/fb.svg" className="w-[24px] h-[24px] mx-[8px] cursor-pointer" />
              <img src="/assets/tripadvisor.svg" className="w-[24px] h-[24px] mx-[8px] cursor-pointer" />
              <img src="/assets/yelp.svg" className="w-[24px] h-[24px] mx-[8px] cursor-pointer" />
              <img src="/assets/Google-alt.svg" className="w-[24px] h-[24px] mx-[8px] cursor-pointer" />
              <img src="/assets/yell-icon.svg" className="w-[24px] h-[24px] mx-[8px] cursor-pointer" />
            </div>
            <div className="flex items-center">
              <div className="ml-[40px] cursor-pointer">
                <img src="/assets/ukFlag.svg" className="inline" />
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="text-white text-[18px] ml-2 inline" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}