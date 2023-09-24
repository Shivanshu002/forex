import { MdOutlineNewLabel } from 'react-icons/md'
import { GrDocumentUpdate } from 'react-icons/gr';
import { MdDeleteForever } from 'react-icons/md';
import Home from './Home';



function Salesbook() {
    return (
        <>
            <div className='flex gap-10 justify-center bg-gradient-to-r from-purple-500 to-blue-500 p-3  '>
                <div className='hover hover:bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded duration-300'>
                    <MdOutlineNewLabel size={20} />
                    <span>Option</span>
                </div>
                <div className='hover hover:bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded duration-300'>
                    <GrDocumentUpdate size={20} />
                    <span>Date</span>
                </div>
                <div className='hover hover:bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded duration-300'>
                    <MdDeleteForever size={20} />
                    <span>Print</span>
                </div>

            </div>

            <h2 className='text-3xl font-bold text-black text-center'>Summery</h2>

            <div className='w-[100%] h-fit my-3 p-2 container mx-auto bg-slate-400 rounded '>

                <div className='flex md:flex-row flex-col justify-between p-2 md:items-start md:gap-0 gap-2'>

                    <div className='flex justify-between items-center gap-2'>
                        <label for="city" >Select Party</label>
                        <select className='w-[180px]'>
                            <option>XYZ</option>
                            <option>ABC</option>
                            <option>kjhg</option>
                            <option>fgh</option>
                        </select>                    </div>

                    <div className='flex justify-between items-center gap-2'>
                        <label>Pan No</label>
                        <input type='text' />
                    </div>

                    <div className='flex justify-between items-center gap-2'>
                        <lable>Risk Cate.</lable>
                        <select className='w-[180px]'>
                            <option>XYZ</option>
                            <option>ABC</option>
                            <option>kjhg</option>
                            <option>fgh</option>
                        </select>
                    </div>

                </div>
            </div>


            <div className='flex md:flex-row flex-col justify-between p-2 md:items-start md:gap-0 gap-2 container mx-auto'>
                <div className='flex  items-center gap-2'>
                    <button className='p-1 w-40 m-2 rounded bg-gradient-to-r from-purple-500 to-pink-500'>Print All</button>
                    <select className='w-[180px]'>
                        <option>Invoice</option>
                    </select>
                </div>

                <button className='p-1 w-40 m-2 rounded bg-gradient-to-r from-purple-500 to-pink-500'>Print all BTQ</button>


            </div>


        </>
    )
}
export default Salesbook;