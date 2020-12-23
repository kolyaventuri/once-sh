import * as React from 'react';

const Navigation = (): JSX.Element => (
  <div className="bg-black">
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-6">
      <div className="relative flex items-center justify-between h-12 md:h-16">
        {/* <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-400 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-grey-200" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="block h-6 w-6" xmlns="http://www.w3.org. 2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div> */}
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex-shrink-0 flex items-center font-bold text-gray-200 text-3xl md:text-4xl">
            <h1>once.sh</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Navigation;
