import { MdMenuOpen } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import { Link } from "react-router-dom";

function Home() {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <nav className="bg-gradient-to-r from-purple-500 to-pink-500 fixed top-0 w-full shadow-md ">
                <div className="max-w-[1140px] mx-auto flex flex-row justify-between items-center py-[10px] ">
                    <div className="text-2xl font-bold font-serif">
                        <Link to={'/'}>ABC FOREX PVT.LTD </Link>
                    </div>
                    <ul className='hidden md:flex text-white'>
                        <li className='p-5'><Link to={'/party'}>Party</Link></li>
                        <li className='p-5'> <Link to={'rs'}> RS</Link></li>
                        <li className='p-5'> <Link to={'salesbook'}> Salesbook</Link></li>
                        <li className='p-5'> <Link to={'company'}> Company</Link></li>
                        <li className='p-5'> <Link to={'password'}> Password</Link></li>
                    </ul>
                </div>

                {
                    toggle ?
                        <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />
                        :
                        <MdMenuOpen onClick={() => setToggle(!toggle)} className=' text-white text-2xl md:hidden block' />
                }

                {/* Responsive menu */}

                <ul className={`duration-300 md:hidden p-2 gap-7 text-white fixed bg-black top-[97px]${toggle ? 'left-[0]' : 'left-[-100%]'}`}>
                    <li className='p-5'> <Link to={'/party'}>  Party</Link></li>
                    <li className='p-5'> <Link to={'/rs'}> RS</Link></li>
                    <li className='p-5'> <Link to={'/salesbook'}>  Salesbook</Link></li>
                    <li className='p-5'> <Link to={'/company'}>  Company</Link></li>
                    <li className='p-5'> <Link to={'/password'}> Password</Link></li>
                </ul>
            </nav>
        </>
    )
}
export default Home;