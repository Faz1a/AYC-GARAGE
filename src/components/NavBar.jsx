
import React, { useState } from "react";



function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-black shadow-lg shadow-aycolor">
        <div className="max-w-full px-3 sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-between h-24">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-24 p-2 px-10"
                  src={Logo}
                  alt="Logo"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-96 flex justify-end space-x-4 ">
                  <a
                    href="#"
                    className=" hover:bg-aycolor hover:text-black  hover:duration-700  text-white px-3 py-2 rounded-md text-base font-medium"
                  >
                    Početna
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 text-white hover:bg-aycolor hover:duration-700 hover:text-black px-3 py-2 rounded-md text-base font-medium"
                  >
                    Portofolio
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 text-white hover:bg-aycolor hover:duration-700 hover:text-black px-3 py-2 rounded-md text-base font-medium"
                  >
                    O nama
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 text-white hover:bg-aycolor hover:duration-700 hover:text-black px-3 py-2 rounded-md text-base font-medium"
                  >
                    Usluge
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 text-white hover:bg-aycolor hover:duration-700 hover:text-black px-3 py-2 rounded-md text-base font-medium"
                  >
                    Kontakt
                  </a>
                  <div className="w-32 flex space-x-3 p-3 pl-6">
                  <a href="https://www.facebook.com/amer.fazlibegovic" className=""><FaFacebook className="fill-aycolor" /></a>
                  <a href="https://www.instagram.com/ayc_garage/" className=""><FaInstagram className="fill-aycolor " /></a>
                  <a href="#" className=""><IoMdMail className="fill-aycolor" /></a>
                  
                  </div>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-aycolor inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
              
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className=" text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Početna
                </a>

                <a
                  href="#"
                  className="text-white hover:text-aycolor block px-3 py-2 rounded-md text-base font-medium"
                >
                  Portofolio
                </a>

                <a
                  href="#"
                  className="text-white hover:text-aycolor block px-3 py-2 rounded-md text-base font-medium"
                >
                  O nama
                </a>

                <a
                  href="#"
                  className="text-white hover:text-aycolor block px-3 py-2 rounded-md text-base font-medium"
                >
                  Usluge
                </a>

                <a
                  href="#"
                  className="text-white hover:text-aycolor block px-3 py-2 rounded-md text-base font-medium"
                >
                  Kontakt
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default NavBar;