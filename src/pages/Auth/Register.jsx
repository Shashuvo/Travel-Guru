import React from 'react';
import { NavLink } from 'react-router';

const Register = () => {
    return (
        <div className='flex flex-col items-center gap-3 py-10'>
            {/* login form */}
            <div className='border-2 border-[#ABABAB] rounded-lg mt-28 w-11/12 md:w-2/4'>
                <form className="fieldset rounded-box py-9 px-7 md:px-14 space-y-3 md:space-y-6">
                    <h1 className="text-2xl font-bold">Create an account</h1>
                    <input type="text" name="firstName" className="input w-full border-0 border-b border-[#C5C5C5] placeholder-black pl-0 rounded-none focus:outline-none focus:border-black" placeholder="First Name" />
                    <input type="text" name="LastName" className="input w-full border-0 border-b border-[#C5C5C5] placeholder-black pl-0 rounded-none focus:outline-none focus:border-black" placeholder="Last Name" />
                    <input type="email" name="email" className="input w-full border-0 border-b border-[#C5C5C5] placeholder-black pl-0 rounded-none focus:outline-none focus:border-black" placeholder="Username or Email" />
                    <input type="password" name="password" className="input w-full border-0 border-b border-[#C5C5C5] placeholder-black pl-0 rounded-none focus:outline-none focus:border-black" placeholder="Password" />
                    <input type="password" name="password" className="input w-full border-0 border-b border-[#C5C5C5] placeholder-black pl-0 rounded-none focus:outline-none focus:border-black" placeholder="Confirm Password" />
                    <button className="btn btn-primary mt-4 text-black">Create an account</button>
                    <p className='text-center font-medium text-xs md:text-[16px]'>Already have an account? <NavLink to="/auth/login" className='underline font-semibold text-primary'>Login</NavLink></p>
                </form>
            </div>
            <div className="divider w-11/12 md:w-2/5 mx-auto"><span>Or</span></div>
            {/* social login buttons */}
            <div className='flex flex-col gap-2 w-11/12 md:w-2/5 mx-auto'>
                {/* facebook */}
                <button className="btn bg-white text-black border-[#C7C7C7] rounded-4xl">
                    <svg aria-label="Facebook logo" width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#1A77F2" d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"></path></svg>
                    Login with Facebook
                </button>
                {/* Google */}
                <button className="btn bg-white text-black border-[#C7C7C7] rounded-4xl">
                    <svg aria-label="Google logo" width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                </button>
            </div>

        </div>
    );
};

export default Register;