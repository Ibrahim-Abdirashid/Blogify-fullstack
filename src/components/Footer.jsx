import { Link } from "react-router"
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";






const Footer = () => {
  return (
    // dive-kii guud ee backgroundka
    <div className="bg-white">
      {/* dive-kii xogtu ku jirtay oo isku haya nav-ka iyo social media*/}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
              {/* waa nav-kii */}

        <nav className="-mx-5 -my-2 flex  flex-wrap justify-center items-center">
          {/* home */}
          <div className="px-4 py-2">
            <Link to="/" className="text-base text-gray-500 hover:text-gray-800">
              Home
            </Link>
          </div>
          {/* Articles */}
          <div className="px-4 py-2">
            <Link to="/articles" className="text-base text-gray-500 hover:text-gray-800">
              Articles
            </Link>
          </div>
          {/* Tags */}
          <div className="px-4 py-2">
            <Link to="/tags" className="text-base text-gray-500 hover:text-gray-800">
              Tags
            </Link>
          </div>
          {/* home */}
          <div className="px-4 py-2">
            <Link to="/about" className="text-base text-gray-500 hover:text-gray-800">
              About Us
            </Link>
          </div>
          {/* home */}
          <div className="px-4 py-2">
            <Link to="/contact" className="text-base text-gray-500 hover:text-gray-800">
              Contact
            </Link>
          </div>
        </nav>

        {/* social media icons */}
        <div className="mt-8 flex justify-center items-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-gray-600">
          <span className="sr-only">Twitter</span>
          <FaXTwitter className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-600">
          <span className="sr-only">Twitter</span>
          <FaInstagram className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-600">
          <span className="sr-only">Twitter</span>
          <FaGithub className="h-6 w-6" />
          </a>


        </div>
        <p className="mt-8 text-center text-base text-gray-500">
          &copy; {new Date().getFullYear()} Blogify. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer