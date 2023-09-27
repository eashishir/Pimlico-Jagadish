'use client'
import { offerMocks } from '@/mock/offers_mock';
import React from 'react';

export default function Page() {
  const [currentSelection, setCurrentSelection] = React.useState(offerMocks[0]);
  return (
    <main>
      <div className="grid grid-cols-3 gap-4 mt-7 ml-7">
        <div className='col-span-1'>
          <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700 max-h-[600px] overflow-auto">
            {offerMocks.map(item => (
              <li className="grid pb-3 sm:pb-4 justify-center" key={item.uid} onClick={() => setCurrentSelection(item)}>
                <div className='relative max-w-[350px] '>
                  <a href="#!">
                    <img src={item.image} />
                    <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className='grid col-span-2 justify-center justify-items-center'>
          <div>
            <img src={currentSelection.image} key={currentSelection.uid} className='w-[400px] max-h-min	 object-cover overflow-hidden	' />
            <div className='font-bold text-2xl leading-8 mt-7 text-center'>
              {currentSelection.title}
            </div>
            <div className='mt-3 text-center'>
              <div className='inline-flex gap-2 rounded-full border-2 p-2 px-4'>
                {currentSelection.isCollectionTakeout &&
                  <div className='inline-flex gap-1 items-center'>
                    <img src='/assets/shopping-bag.png' className='w-5 h-5' />
                    <span className='text-xs' >
                      Collection-Takeout
                    </span>
                  </div>
                }
                {currentSelection.isDelivery &&
                  <div className='inline-flex gap-1 items-center'>
                    <img src='/assets/delivery-icon-bike.png' className='w-5 h-5' />
                    <span className='text-xs' >
                      Delivery
                    </span>
                  </div>
                }
                {currentSelection.isDineInPreorder &&
                  <div className='inline-flex gap-1 items-center'>
                    <img src='/assets/table-order-icon.png' className='w-5 h-5' />
                    <span className='text-xs' >
                      Dine-in pre order
                    </span>
                  </div>
                }
              </div>
            </div>
            <div className='text-center text-xl font-semibold mt-5'>
              What you get:
            </div>
            <div className='text-center mt-2'>
              20% Discount to cart value
            </div>
            <div className='text-center text-xl font-semibold mt-5'>
              Conditions:
            </div>
            <div className='text-center mt-2'>
              Subtototal greater than or equal to £20.00
              <br />
              items: Food Only, excludes drinks
              <br />
              Order type: New Customer
              <br />
              <br />
              Promo code required at checkout
            </div>
            <div className='text-center mt-2'>
              <div className='inline-flex gap-3'>
                {currentSelection.getCodeButton &&
                  <button type="button" className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"> Get Code </button>
                }
                {currentSelection.orderNowButton &&
                  <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"> Order Now </button>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </main >
  )
}
