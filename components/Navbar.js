"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex container dark:bg-gray-900 mx-auto items-center justify-between p-10 border-b border-gray-200 dark:border-gray-700">
      <h1 className="text-2xl font-bold font-mono text-gray-900 dark:text-white">
        Albumo
      </h1>
      <div className="flex items-center gap-6">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          {theme === "dark" ? (
            <SunIcon className="w-5 h-5 text-gray-100" />
          ) : (
            <MoonIcon className="w-5 h-5 text-gray-700" />
          )}
        </button>
        <Link
          href={"/"}
          className="text-xl hover:text-blue-500 cursor-pointer duration-300 text-gray-700 dark:text-gray-300"
        >
          Albümlerim
        </Link>
      </div>
    </div>
  );
};
