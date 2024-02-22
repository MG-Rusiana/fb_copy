import { useState } from 'react';
import facebook from './../../img/fbName.png';
import profile1 from './../../img/profile1.png';
import profile2 from './../../img/Tenchan7.jpg'
import { Outlet, Link } from "react-router-dom";


export const Login = () => {
    const accounts = [
        { img: profile1, name: "Mark Gil" },
        { img: profile2, name: "Sora" },
    ]   

    const language = [
        { lang: "English" },
        { lang: "Filipino" },
        { lang: "Bisaya" },
        { lang: "Español" },
        { lang: "日本語" },
        { lang: "한국어" },
        { lang: "中文" },
        { lang: " العربية" },
        { lang: "Português" },
        { lang: "Français" },
        { lang: "Deutsch" },
    ]

    const otherInfo = [
        { name: "Log In" },
        { name: "Messenger" },
        { name: "Facebook Lite" },
        { name: "Video" },
        { name: "Places" },
        { name: "Games" },
        { name: "Marketplace" },
        { name: "Meta Pay" },
        { name: "Meta Store" },
        { name: "Meta Quest" },
        { name: "Imagine with Meta AI" },
        { name: "Instagram" },
        { name: "Threads" },
        { name: "Fundraisers" },
        { name: "Services" },
        { name: "Voting Information Center" },
        { name: "Privacy Policy" },
        { name: "Privacy Center" },
        { name: "Groups" },
        { name: "About" },
        { name: "Create ad" },
        { name: "Create Page" },
        { name: "Developers" },
        { name: "Careers" },
        { name: "Cookies" },
        { name: "Ad choices" },
        { name: "Terms" },
        { name: "Help" },
        { name: "Contact Uploading & Non-UsersSettings" }
    ];

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
      };

    const [showAddAcc, setShowAddAcc] = useState(false);

    const showAddAccToggle = () => {
        setShowAddAcc(!showAddAcc);
        console.log('clicked')
    };
    

    const register = () => {
        let x = document.querySelector('.register').classList;
        x.remove("hidden");
        x.add("flex");
    }
    return(
        <div className="flex w-screen h-screen flex-col bg-[#F0F2F5]">

            {/* register or sign in */}
            <div className='register hidden z-10 absolute justify-center items-center w-screen h-screen bg-[#00000080]'>
                <div className='flex flex-col w-[432px] h-[540px] bg-[#ffffff] shadow-md rounded-md'>
                    <div className='flex flex-col w-[100%] h-[90px] border-b-[1px] p-3 '>
                        <h1 className='text-[32px] font-semibold font-[helvetica]'>Sign Up </h1>
                        <p className='text-[#606770] font-[12px] font-[helvetica]'>It's quick and easy.</p>
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

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path  fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>

            {/* login by clicking the add account button */}
            <div className={ showAddAcc ? 'z-10 flex absolute justify-center items-center w-screen h-screen bg-[#00000080] ' : 'hidden'}>
                <div className=' flex flex-col w-[390px] h-[400px] bg-[#ffffff] rounded-md'>

                    <div className=' w-full h-[60px] flex justify-between items-center flex-row border-b-[0.5px] px-5'
                        onClick={showAddAccToggle}>
                        <p></p>
                        <p className=' font-normal text-[24px] font-[helvetica]'>Log Into Facebook</p>
                        <div className=' w-[35px] h-[35px] flex justify-center items-center rounded-[50%] bg-[#f0f1f5] hover:bg-[#eaecf000]'>
                            <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                                style={{color: '#000000'}}>
                                <path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                        </div>

                    </div>

                    <form className='flex flex-col w-[100%] items-center px-5 pt-5 gap-5'>
                        <input className='w-[100%] h-[52px] border-[1px] outline-0 focus:border-[#393939] rounded-md pl-4 shadow-inner' type='text' placeholder='Email or phone number' />
                        <input className='w-[100%] h-[52px] border-[1px] outline-0 focus:border-[#1877F2] rounded-md pl-4 shadow-inner' type='password' placeholder='Password' />
                        <div className=' flex flex-row w-full'>
                                <input
                                className=' w-[20px] h-[20px]'
                                type="checkbox"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                                />
                                <p className=' text-[14px] text-[#65768E] font-[helvetica] ml-3 '>Remember password</p>

                        </div>
                        <button className='w-[100%] h-[52px] bg-[#1877F2] text-center text-[#ffffff] rounded-md font-bold text-xl font-[helvetica]'><Link to="/profile">Log In</Link></button>
                        <div className='w-[100%] text-center'>
                            <p className='font-medium text-sm text-[#1886F5] font-[helvetica]'>Forgot password?</p>
                        </div>
                    </form>



                </div>

            </div>

            <div className=' flex flex-row justify-center w-full h-[75%] pt-[100px] bg-[#F0F2F5]'>
                <div className='flex w-[700px] h-full '>
                    <div className="flex flex-col w-full h-full">
                        <img className='w-[198.81px] h-[70px] ml-[-20px]' src={facebook} alt="" />
                        <h1 className='text-[28px] text-[#1C1E21] font-[helvetica]'>Recent Login</h1>
                        <p className='text-[15px] text-[#65768E] mt-[-5px] font-[helvetica]'>Click your picture or add an account</p>

                        {/* recent logins */}
                        <div className='flex flex-row flex-wrap gap-4 w-[100%] mt-6'>
                            {accounts.map((v)=>{
                                return(
                                    <div className='flex flex-col w-[160px] h-[206px] bg-[#ffffff] rounded-[7px] shadow-md'>
                                        <div className='w-[160px] h-[160px] overflow-hidden'>
                                            <img className='rounded-t-[7px]' style={{objectFit: 'cover', width: '100%', height: '100%'}} src={v.img} alt='' />
                                        </div>
                                        <div className='flex justify-center items-center w-[160px] h-[46px]'>
                                            <p className='text-[18px] text-[#4B4F56] font-medium'>
                                                {v.name}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}

                            {/* add account */}
                            <div className='w-[160px] h-[206px]  rounded-[7px] shadow-sm border-[0.5px]' onClick={showAddAccToggle}>
                                <div className=' bg-[#F0F2F5] w-[160px] h-[160px] flex justify-center items-center '>
                                    <div className=' w-[47px] h-[47px] flex justify-center items-center rounded-[50%] bg-[#1886F5]'>
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                                            style={{color: '#F0F2F5', width: 30, height: 30, fontWeight: 'bolder' }}>
                                            <path d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" stroke="#F0F2F5" stroke-width="1"></path></svg>
                                    </div>
                                </div>
                                <div className=' bg-[#ffffff] flex justify-center items-center w-[160px] h-[46px] rounded-b-[7px] '>
                                    <p className=' text-[18px] text-[#1886F5] font-medium '>Add Account</p>
                                </div>              
                            </div>
                        </div>
                    </div>
                </div>

                {/* login */}
                <div className='flex flex-col w-[400px] h-full  '>
                    <div className='flex flex-col items-center w-full h-[375px] bg-[#ffffff] shadow-md rounded-lg mt-[50px]'>
                        <form className='flex flex-col w-[100%] h-[275px] items-center px-5 pt-5 gap-5 border-b-[1px] '>
                            <input className='w-[100%] h-[52px] border-[1px] outline-0 focus:border-[#393939] rounded-md pl-4 shadow-inner' type='text' placeholder='Email or phone number' />
                            <input className='w-[100%] h-[52px] border-[1px] outline-0 focus:border-[#1877F2] rounded-md pl-4 shadow-inner' type='password' placeholder='Password' />
                            <button className='w-[100%] h-[52px] bg-[#1877F2] text-center text-[#ffffff] rounded-md font-bold text-xl font-[helvetica]'><Link to="/profile">Log In</Link></button>
                            <div className='w-[100%] text-center'>
                                <p className='font-medium text-sm text-[#1886F5] font-[helvetica]'>Forgot password?</p>
                            </div>
                        </form>
                        <button className='w-[60%] h-[52px] bg-[#42B72A] text-center text-[#ffffff] rounded-md font-bold text-xl mt-2' onClick={register}>Create new account</button>
                    </div>
                    <div className='flex w-[400px] justify-center items-center mt-5'>
                        <p className='font-semibold whitespace-nowrap'>Create a Page <span className='font-normal'>for a celebrity, brand or business.</span></p>
                    </div>
                </div>
            </div>

            {/* some other information below */}
            <div className=' bg-[#ffffff] w-full h-[25%] flex flex-col items-center'>
                <div className=' w-[1100px] h-[50px] border-b-[0.5px] flex flex-row items-center mb-[10px]'>
                    {language.map((e, index) => {
                        return (
                        <p key={index} className='text-[13px] text-[#65768E] font-[helvetica] hover:underline' style={{ marginRight: '12px' }}>
                            {e.lang}
                        </p>
                        )
                    })}
                </div>
                <div className=' w-[1100px] flex flex-row items-center flex-wrap'>
                    {otherInfo.map((e, index) => {
                        return (
                        <p key={index} className='text-[12px] text-[#65768E] font-[helvetica] hover:underline ' style={{ marginRight: '25px' }}>
                            {e.name}
                        </p>
                        )
                    })}
                </div>
                <div className=' w-[1100px] flex justify-start mt-4'>
                    <p className=' text-[12px] text-[#65768E] font-[helvetica]'>Meta © 2024</p>
                </div>
                
            </div>
        </div>
    );
}