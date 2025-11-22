import { Link } from "react-router";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const avatarUrl =
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D";

  return (
    <header className="bg-white shadow">
      {/* div-ka guud ee isku haya */}
      <div className="max-w-7xl mx-auto  ">
        {/* div-ka right iyo left iyo humburger isku haya */}
        <div className="flex justify-between h-16 items-center px-4">
          {/* left */}
          <div className="flex items-center">
            {/* logo */}
            <div className="shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-orange-700">
                Blogify
              </Link>
            </div>

            {/* navigation */}

            <nav className="hidden sm:ml-6 md:flex md:space-x-8">
              <Link
                to="/"
                className="inline-flex border-orange-500 border-b-2 text-gray-900 font-medium text-sm px-1 py-1"
              >
                Home
              </Link>

              <Link
                to="/articles"
                className="inline-flex border-transparent border-b-2 text-gray-900 font-medium text-sm px-1 py-1"
              >
                Articles
              </Link>
            
            
              <Link
                to="/write"
                className="inline-flex border-transparent border-b-2 text-gray-900 font-medium text-sm px-1 py-1"
              >
                Write
              </Link>

              <Link
                to="/articles"
                className="inline-flex border-transparent border-b-2 text-gray-900 font-medium text-sm px-1 py-1"
              >
                Articles
              </Link>

              <Link
                to="/My articles"
                className="inline-flex border-transparent border-b-2 text-gray-900 font-medium text-sm px-1 py-1"
              >
                My Articles
              </Link>
            </nav>
          </div>

          {/* right */}
          <div className="flex items-center space-x-4">
            {/* profile */}
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <div>
                  <span>Hello, Ibrahim</span>
                </div>

                {/* user image/profile */}
                <div className="relative">
                  <button
                    className="h-8 w-8 rounded-full bg-gray-300 focus:ring-offset-amber-500 flex items-center justify-center focus:ring-2  focus:ring-offset-2 focus:outline-none border-none"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    {avatarUrl ? (
                      <img
                        src={avatarUrl}
                        alt="user profile"
                        className="h-8 w-8 rounded-full"
                      />
                    ) : (
                      <span className="text-gray-500">
                        <FaUser />
                      </span>
                    )}
                  </button>

                  {/* dropdown menu */}
                  {isDropdownOpen && (
                    <div
                      className="absolute flex flex-col  right-0 bg-gray-100 w-38 shadow-lg z-10 py-2.5 px-4 gap-2 rounded-md "
                      onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                      <div></div>
                      <Link className="text-sm font-medium hover:text-gray-800 text-gray-700 hover:bg-gray-300 px-2 py-1 rounded">
                        Your Profile
                      </Link>
                      <Link className="text-sm font-medium hover:text-gray-800 text-gray-700 hover:bg-gray-300 px-2 py-1 rounded">
                        Mange Article
                      </Link>
                      <Link className="text-sm font-medium hover:text-gray-800 text-gray-700  hover:bg-gray-300 px-2 py-1 rounded">
                        Sign Out
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/signin"
                  className="bg-orange-700 py-2 p-3 text-white rounded-md text-sm font-medium hover:bg-orange-800 border-transparent "
                >
                  Sign In
                </Link>

                <Link
                  to="/signup"
                  className="border-orange-700 border hidden sm:block py-2 p-3 text-orange-600 bg-white rounded-md text-sm font-medium hover:bg-orange-100 "
                >
                  Sign Up
                </Link>
              </div>
            )}

            {/* buttons signin | signUp */}
          </div>

          {/* Humburger menu */}
          <div className="-mr-2">
            <button onClick={() => setIsOpenMenu(!isOpenMenu)}
              className="flex items-center justify-center p-2 rounded text-gray-400 sm:hidden "
              >
              {isOpenMenu ? <CiMenuBurger className="text-2xl block h-6 w-6" /> : <IoMdClose  className="text-2xl block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu */}
          {isOpenMenu &&(
      <div className="sm:hidden p-4">
        <div className="flex flex-col ">
             <Link
                to="/"
                className="inline-flex border-orange-500 border-l-2 text-gray-900 font-medium text-base px-1 py-1"
              >
                Home
              </Link>

              <Link
                to="/articles"
                className="inline-flex border-transparent border-b-2 text-gray-900 font-medium text-base px-1 py-1"
              >
                Articles
              </Link>
        </div>

        {/* if user is logged in */}
             {isLoggedIn && (
             <>
               <Link
                to="/write"
                className="block border-transparent border-b-2 hover:bg-gray-50 text-gray-900 font-medium text-sm px-1 py-1"
              >
                Write
              </Link>

              <Link
                to="/articles"
                className="block border-transparent border-b-2 hover:bg-gray-50 text-gray-900 font-medium text-sm px-1 py-1"
              >
                Articles
              </Link>

              <Link
                to="/My articles"
                className="block border-transparent border-b-2 hover:bg-gray-50 text-gray-900 font-medium text-sm px-1 py-1"
              >
                My Articles
              </Link>
              <Link
                to="/signout "
                className="block border-transparent border-b-2 hover:bg-gray-50 text-gray-900 font-medium text-sm px-1 py-1"
              >
                Sign Out
              </Link>
             </>
             )}

             {/* if is not logged in */}
             {!isLoggedIn && (
              <div>
                <Link
                to="/signin"
                className="block border-transparent border-b-2 hover:bg-gray-50 text-gray-900 font-medium text-sm px-1 py-1"
              >
                Sign In
              </Link>
                <Link
                to="/signup "
                className="block border-transparent border-b-2 hover:bg-gray-50 text-gray-900 font-medium text-sm px-1 py-1"
              >
                Sign Up
              </Link>
                </div>
             )}

      </div>
          )}
    </header>
  );
};

export default Header;
