import React, { useState } from "react";
import { siteTitle } from "./Layout";
import Link from "next/link";
import { useRouter } from "next/router";


function Nav({ layout, props }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/Search/?query=${query}`);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div className="bg-gray-700 text-white">
      <nav className="bg-gray-800 text-base font-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between md:grid grid-cols-1 h-16">
            <div className="flex items-center justify-between">
              <div className="flex-shrink-0">
                <Link href="/">{siteTitle}</Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="#">
                    <a className="hover:bg-gray-700 text-white px-3 py-2">
                      Tv Series
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="hover:bg-gray-700 text-white px-3 py-2">
                      Genres
                    </a>
                  </Link>

                  {/* use TERNARY OPERATOR to switch form display*/}
                  {router.pathname != "/Search" &&
                  router.pathname != "/search" ? (
                    <form
                      id="form"
                      className="items-center justify-center p-2"
                      onSubmit={handleSubmit}
                    >
                      <input
                        type="text"
                        placeholder="Search"
                        className="p-1 text-black rounded-sm"
                        name="query"
                        value={query}
                        onChange={handleChange}
                      />
                    </form>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
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
        {isOpen ? (
          <div
            className="md:hidden transition duration-1000 ease-in-out text-center"
            id="mobile-menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
              <Link href="#">
                <a className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">
                  Tv Series
                </a>
              </Link>
              <Link href="#">
                <a className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">
                  Genres
                </a>
              </Link>
              {router.pathname != '/Search' ? (
              <form
                id="form"
                className="items-center justify-center p-2"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  placeholder="Search"
                  className="p-1 text-black rounded-sm"
                  name="query"
                  value={query}
                  onChange={handleChange}
                />
              </form>) : (
                <></>
              )}
            </div>
          </div>
        ) : (
          <></>
        )}
      </nav>
    </div>
  );
}

export default Nav;
