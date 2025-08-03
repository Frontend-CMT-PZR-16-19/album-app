import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  return (
    <div className="flex container bg-red-50 dark:bg-gray-800 mx-auto items-center justify-between p-10">
      <h1 className="text-2xl font-bold font-mono text-gray-900 dark:text-gray-100">Albumo</h1>
      <div className="flex items-center gap-4">
        <Link
          href={"/"}
          className="text-xl hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer duration-300 text-gray-900 dark:text-gray-100"
        >
          Albümlerim
        </Link>
        <ThemeToggle />
      </div>
    </div>
  );
};
