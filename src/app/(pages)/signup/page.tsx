import Link from "next/link";
import Header from "@/components/(pages)/Header";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export default function SignUpPage() {
  return (
    <div className="bg-white">
      <Header title="Sign Up page" route=" sign up" />

      <div className="flex flex-col mx-auto w-full sm:w-11/12 md:w-10/12 lg:w-[424px] h-auto lg:h-[624px] bg-white drop-shadow-xl shadow-red-500 rounded-md p-6 sm:p-8 lg:py-16 my-8 sm:my-[120px]">
        <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-start">
          Sign Up
        </h3>
        <form>
          <div className="mb-4 relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
              <AiOutlineUser />
            </span>
            <input
              type="text"
              className="w-full h-[40px] sm:h-[44px] border rounded pl-10 pr-3 py-2 placeholder-gray-500"
              placeholder="Name"
            />
          </div>

          <div className="mb-4 relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
              <MdOutlineEmail />
            </span>
            <input
              type="text"
              className="w-full h-[40px] sm:h-[44px] border rounded pl-10 pr-3 py-2 placeholder-gray-500"
              placeholder="Email"
            />
          </div>

          <div className="mb-4 relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
              <MdLockOutline />
            </span>
            <input
              type="text"
              className="w-full h-[40px] sm:h-[44px] border rounded pl-10 pr-3 py-2 placeholder-gray-500"
              placeholder="Password"
            />
          </div>

          <div className="flex items-center mb-4">
            <input type="checkbox" className="mr-2" size={40} />
            <span className="text-sm font-normal">Remember me?</span>
          </div>
          <button
            type="submit"
            className="w-full h-[40px] sm:h-[44px] bg-[#FF9F0D] hover:bg-yellow-600 text-white text-base py-2"
          >
            Sign Up
          </button>
          <p className="text-center mt-4">
            <Link href="/forgot-password" className="text-yellow-500">
              Forgot password?
            </Link>
          </p>
        </form>
        <div className="text-center mt-6 sm:mt-8">
          <p>OR</p>
          <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
            <FcGoogle size={22} />
            Sign up with Google
          </button>
          <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
            <FaApple size={22} />
            Sign up with Apple
          </button>
        </div>
      </div>
    </div>
  );
}
