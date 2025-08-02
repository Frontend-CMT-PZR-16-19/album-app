import Link from "next/link";

export const UserCard = ({ user }) => {
  return (
    <Link href={`/${user.id}`} className="bg-pink-200 rounded-lg px-6 py-2">
      <h1 className="text-2xl italic font-bold">{user.username}</h1>
      <div className="flex gap-8">
        <h3>{user.email}</h3>
        <h3>{user.name}</h3>
      </div>
    </Link>
  );
};
