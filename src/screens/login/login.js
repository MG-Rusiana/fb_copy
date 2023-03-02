import facebook from './../../img/fbName.png';
import profile1 from './../../img/profile1.png';


export const Login = () => {
    const accounts = [
        { img: profile1, name: "Mark Gil" },
        { img: profile1, name: "P. Rusiana" },
    ]
    const register = () => {
        let x = document.querySelector('.register').classList;
        x.remove("hidden");
        x.add("flex");
    }
    return(
        <div className="flex justify-center items-center w-screen h-screen bg-[#F0F2F5]">
            <div className='register hidden z-10 absolute justify-center items-center w-screen h-screen bg-[#ffffff60]'>
                <div className='flex flex-col w-[35%] h-[70%] bg-[#ffffff] shadow-md rounded-md'>
                    <div className='flex flex-col w-[100%] h-[90px] border-b-[1px] p-3 '>
                        <h1 className='text-[32px] font-semibold font-[helvetica] mb-[-8px]'>Sign Up </h1>
                        <p className='text-[#606770] font-[15px] font-[helvetica]'>It's quick and easy.</p>
                    </div>
                    <form className='flex flex-col items-center gap-4 w-[100%] min-h-[300px] bg-[#fff] p-4'>
                        <div className='flex flex-row gap-3 w-[100%] h-[40px]'>
                            <input className='w-[50%] h-[100%] shadow-inner outline-none border-[1px] rounded-md pl-3 bg-[#F5F6F7]' type='text' placeholder='First name' />
                            <input className='w-[50%] h-[100%] shadow-inner outline-none border-[1px] rounded-md pl-3 bg-[#F5F6F7]' type='text' placeholder='Last name'/>
                        </div>
                        <input className='w-[100%] h-[40px] shadow-inner outline-none border-[1px] rounded-md pl-3 bg-[#F5F6F7]' type='text' placeholder='Mobile number or email' />
                        <input className='w-[100%] h-[40px] shadow-inner outline-none border-[1px] rounded-md pl-3 bg-[#F5F6F7]' type='password' placeholder='New password' />
                        <button className='w-[50%] h-[36px] bg-[#42B72A] text-center text-[#ffffff] rounded-md font-bold text-xl font-[helvetica]'>Sign Up</button>
                    </form>
                </div>

            </div>
            <div className='flex justify-center items-center w-3/6 h-full'>
                <div className="flex flex-col w-[70%] h-[75%] px-10">
                    <img className='w-[198.81px] h-[70px] ml-[-20px]' src={facebook} alt="" onClick={register}/>
                    <h1 className='text-[28px] text-[#1C1E21] font-[helvetica]'>Recent Login</h1>
                    <p className='text=[15px] text-[#65768E] mt-[-5px] font-[helvetica]'>Click your picture or add an account</p>
                    <div className='flex flex-row flex-wrap gap-4 w-[100%] mt-6'>
                        {accounts.map((v)=>{
                            return(
                                <div className='flex flex-col w-[160px] h-[206px] bg-[#ffffff] rounded-[7px] shadow-md'>
                                    <div className='w-[160px] h-[160px]'>
                                        <img className='object-cover rounded-t-[7px]' src={v.img} alt='' />
                                    </div>
                                    <div className='flex justify-center items-center w-[160px] h-[46px]'>
                                        <p className='text-[18px] text-[#4B4F56] font-normal'>
                                            {v.name}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center w-3/6 h-full'>
                <div className='flex flex-col items-center gap-4 w-[400px] h-[375px] bg-[#ffffff] shadow-md rounded-lg'>
                    <form className='flex flex-col w-[100%] h-[275px] items-center px-5 pt-5 gap-5 border-b-[1px]'>
                        <input className='w-[100%] h-[52px] border-[1px] outline-0 focus:border-[#1877F2] rounded-md pl-4 shadow-inner' type='text' placeholder='Email or phone number' />
                        <input className='w-[100%] h-[52px] border-[1px] outline-0 focus:border-[#1877F2] rounded-md pl-4 shadow-inner' type='password' placeholder='Password' />
                        <button className='w-[100%] h-[52px] bg-[#1877F2] text-center text-[#ffffff] rounded-md font-bold text-xl font-[helvetica]'>Log In</button>
                        <div className='w-[100%] text-center'>
                            <p className='font-medium text-sm text-[#1886F5] font-[helvetica]'>Forgot password?</p>
                        </div>
                    </form>
                    <button className='w-[60%] h-[52px] bg-[#42B72A] text-center text-[#ffffff] rounded-md font-bold text-xl mt-2' onClick={register}>Create new account</button>
                </div>
                <div className='flex w-[400px] justify-center items-center mt-5'>
                    <p>Create a Page for a celebrity, brand or business.</p>
                </div>
            </div>
        </div>
    );
}