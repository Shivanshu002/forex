import { MdOutlineNewLabel } from 'react-icons/md'
import { GrDocumentUpdate } from 'react-icons/gr';
import { MdDeleteForever } from 'react-icons/md';
import { BsFillSave2Fill } from 'react-icons/bs';


function Rs() {
    return (

        <div>
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


            {/* for risk cat */}
            <div>
                <div>

                    <div className='w-[100%] h-fit my-3 p-2 container mx-auto bg-slate-400 rounded  '>
                        <div className='flex md:flex-row flex-col justify-between p-2 md:items-start md:gap-0 gap-2'>
                            <div className='flex justify-between items-center gap-2'>
                                <lable>Risk Catg.</lable>

                                <input type='text' />

                            </div>


                            <div className='flex justify-between items-center gap-2'>
                                <label>Currency</label>
                                <input type='text' />

                            </div>
                            <div className='flex justify-between items-center gap-2'>
                                <label>In form</label>
                                <input type='text' />

                            </div>
                            <div className='flex justify-between items-center gap-2'>
                                <label>VTM Bank</label>
                                <input type='text' />

                            </div>
                        </div>
                    </div>

                    <div className='w-[100%] h-fit my-3 p-2 container mx-auto bg-slate-400 rounded'>
                        <div className='flex md:flex-row flex-col justify-between p-2 md:items-start md:gap-0 gap-2'>
                            <div className='flex justify-between items-center gap-2'>
                                <label>Card No.</label>
                                <input type='text' />
                            </div>

                            <div className='flex justify-between items-center gap-2'>
                                <label>Quantity</label>
                                <input type='text' />
                            </div>

                            <div className='flex justify-between items-center gap-2'>
                                <label>Rates</label>
                                <input type='text' />
                            </div>
                            <div className='flex justify-between items-center gap-2'>
                                <label>Ammount</label>
                                <input type='text' />
                            </div>

                        </div>
                    </div>


                </div>

                <div className='my-5 flex justify-evenly'>
                    <button className='p-1 w-40 m-2 rounded bg-gradient-to-r from-purple-500 to-pink-500'>Insert</button>
                    <button className='p-1 w-40 m-2 rounded bg-gradient-to-r from-purple-500 to-pink-500'>Delete</button>
                    <button className='p-1 w-40 m-2 rounded bg-gradient-to-r from-purple-500 to-pink-500'>Reset</button>
                </div>

            </div>



            <div className='w-[100%] h-fit my-3 p-2 container mx-auto bg-slate-400 rounded '>
                <div className='flex md:flex-row flex-col justify-between p-2 md:items-start md:gap-0 gap-2'>
                    <div className='flex justify-between items-center gap-2'>
                        <label>Doc#</label>
                        <input type='text' />
                    </div>

                    <div className='flex justify-between items-center gap-2'>
                        <label>Date</label>
                        <input type='date' />
                    </div>

                    <div className='flex justify-between items-center gap-2'>
                        <label>Party</label>
                        <input type='text' />
                    </div>

                    <div className='flex justify-between items-center gap-2'>
                        <label>Walking</label>
                        <input type='text' />
                    </div>

                </div>
            </div>

            <div className='w-[100%] h-fit my-3 p-2 container mx-auto bg-slate-400 rounded '>
                <div className='flex md:flex-row flex-col justify-between p-2 md:items-start md:gap-0 gap-2'>

                    <div className='flex justify-between items-center gap-2'>
                        <label>Passprt No.</label>
                        <input type='text' />
                    </div>

                    <div className='flex justify-between items-center gap-2'>
                        <lable>Passenger</lable>
                        <input type='text' />
                    </div>

                    <div className='flex justify-between items-center gap-2'>
                        <lable>Nationality</lable>
                        <input type='text' />
                    </div>

                    <div className='flex justify-between items-center gap-2'>
                        <label>Address</label>
                        <input type='text' />
                    </div>

                </div>

                <div className='flex md:flex-row flex-col justify-between p-2 md:items-start md:gap-0 gap-2'>
                    <div className='flex justify-between items-center gap-2'>
                        <label>Place of Supply</label>
                        <input type='text' />
                    </div>

                    <div className='flex justify-between items-center gap-2'>
                        <label>PAN</label>
                        <input type='text' />
                    </div>

                    <div className='flex justify-between items-center gap-2'>
                        <label>Relation</label>
                        <input type='text' />
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        <label>Issued</label>
                        <input type='text' />
                    </div>
                </div>

                <div className='flex md:flex-row flex-col justify-between p-2 md:items-start md:gap-0 gap-2'>
                    <div className='flex justify-between items-center gap-2'>
                        <label>Exp Date:</label>
                        <input type='date' />
                    </div>

                    <div className='flex justify-between items-center gap-2'>
                        <label>Precedding to:</label>
                        <input type='text' />
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        <label>Perpose</label>
                        <input type='text' />
                    </div>
                </div>

            </div>

            <div className='w-[100%] h-fit my-3 p-2 container mx-auto bg-slate-400 rounded '>
                <div className='flex md:flex-row flex-col justify-between'>

                    <div className='mt-3 text-center'>
                        <h4 className='bg-green-300 pl-3 pr-3 rounded'>Sno</h4>
                        <h5>0</h5>
                    </div>
                    <div className='mt-3 text-center'>
                        <h4 className='bg-green-300 pl-3 pr-3 rounded'>Currency</h4>
                        <h5>0</h5>
                    </div>
                    <div className='mt-3 text-center'>
                        <h4 className='bg-green-300 pl-3 pr-3 rounded'>In Form</h4>
                        <h5>0</h5>
                    </div>
                    <div className='mt-3 text-center'>
                        <h4 className='bg-green-300 pl-3 pr-3 rounded'>Quantity</h4>
                        <h5>0</h5>
                    </div>
                    <div className='mt-3 text-center'>
                        <h4 className='bg-green-300 pl-3 pr-3 rounded'>Rate</h4>
                        <h5>0</h5>
                    </div>
                    <div className='mt-3 text-center'>
                        <h4 className='bg-green-300 pl-3 pr-3 rounded'>Ammount</h4>
                        <h5>0</h5>
                    </div>
                </div>
            </div>




            <div className='w-[100%] h-fit p-2 my-3 container mx-auto bg-slate-400 rounded'>
                <div>

                    <div className='flex md:flex-row flex-col justify-between p-2 md:items-start md:gap-0 gap-2' >

                        <div className=' flex justify-between items-center gap-2 '>
                            <lable>Total:</lable>
                            <input type='text' className='rounded ' />
                        </div>

                        <div className='flex justify-between items-center gap-2'>
                            <lable>Services Charge</lable>
                            <input type='text' className='rounded' />
                        </div>

                        <div className='flex justify-between items-center  gap-2'>
                            <lable>Taxable Value</lable>
                            <input type='text' className='rounded' />
                        </div>

                        <div className='flex justify-between items-center gap-2 '>
                            <lable>GST</lable>
                            <input type='text' className='rounded' />
                        </div>
                    </div>


                    <div className='flex md:flex-row flex-col justify-between p-2 md:items-start md:gap-0 gap-2'>

                        <div className='flex justify-between items-center gap-2 '>
                            <lable>CGST:</lable>
                            <input type='text' className='rounded' />
                        </div>

                        <div className=' flex justify-between items-center gap-2'>
                            <lable>SGST:</lable>
                            <input type='text' className='rounded' />
                        </div>

                        <div className='flex justify-between items-center gap-2'>
                            <lable>IGST:</lable>
                            <input type='text' className='rounded' />
                        </div>

                        <div className=' flex justify-between items-center gap-2'>
                            <lable>TCS:</lable>
                            <input type='text' className='rounded' />
                        </div>

                    </div>

                    <div className='flex md:flex-row flex-col justify-between p-2 md:items-start md:gap-0 gap-2'>

                        <div className='flex justify-between items-center gap-2'>
                            <lable>Grand Total:</lable>
                            <input type="text" className='rounded' />
                        </div>
                    </div>
                    {/* Payment button */}

                    <div className='my-2 flex justify-center'>
                        <button className='p-1 w-40 m-2 rounded bg-gradient-to-r from-purple-500 to-pink-500'>Payment</button>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default Rs;