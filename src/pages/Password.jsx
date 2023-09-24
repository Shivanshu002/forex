import Home from "./Home";

function Password() {
    return (
        < >
            <div className='w-fit h-fit my-3 p-2 container mx-auto bg-slate-400 rounded '>
                <div className="flex md:flex-row  flex-col justify-between p-2 md:items-start  gap-2">
                    <div className='flex justify-between items-center gap-2'>
                        <label>Exiting Password </label>
                        <input type='text' />
                    </div>

                    <div className='flex justify-between items-center gap-2'>
                        <label>New Password</label>
                        <input type='text' />
                    </div>

                    <div className='flex justify-between items-center gap-2'>
                        <label>Confirm Password</label>
                        <input type='text' />
                    </div>
                </div>

            </div>
            <div className="flex justify-center">
                <button className='p-1 w-40 m-2 rounded bg-gradient-to-r from-purple-500 to-pink-500'>Save and Exit</button>
            </div>

        </>

    )
}
export default Password;