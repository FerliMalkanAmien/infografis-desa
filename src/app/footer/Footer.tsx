import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white shadow dark:bg-gray-900 w-full">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/">
            <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <img
                src="/Logo.png"
                alt="Logo Lampung Timur Unila dan KKN"
                className="w-32 h-auto"
              />
            </div>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="/about">
                <span className="hover:underline me-4 md:me-6">About</span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className="hover:underline">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <Link href="/">
            <span className="hover:underline">
              KKN Unila Periode 2 2024 - Desa Sukaraja Nuban
            </span>
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
