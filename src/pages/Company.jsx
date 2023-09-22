import { MdOutlineNewLabel } from 'react-icons/md'
import { GrDocumentUpdate } from 'react-icons/gr';
import { MdDeleteForever } from 'react-icons/md';
import { BsFillSave2Fill } from 'react-icons/bs';   


function Company() {
    return (
        <>

            <div className='flex gap-10 justify-center bg-gradient-to-r from-purple-500 to-blue-500 p-3  '>
                <div className='hover hover:bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded duration-300'>
                    <MdOutlineNewLabel size={20} />
                    <span>New</span>
                </div>
                <div className='hover hover:bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded duration-300'>
                    <GrDocumentUpdate size={20} />
                    <span>Modify</span>
                </div>
                <div className='hover hover:bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded duration-300'>
                    <MdDeleteForever size={20} />
                    <span>Delete</span>
                </div>
                <div className='hover hover:bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded duration-300'>
                    <BsFillSave2Fill size={20} />
                    <span>Save</span>
                </div>
            </div>

            <h1 className="text-3xl font-bold text-black flex justify-center">General Information</h1>
            <div>
                <div className='w-[100%] h-fit my-3 p-2 container mx-auto bg-slate-400 rounded'>


                    <div className='flex md:flex-row flex-col justify-between p-2 md:items-start md:gap-0 gap-2'>
                        <div className='flex justify-between items-center gap-2'>
                            <label>Pan No.</label>
                            <input type='text' />
                        </div>

                        <div className='flex justify-between items-center gap-2'>
                            <label>TIN No.</label>
                            <input type='text' />
                        </div>


                        <div className='flex justify-between items-center gap-2'>
                            <label>GSTIN</label>
                            <input type='text' />
                        </div>


                        <div className='flex justify-between items-center gap-2'>
                            <label>Lic No.</label>
                            <input type='text' />
                        </div>

                    </div>


                    <div className='flex md:flex-row flex-col justify-between p-2 md:items-start md:gap-0 gap-2'>
                        <div className='flex justify-between items-center gap-2'>
                            <label>Serv* Tax</label>
                            <input type='text' />
                        </div>

                        <div className='flex justify-between items-center gap-2'>
                            <label>Phone</label>
                            <input type='text' />
                        </div>

                        <div className='flex justify-between items-center gap-2'>
                            <label>CIN No.</label>
                            <input type='text' />
                        </div>

                        <div className='flex justify-between items-center gap-2'>
                            <label>Email</label>
                            <input type='email' />
                        </div>
                    </div>


                    <div className='flex md:flex-row flex-col justify-between p-2 md:items-start md:gap-0 gap-2'>
                        <div className='flex justify-between items-center gap-2'>
                            <label>Website</label>
                            <input type='text' />
                        </div>

                        <div className='flex justify-between items-center gap-2'>
                            <label>State</label>
                            <select>
                                <option>Delhi</option>
                                <option>Noida</option>
                                <option>Kanpur</option>
                            </select>
                        </div>

                        <div className='flex justify-between items-center gap-2'>
                            <label>Message</label>
                            <input type='text' />
                        </div>

                        <div className='flex justify-between items-center gap-2'>
                            <label>Flash Time</label>
                            <input type='text' />
                        </div>
                    </div>
                </div>
            </div>

            <h1 className="text-3xl font-bold text-black flex justify-center">Others</h1>

            <div className='w-[100%] h-fit my-3 p-2 container mx-auto bg-slate-400 rounded'>
                <div className='flex md:flex-row flex-col justify-between p-2 md:items-start md:gap-0 gap-2'>
                    <div className='flex justify-between  items-center gap-2'>
                        <label>From</label>
                        <input type='date' />
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        <label>To</label>
                        <input type='date' />
                    </div>

                    <div className='flex   justify-between items-center gap-2'>
                        <label>Evolution Basis</label>
                        <input type='text' />
                    </div>
                </div>
            </div>


        </>
    )
}

export default Company;