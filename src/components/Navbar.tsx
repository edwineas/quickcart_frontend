import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";



function Navbar() {
    return (
        <div className='h-[80px] px-[50px] sm:px-[100px] flex items-center justify-between text-[21px] shadow-[0px_15px_40px_-20px_#00000040]'>
            <img src="/logo.png" alt="logo" />
            <div className="flex gap-5 sm:gap-[100px]">
                <button className='navbtn'>
                    <IoSearch size={24}/>
                    <span className="mobhide">Search</span>
                </button>
                <button className="navbtn">
                    <FaRegUser size={22}/>
                    {/* <span className="mobhide">Profile</span> */}
                    <span className="mobhide">Login</span>
                </button>
            </div>
        </div>
    )
}

export default Navbar