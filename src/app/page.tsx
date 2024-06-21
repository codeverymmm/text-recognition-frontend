import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Bebra</h1>
      <nav className="flex space-x-4 mb-8">
        <Link
          href='/'
          className="text-blue-500 hover:text-blue-700 transition-colors duration-300">
          Home
        </Link>
        <Link
          href='/api/auth/signin'
          className="text-blue-500 hover:text-blue-700 transition-colors duration-300">
          Sign In
        </Link>
        <Link
          href='/register'
          className="text-blue-500 hover:text-blue-700 transition-colors duration-300">
          Register
        </Link>
      </nav>
    </div>
  );
}
