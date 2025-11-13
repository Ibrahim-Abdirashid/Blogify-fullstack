import { Link } from "react-router"



const Header = () => {
  return (
    <header className="bg-white shadow">
        {/* div-ka guud ee isku haya */}
        <div className="max-w-7xl mx-auto  ">
            {/* div-ka right iyo left isku haya */}
            <div className="flex justify-between h-16 items-center">

                {/* left */}
                <div className="flex">
                    {/* logo */}
                    <div className="shrink-0 flex items-center">
                        <Link to="/" className="text-2xl font-bold text-orange-700">Blogify</Link>
                    </div>
                    {/* navigation */}
                </div>

                {/* right */}

            </div>
        </div>
    </header>
  )
}

export default Header