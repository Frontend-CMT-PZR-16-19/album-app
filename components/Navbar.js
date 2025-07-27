import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="flex container bg-red-50 mx-auto items-center justify-between p-10">
      <h1 className="text-2xl font-bold font-mono">Albumo</h1>
      <Link
        href={"/"}
        className="text-xl hover:text-blue-500 cursor-pointer duration-300"
      >
        Albümlerim
      </Link>
    </div>
  );
};
