
function Password() {
    return (
        < >
                        <div className='grid grid-flow-row lg:grid-flow-col justify-center'> 
                 <div className='flex lg:justify-normal justify-between'> 
                     <div className='box-border h-[10%] w-32 p-4  flex lg:flex-col flex-col gap-2'> 
                         <h1>Password:</h1> 
                         <h1>Confirm Password:</h1> 
                     </div> 
                     <div className='box-border h-[10%] w-fit p-4 text-center flex lg:flex-col flex-col gap-2'> 
                         <input type='text' /> 
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