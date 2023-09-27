export default function OfferFooter() {
  return (
    <>
      <div className="bg-[#FFF3E6] sm:bg-transparent">
        <div className="relative max-w-[1600px] py-[27px] sm:py-0 my-[58px] px-[20px] sm:px-[15px] mx-auto lg:my-[16px]">
          <div className="flex justify-between items-center lg:flex-col sm:items-start p-[27px] sm:px-[15px] sm:pt-[30px] sm:pb-[56px] sm:bg-[#FFF3E6]">
            <div className="xl:max-w-[400px] max-w-[515px] text-center sm:text-left">
              <div className="md:text-[20px] sm:text-[16px] leading-[28px] text-[#344054] font-inter text-[24px]">
                Never miss an offer -  sign up for our promos plus enjoy
                <span className="font-[700]">
                  20% off
                </span>
                your first order
              </div>
            </div>
            <div className="ml-[20px] lg:ml-0 lg:mt-[20px]">
              <div className="flex items-center xl:flex-col xl:items-start">
                <div className="flex items-center xl:w-full">
                  <div className="xl:w-1/2">
                    <input type="text" placeholder="First name" className="xl:w-full w-[190px] rounded-[5px] outline-none p-[12px_18px] placeholder:text-[#838E9E]" />
                  </div>
                  <div className="ml-[12px]">
                    <input type="text" placeholder="Last name" className="xl:w-full w-[190px] rounded-[5px] outline-none p-[12px_18px] placeholder:text-[#838E9E]" />
                  </div>
                </div>
                <div className="ml-[12px] xl:ml-0 xl:mt-[12px] xl:w-full">
                  <input type="text" placeholder="Email Address" className="xl:w-full w-[190px] rounded-[5px] outline-none p-[12px_18px] placeholder:text-[#838E9E]" />
                </div>
                <div className="ml-[12px] xl:ml-0 xl:mt-[20px] self-center sm:w-full">
                  <button className="bg-[#136E2B] sm:w-full w-[138px] whitespace-pre text-white h-[48px] px-[20px] rounded-[5px]">
                    Sign up now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-5  right-12 font-inter text-[#838E9E] text-[12px]">
            Read our
            <span className="underline cursor-pointer">
              privacy policy
            </span>
          </div>
        </div>
      </div>
      <div className="mt-[24px]">
        <div className="border-b border-[#CDD2D8]">
          <div className="max-w-[1600px] mx-auto px-[20px] py-[24px] sm:px-[10px]">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="cursor-pointer whitespace-pre">
                  <img src="/assets/ukFlag.svg" className="inline mr-[8px]" />
                  <span className="text-[14px]">
                    United Kingdom
                  </span>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="text-[18px] ml-2 inline" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z">
                    </path>
                  </svg>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-[10px] sm:gap-[5px]">
                  <div className="w-[44px] h-[44px] sm:w-[24px] sm:h-[24px] grid place-items-center rounded-[5px] bg-[#1877F214]">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-[#1877fb] text-[20px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z">
                      </path>
                    </svg>
                  </div>
                  <div className="w-[44px] h-[44px] sm:w-[24px] sm:h-[24px] grid place-items-center rounded-[5px] bg-[#34E0A41A]">
                    <img src="/assets/tripadvisor-dark.svg" />
                  </div>
                  <div className="w-[44px] h-[44px] sm:w-[24px] sm:h-[24px] grid place-items-center rounded-[5px] bg-[#D600001A]">
                    <img src="/assets/yelp-org.svg" />
                  </div>
                  <div className="w-[44px] h-[44px] sm:w-[24px] sm:h-[24px] grid place-items-center rounded-[5px] bg-[#FBBC051A]">
                    <img src="/assets/google.svg" />
                  </div><div className="w-[44px] h-[44px] sm:w-[24px] sm:h-[24px] grid place-items-center rounded-[5px] bg-[#FBBC051A]">
                    <img src="/assets/yell-icon.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="max-w-[1600px] mx-auto px-[20px] py-[26px] sm:px-[15px]">
            <div className="flex justify-between md:flex-col flex-wrap gap-x-[10px] gap-y-[32px] md:gap-y-0">
              <div className="md:pb-[32px] md:border-b border-[#E6E8EC]">
                <div className="mb-[23px]">
                  <img src="/assets/dark-logo.svg" className="w-[165px] h-auto" />
                </div>
                <p className="max-w-[378px] mb-[23px] text-[#061C3D] font-open-sans">
                  Cusine's takes pride in the way that we can furnish our new and faithful clients with extraordinary tasting Indian-roused nourishment that is not normal for that some other Indian eateries you visit.
                </p>
                <div className="flex text-[#42526B]">
                  <p className="sm:text-[14px]">
                    Privacy Policy
                  </p>
                  <span className="mx-3">
                    •
                  </span>
                  <p className="sm:text-[14px]">
                    Terms &amp; Conditions</p><span className="mx-3">
                    •
                  </span>
                  <p className="sm:text-[14px]">
                    Sitemap
                  </p>
                </div>
              </div>
              <div className="md:py-[32px] md:border-b border-[#E6E8EC]">
                <h4 className="mb-[38px] font-[600]">
                  Quick Links
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3">
                  <div className="w-[122px] md:w-auto md:text-[14px] p-[8px]">
                    About Us
                  </div>
                  <div className="w-[122px] md:w-auto md:text-[14px] p-[8px]">
                    Contact Us
                  </div>
                  <div className="w-[122px] md:w-auto md:text-[14px] p-[8px]">
                    Our Menu
                  </div>
                  <div className="w-[122px] md:w-auto md:text-[14px] p-[8px]">
                    Order Now
                  </div>
                  <div className="w-[122px] md:w-auto md:text-[14px] p-[8px]">
                    Book a table
                  </div>
                  <div className="w-[122px] md:w-auto md:text-[14px] p-[8px]">
                    Offers
                  </div>
                </div>
              </div>
              <div className="w-[330px] md:w-full md:py-[32px] md:border-b border-[#E6E8EC]">
                <h4 className="font-[600]">
                  Download the app
                </h4>
                <div className="font-[300] text-[#344054]">
                  Get 20% off your first order
                </div>
                <div className="mt-[24px]">
                  <div className="flex items-center justify-between md:justify-start sm:justify-between">
                    <img src="/assets/QR.svg" className="w-[163px] sm:w-[136px] h-[163px] md:mr-[100px] sm:mr-0" />
                    <div>
                      <img src="/assets/googleplay.svg" className="w-[123px] mb-[14px] max-w-min" />
                      <img src="/assets/appstore.svg" className="w-[123px]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:pt-[32px] self-center">
                <div className="mb-[16px] md:text-center">
                  <img src="/assets/alert-circle.svg" className="mr-[8px] inline" />
                  <span className="text-[#136E2B] font-[600]">
                    Allergen info
                  </span>
                </div>
                <div className="md:text-center">
                  <img src="/assets/Food-hygeine.svg" className="mr-[8px] w-[24px] h-[24px] inline" />
                  <span className="text-[#136E2B] font-[600]">
                    Allergen info
                  </span>
                </div>
                <div className="mt-[24px] md:hidden">
                  <img src="/assets/img-hygeine.svg" className="min-w-[193px] h-full" />
                </div>
                <div className="mt-[24px] hidden md:block md:text-center">
                  <img src="/assets/image-hygeine-mob.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#E6E8EC] font-inter">
          <div className="max-w-[1600px] mx-auto py-[22px] px-[20px] sm:px-[15px]">
            <div className="flex justify-between items-center lg:flex-col">
              <div className="flex">
                <div>
                  <img src="/assets/Visa.svg" className="w-[48px]" />
                </div>
                <div className="ml-[17px]">
                  <img src="/assets/Mastercard.svg" className="w-[48px]" />
                </div>
                <div className="ml-[17px]">
                  <img src="/assets/PayPal.svg" className="w-[48px]" />
                </div>
                <div className="ml-[17px]">
                  <img src="/assets/GooglePay.svg" className="w-[48px]" />
                </div>
                <div className="ml-[17px]">
                  <img src="/assets/ApplePay.svg" className="w-[48px]" />
                </div>
                <div className="ml-[17px]">
                  <img src="/assets/Amex.svg" className="w-[48px]" />
                </div>
              </div>
              <div className="text-[#061C3D] font-[300] lg:my-[10px]">
                Copyright© 2023 Pimlico Tandoori
              </div>
              <div>Powered by
                <img src="/assets/gustoes.svg" className="inline ml-[12px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}