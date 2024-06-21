import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Bebra</h1>
      <nav className="flex space-x-4 mb-8">
        <Link href='/'>
          <a className="text-blue-500 hover:text-blue-700 transition-colors duration-300">Home</a>
        </Link>
        <Link href='/api/auth/signin'>
          <a className="text-blue-500 hover:text-blue-700 transition-colors duration-300">Sign In</a>
        </Link>
        <Link href='/register'>
          <a className="text-blue-500 hover:text-blue-700 transition-colors duration-300">Register</a>
        </Link>
      </nav>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={72}
        height={16}
        className="mt-8"
      />
    </div>
  );
}
