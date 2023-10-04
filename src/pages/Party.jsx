import { MdOutlineNewLabel } from 'react-icons/md'
import { MdDeleteForever } from 'react-icons/md';
import { BsFillSave2Fill } from 'react-icons/bs';
import { VscDiffModified } from 'react-icons/vsc';

function Party() {
    return (
        <div >

            <div className='lg:flex fixed flex-col top-[25%] left-0 gap-4 bg-gradient-to-r from-purple-500 to-blue-500 p-3  w-fit rounded-lg '>
                <div className='hover hover:bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded duration-300 text-white'>
                    <MdOutlineNewLabel size={20} />
                    <span>New</span>
                </div>
                <div className='hover hover:bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded duration-300 text-white'>
                    <VscDiffModified size={20} className='' />
                    <span>Modify</span>
                </div>
                <div className='hover hover:bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded duration-300 text-white'>
                    <MdDeleteForever size={20} />
                    <span>Delete</span>
                </div>
                <div className='hover hover:bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded duration-300 text-white'>
                    <BsFillSave2Fill size={20} />
                    <span>Save</span>
                </div>
            </div>


            {/* Updated */}
            <div className='my-[200px]'>
                <div className='grid grid-flow-row lg:grid-flow-col justify-center'>
                    <div className='flex lg:justify-normal justify-between'>
                        <div className='box-border h-[10%] w-32 p-4  flex lg:flex-col flex-col gap-2'>
                            <h1>Name:</h1>
                            <h1>City:</h1>
                        </div>
                        <div className='box-border h-[10%] w-fit p-4 text-center flex lg:flex-col flex-col gap-2'>
                            <input type='text' />
                            <input type='text' />
                        </div>
                    </div>

                    <div className='flex lg:justify-normal justify-between'>
                        <div className='box-border h-[10%] w-32 p-4  flex lg:flex-col flex-col gap-2' >
                            <h1>Address:</h1>
                            <h1>PinCode:</h1>
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
                            <h1>State:</h1>
                            <h1>GSTIN:</h1>
                        </div>
                        <div className='box-border h-[10%] w-fit p-4 text-center flex lg:flex-col flex-col gap-2'>
                            <input type='text' />
                            <input type='text' />
                        </div>
                    </div>

                    <div className='flex lg:justify-normal justify-between'>
                        <div className='box-border h-[10%] w-32 p-4  flex lg:flex-col flex-col gap-2' >
                            <h1>Lic No.:</h1>
                            <h1>Exp date:</h1>
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
                            <h1>Type:</h1>
                            <h1>PanNo:</h1>
                        </div>
                        <div className='box-border h-[10%] w-fit p-4 text-center flex lg:flex-col flex-col gap-2'>
                            <input type='text' />
                            <input type='text' />
                        </div>
                    </div>

                    <div className='flex lg:justify-normal justify-between'>
                        <div className='box-border h-[10%] w-32 p-4  flex lg:flex-col flex-col gap-2' >
                            <h1>Mobile</h1>
                            <h1>Phone:</h1>
                        </div>
                        <div className='box-border h-[10%] w-fit p-4 text-center flex lg:flex-col flex-col gap-2'>
                            <input type='tel' />
                            <input type='tel' />
                        </div>
                    </div>
                </div>

                <div className='grid grid-flow-row lg:grid-flow-col justify-center'>
                    <div className='flex lg:justify-normal justify-between'>
                        <div className='box-border h-[10%] w-32 p-4  flex lg:flex-col flex-col gap-2'>
                            <h1>Email:</h1>
                            <h1>Website:</h1>
                        </div>
                        <div className='box-border h-[10%] w-fit p-4 text-center flex lg:flex-col flex-col gap-2'>
                            <input type='text' />
                            <input type='text' />
                        </div>
                    </div>

                    <div className='flex lg:justify-normal justify-between'>
                        <div className='box-border h-[10%] w-32 p-4  flex lg:flex-col flex-col gap-2' >
                            <h1>Opening(Rs):</h1>
                            <select>
                                <option>Debit</option>
                                <option>Credit</option>
                            </select>
                        </div>
                        <div className='box-border h-[10%] w-fit p-4 text-center flex lg:flex-col flex-col gap-2'>
                            <input type='text' />
                            <input type='text' />
                        </div>
                    </div>
                </div>

                <div className='flex justify-evenly space-x-[25%] container mx-auto '>
                    <button className='border border-blue-500 pl-4 pr-4 text-xl font-bold rounded p-1 bg-gradient-to-r from-purple-500 to-pink-500' >Licence</button>
                    <button className='border border-blue-500 pl-4 pr-4 text-xl font-bold rounded p-1 bg-gradient-to-r from-purple-500 to-pink-500'>KYC</button>
                </div>

            </div >
        </div>
    )

}
export default Party;