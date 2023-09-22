import { MdOutlineNewLabel } from 'react-icons/md'
import { GrDocumentUpdate } from 'react-icons/gr';
import { MdDeleteForever } from 'react-icons/md';
import { BsFillSave2Fill } from 'react-icons/bs';

function Party() {
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




            {/* Name and Address */}
            <div className='w-[100%] h-fit my-3 p-2 container mx-auto bg-slate-400 rounded  '>
                <div className='flex md:flex-row flex-col justify-between p-2 md:items-start md:gap-0 gap-2'>
                    <div className=' flex justify-between items-center gap-2'>
                        <label for='name'> Name:</label>
                        <input type='text' name='fullname' placeholder='Enter-name' />
                    </div>

                    <div className='flex justify-between items-center gap-2'>
                        <label for="Address">Address:</label>
                        <input className=''></input>
                    </div>

                    <div className='flex justify-between items-center gap-2'>
                        <label for="city" >City:</label>
                        <input type="text" />
                    </div>

                    <div className='flex justify-between items-center gap-2'>
                        <label>PinCode:</label>
                        <input type='mobile' />
                    </div>
                </div>






                <div className='flex md:flex-row flex-col justify-between p-2 md:items-start md:gap-0 gap-2'>

                    <div className='flex justify-between items-center gap-2'>
                        <label for="city" >State:</label>
                        <input type="text" />
                    </div>

                    <div className='flex justify-between items-center gap-2'>
                        <label>GSTIN:</label>
                        <input type='text' />
                    </div>

                    <div className='flex justify-between items-center gap-2'>
                        <lable>Licence No:</lable>
                        <input type='text' />
                    </div>


                    <div className='flex justify-between items-center gap-2'>
                        <label>Exp Date:</label>
                        <input type='date' />
                    </div>

                </div>



                <div className='flex md:flex-row flex-col justify-between p-2 md:items-start md:gap-0 gap-2'>


                    <div className='flex justify-between items-center gap-2'>
                        <lable> Type: </lable>
                        <input type='text'></input>
                    </div>

                    <div className='flex justify-between items-center gap-2'>
                        <lable>Pan No:</lable>
                        <input type='text' />
                    </div>


                    <div className='flex justify-between items-center gap-2'>
                        <lable>Phone:</lable>
                        <input type='Phone' />
                    </div>


                    <div className='flex justify-between items-center gap-2'>
                        <lable>Mobile:</lable>
                        <input type='phone' />
                    </div>

                </div>

            </div>





            <div className='w-[100%] h-fit my-3 p-2 container mx-auto bg-slate-400 rounded  '>
                <div className='flex md:flex-row flex-col justify-between p-2 md:items-start md:gap-0 gap-2'>

                    <div className=' flex justify-between items-center gap-2'>
                        <lable>Email:</lable>
                        <input type='phone' />
                    </div>


                    <div className=' flex justify-between items-center gap-2'>
                        <lable>Website:</lable>
                        <input type='email' />
                    </div>


                    <div className=' flex justify-between items-center gap-2'>
                        <lable>Openings(Rs):</lable>
                        <input type='text' />
                    </div>


                    <div className=' flex justify-between items-center gap-2'>

                        <select>
                            <option>Debit</option>
                            <option>Credit</option>
                        </select>
                        <input type='text' />
                    </div>



                </div>

            </div>


            <div className='flex justify-evenly space-x-[25%] container mx-auto '>
                <button className='border border-blue-500 pl-4 pr-4 text-xl font-bold rounded p-1 bg-gradient-to-r from-purple-500 to-pink-500' >Licence</button>
                <button className='border border-blue-500 pl-4 pr-4 text-xl font-bold rounded p-1 bg-gradient-to-r from-purple-500 to-pink-500'>KYC</button>
            </div>


        </>
    )

}
export default Party;