import { MdOutlineNewLabel } from 'react-icons/md'
import { GrDocumentUpdate } from 'react-icons/gr';
import { MdDeleteForever } from 'react-icons/md';
import { BsFillSave2Fill } from 'react-icons/bs';
import { useState, useEffect } from 'react';


function Rs() {

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch("https://dummyjson.com/users")
            .then(response => response.json())
            .then((data) => {
                setData(data.message);
                console.log(data);
            });
    }, []);

    return (
        <>
            {/* {
                data.map(() => {

                })
            } */}



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

            <div>

                <div className='box-border lg:h-[350px] h-[700px]'>

                    <div className='grid grid-flow-row lg:grid-flow-col justify-center'>
                        <div className='flex lg:justify-normal justify-between'>
                            <div className='box-border h-[10%] w-32 p-4  flex lg:flex-col flex-col gap-2'>
                                <h1>Doc#:</h1>
                                <h1>Date:</h1>
                            </div>
                            <div className='box-border h-[10%] w-fit p-4 text-center flex lg:flex-col flex-col gap-2'>
                                <input type='text' />
                                <input type='text' />
                            </div>
                        </div>

                        <div className='flex lg:justify-normal justify-between'>
                            <div className='box-border h-[10%] w-32 p-4  flex lg:flex-col flex-col gap-2' >
                                <h1>Party:</h1>
                                <h1>Walking:</h1>
                            </div>
                            <div className='box-border h-[10%] w-fit p-4 text-center flex lg:flex-col flex-col gap-2'>
                                <input type='text' />
                                <input type='text' />
                            </div>
                        </div>
                    </div>


                    <div className='grid grid-flow-row lg:grid-flow-col justify-center'>
                        <div className='flex lg:justify-normal justify-between'>
                            <div className='box-border h-[10%] w-32 p-4  flex lg:flex-col flex-col gap-2'>
                                <h1>Passport No:</h1>
                                <h1>Passenger:</h1>
                            </div>
                            <div className='box-border h-[10%] w-fit p-4 text-center flex lg:flex-col flex-col gap-2'>
                                <input type='text' />
                                <input type='text' />
                            </div>
                        </div>
                        <div className='flex lg:justify-normal justify-between'>
                            <div className='box-border h-[10%] w-32 p-4  flex lg:flex-col flex-col gap-2' >
                                <h1>Nationality:</h1>
                                <h1>Address:</h1>
                            </div>
                            <div className='box-border h-[10%] w-fit p-4 text-center flex lg:flex-col flex-col gap-2'>
                                <input type='text' />
                                <input type='text' />
                            </div>
                        </div>

                    </div>


                    <div className='grid grid-flow-row lg:grid-flow-col justify-center'>
                        <div className='flex lg:justify-normal justify-between'>
                            <div className='box-border h-[10%] w-32 p-4  flex lg:flex-col flex-col gap-2'>
                                <h1>PlaceOfSupply:</h1>
                                <h1>Pan No:</h1>
                            </div>
                            <div className='box-border h-[10%] w-fit p-4 text-center flex lg:flex-col flex-col gap-2'>
                                <input type='text' />
                                <input type='text' />
                            </div>
                        </div>

                        <div className='flex lg:justify-normal justify-between'>
                            <div className='box-border h-[10%] w-32 p-4  flex lg:flex-col flex-col gap-2' >
                                <h1>Issued at:</h1>
                                <h1>Realtion:</h1>
                            </div>
                            <div className='box-border h-[10%] w-fit p-4 text-center flex lg:flex-col flex-col gap-2'>
                                <input type='text' placeholder='date' />
                                <input type='text' placeholder='self/other' />
                            </div>
                        </div>

                    </div>


                    <div className='grid grid-flow-row lg:grid-flow-col justify-center'>
                        <div className='flex lg:justify-normal justify-between'>
                            <div className='box-border h-[10%] w-32 p-4  flex lg:flex-col flex-col gap-2'>
                                <h1>Date:</h1>
                                <h1>Exp Date:</h1>
                            </div>
                            <div className='box-border h-[10%] w-fit p-4 text-center flex lg:flex-col flex-col gap-2'>
                                <input type='text' />
                                <input type='text' />
                            </div>
                        </div>

                        <div className='flex lg:justify-normal justify-between'>
                            <div className='box-border h-[10%] w-32 p-4  flex lg:flex-col flex-col gap-2' >
                                <h1>PreccedingTo:</h1>
                                <h1>Purpose:</h1>
                            </div>
                            <div className='box-border h-[10%] w-fit p-4 text-center flex lg:flex-col flex-col gap-2'>
                                <input type='text' />
                                <input type='text' placeholder='Tourism / business' />
                            </div>
                        </div>

                    </div>


                </div>

                <div className='box-border h-[400px]'>

                    <div className='grid grid-flow-row lg:grid-flow-col justify-center'>
                        <div className='flex lg:justify-normal justify-between'>
                            <div className='box-border h-[10%] w-32 p-4  flex lg:flex-col flex-col gap-2'>
                                <h1>Currency:</h1>
                                <h1>In form:</h1>
                            </div>
                            <div className='box-border h-[10%] w-fit p-4 text-center flex lg:flex-col flex-col gap-2'>
                                <input type='text' />
                                <input type='text' />
                            </div>
                        </div>

                        <div className='flex lg:justify-normal justify-between'>
                            <div className='box-border h-[10%] w-32 p-4  flex lg:flex-col flex-col gap-2' >
                                <h1>VTM Bank:</h1>
                                <h1>Card No:</h1>
                            </div>
                            <div className='box-border h-[10%] w-fit p-4 text-center flex lg:flex-col flex-col gap-2'>
                                <input type='text' />
                                <input type='text' />
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-flow-row lg:grid-flow-col justify-center'>
                        <div className='flex lg:justify-normal justify-between'>
                            <div className='box-border h-[10%] w-32 p-4  flex lg:flex-col flex-col gap-2'>
                                <h1>Quantity:</h1>
                                <h1>Rate:</h1>
                            </div>
                            <div className='box-border h-[10%] w-fit p-4 text-center flex lg:flex-col flex-col gap-2'>
                                <input type='text' />
                                <input type='text' />
                            </div>
                        </div>
                        <div className='flex lg:justify-normal justify-between'>
                            <div className='box-border h-[10%] w-32 p-4  flex lg:flex-col flex-col gap-2' >
                                <h1>Ammount:</h1>
                            </div>
                            <div className='box-border h-[10%] w-fit p-4 text-center flex lg:flex-col flex-col gap-2'>
                                <input type='text' />
                            </div>
                        </div>

                    </div>
                    <div className='my-5 flex justify-between'>
                        <button className='p-1 w-40 m-2 rounded bg-gradient-to-r from-purple-500 to-pink-500'>Insert</button>
                        <button className='p-1 w-40 m-2 rounded bg-gradient-to-r from-purple-500 to-pink-500'>Delete</button>
                        <button className='p-1 w-40 m-2 rounded bg-gradient-to-r from-purple-500 to-pink-500'>Reset</button>
                    </div>

                </div>

            </div>

            <div className='w-[100%] h-fit my-3 p-2 container mx-auto bg-slate-400 rounded '>
                <div className='flex md:flex-row flex-col justify-between'>

                    <div className='mt-3 text-center'>
                        <h4 className='bg-green-300 pl-3 pr-3 rounded'>Sno</h4>
                        <h5>{data}</h5>
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

        </>
    )
}
export default Rs;