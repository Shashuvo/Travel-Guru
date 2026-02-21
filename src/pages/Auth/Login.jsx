import React from 'react';

const Login = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='border-2 border-[#ABABAB] rounded-lg mt-36 w-2/4'>
                <form className="fieldset rounded-box py-9 px-14 space-y-6">
                    <h1 className="text-2xl font-bold">Login</h1>
                    <input type="email" className="input w-full border-0 border-b border-[#C5C5C5] placeholder-black pl-0 rounded-none focus:outline-none focus:border-black" placeholder="Username or Email" />
                    <input type="password" className="input w-full border-0 border-b border-[#C5C5C5] placeholder-black pl-0 rounded-none focus:outline-none focus:border-black" placeholder="Password" />
                    <div className='flex justify-between'>
                        <label className='label text-black'>
                            <input type="checkbox" defaultChecked className="checkbox" />
                            <p className='font-semibold'>Remember me</p>
                        </label>
                        <p className='underline font-semibold text-primary'>Forgot Password</p>
                    </div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </form>
            </div>

        </div>
    );
};

export default Login;